const db = require('../db');

class UserController {
    async createUser(req, res) {
        const { name, surname } = req.body
        const newPerson = await db.query(`INSERT INTO person (name, surname) values ($1, $2) RETURNING *`, [name, surname])
        res.json(newPerson.rows[0])
    }

    async getUsers(req, res) {
        const users = await db.query(`SELECT * from person `)
        res.json(users.rows)
    }

    async getUsers(req, res) {
        try {
            const currentPage = parseInt(req.query.page);
            const perPage = parseInt(req.query.per_page);

            const startIndex = (currentPage - 1) * perPage;
            const endIndex = currentPage * perPage;

            const users = await db.query(`select * from person`)

            const results = {}

            if (endIndex < users.rows.length) {
                results.next = {
                    currentPage: currentPage + 1,
                    perPage: perPage
                }
            }

            if (startIndex > 0) {
                results.previous = {
                    currentPage: currentPage - 1,
                    perPage: perPage
                }
            }
            results.totalCount = users.rows.length;

            //вывод пользователей в пределах заданного размера порции:
            results.results = users.rows.slice(startIndex, endIndex);
            if (!users) throw Error('No items');

            res.status(200).json(results);
        } catch (error) {
            console.log(error)
        }
    }

    async getOneUser(req, res) {
        const id = req.params.id
        const user = await db.query(`SELECT * FROM person where id=$1`, [id])
        res.json(user.rows[0])
    }

    async getUserStatus(req, res) {
      const id = req.params.id;
      const user = await db.query(`SELECT * FROM person where id=$1`, [id]);
      res.json(user.rows[0].status);
    }

    async updateUserStatus(req, res) {
      try {
        const id = req.user.id;
        const { status } = req.body;
        const user = await db.query(
          `update person set status=$2 where id=$1 RETURNING *`,
          [id, status]
        );
        res.json(user.rows[0].status);
      } catch (error) {
        console.log("й43" + error);
      }
    }
  

    async updateUser(req, res) {
        const { id, name, surname } = req.body
        const user = await db.query(`UPDATE person set name=$1, surname=$2 where id=$3 RETURNING *`, [name, surname, id])
        res.json(user.rows[0])
    }

    async deleteUser(req, res) {
        const id = req.params.id
        const user = await db.query(`DELETE FROM person where id=$1`, [id])
        res.json(user.rows[0])
    }

    followUser(req, res) {
        const { id } = req.body; // following to
        const userId = req.user.id; //loggedin
    
        const p = new Promise((resolve, reject) => {
          const user = db.query(
            `update person set followings = array_append(followings, $1) where id=$2 RETURNING *`,
            [id, userId]
          );
          resolve(user);
        });
        p.then((data) => {
          db.query(
            `update person set followers = array_append(followers, $2) where id=$1 RETURNING *`,
            [id, userId]
          );
          res.status(200).json(data.rows[0]);
        });
      }
    
    unfollowUser(req, res) {
        const { id } = req.body; // following to
        const userId = req.user.id; //loggedin
    
        const p = new Promise((resolve, reject) => {
          const user = db.query(
            `update person set followings = array_remove(followings, $1) where id=$2 RETURNING *`,
            [id, userId]
          );
          resolve(user);
        });
        p.then((data) => {
          db.query(
            `update person set followers = array_remove(followers, $2) where id=$1 RETURNING *`,
            [id, userId]
          );
          res.status(200).json(data.rows[0]);
        });
      }
}

module.exports = new UserController()
