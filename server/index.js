const express = require("express");
const userRouter = require('./routes/user.routes')
const postRouter = require('./routes/post.routes')
const authRouter = require("./routes/auth.routes");
const config = require("config");
const pool = require("./db");

const app = express();
app.get('/', async (req, res) => {
    res.send('HELLO POSTGRESS + NODEJS')
})

app.post('/', async (req, res) => {
    const {name, content} = req.body
    try {
        await pool.query(`INSERT INTO sales (name, content) VALUES ($1, $2)`, [name, content])
        res.status(200).send({message: "Successfuly added child"})
    } catch (error) {
        console.log(error);
        res.sendStatus(500);
    }
})

app.get('/setup', async (req, res) => {
    try {
        await pool.query( "CREATE TABLE sales( id SERIAL PRIMARY KEY, name VARCHAR(100), content VARCHAR(100))")
        res.status(200).send({message: "Successfuly created table"})
    } catch (error) {
        console.log(error);
        res.sendStatus(500);
    }
})

app.get('/create', async (req, res) => {
    try {
        await pool.query( "CREATE DATABASE masterarendakz")
        res.status(200).send({message: "Successfuly created database"})
    } catch (error) {
        console.log(error);
        res.sendStatus(500);
    }
})

const PORT = config.get('serverPort');
const corsMiddleware = require ('./middleware/cors.middleware');

app.use(express.json());
app.use(corsMiddleware);
app.use('/api', userRouter)
app.use('/api', postRouter)
app.use("/api/auth", authRouter);

const start = () => {
    try {
        app.listen(PORT, () => {
            console.log("Server started on port " + PORT);
        });
    } catch (error) {
        
    }
}

start();
