const Router = require('express')
const router = new Router()
const db = require('../db')
const bcrypt = require("bcryptjs");
const { check, validationResult } = require('express-validator')
const jwt = require("jsonwebtoken");
const config = require("config");
const authMiddleware = require('../middleware/auth.middleware');

router.post('/register',
    [
        check('email', 'Email is not correct').isEmail(),
        check('password', 'Password should be 3 and 12').isLength({ min: 3, max: 12 })
    ],
    async (req, res, next) => {
        try {
            const errors = validationResult(req)
            if (!errors.isEmpty()) {
                res.status(400).json({ message: "Некорректный email или пароль", errors })
            } else {
                const { name, email, password } = req.body
                const candidate = await db.query(`select * from person where email=$1`, [email])
                if (candidate.rows.length !== 0) {
                    res.json({ message: "Пользователь с таким email уже существует" })
                } else {
                    const hashedpassword = await bcrypt.hash(password, 15)
                    const newUser = await db.query(`insert into person (name, email, password) values ($1, $2, $3) RETURNING *`, [name, email, hashedpassword])
                    res.status(200).json({ message: "Пользователь создан" })
                }
            }
        } catch (error) {
            console.log(error);
            res.send({ message: "Server error" })
        }
    })


router.post('/login', async (req, res) => {
        try {
            const { email, password } = req.body
            const user = await db.query(`select * from person where email=$1`, [email])

            if (!user.rows[0]) {
                return res.status(404).json({ message: "Пользователь не найден" })
            } else {
                console.log("Here")
                const isPassValid = bcrypt.compareSync(password, user.rows[0].password)
                if (!isPassValid) {
                    return res.status(400).json({ message: 'Неверный пароль' })
                }
                const token = jwt.sign({ id: user.rows[0].id }, config.get("secretKey"), { expiresIn: "1h" })
                return res.status(200).json({
                    token,
                    user: {
                        id: user.rows[0].id,
                        email: user.rows[0].email,
                        name: user.rows[0].name,
                    }
                })
            }
        } catch (error) {
            console.log(error)
            res.send({ message: "Ошибка сервера" })
        }
    })
    

router.get("/me", authMiddleware, async (req, res) => {
        try {
          const userId = req.user.id;
          const user = await db.query(`select * from person where id=$1`, [userId]);
      
          if (!user) {
            res.status(404).json({ message: "user not found" });
          } else {
            //res.status(200).json(user.rows[0].id)
            const token = jwt.sign({ id: user.rows[0].id }, config.get("secretKey"), {
              expiresIn: "1h",
            });
      
            return res.json({
              token,
              user: {
                id: user.rows[0].id,
                email: user.rows[0].email,
                nikname: user.rows[0].nikname,
              },
            });
          }
        } catch (e) {
          console.log(e);
          res.send({ message: "Server error" });
        }
      });
      
    
module.exports = router
