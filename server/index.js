const express = require("express");
const userRouter = require('./routes/user.routes')
const postRouter = require('./routes/post.routes')
const authRouter = require("./routes/auth.routes");
const config = require("config");

const app = express();
app.get('/', (req, res) => {
    res.send('HELLO POSTGRESS + NODEJSdsdfsf')
})

app.use(express.json());
app.use('/api', userRouter)
app.use('/api', postRouter)
app.use("/api/auth", authRouter);

const PORT = config.get('serverPort');

const start = () => {
    try {
        app.listen(PORT, () => {
            console.log("Server started on port " + PORT);
        });
    } catch (error) {
        
    }
}

start();
