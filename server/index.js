const express = require("express");
const fileUpload = require("express-fileupload");
const config = require("config");
const userRouter = require('./routes/user.routes');
const postRouter = require('./routes/post.routes');
const authRouter = require("./routes/auth.routes");
const fileRouter = require("./routes/file.routes");
const corsMiddleware = require ('./middleware/cors.middleware');

const app = express();

const PORT = config.get('serverPort');

app.use(corsMiddleware);
app.use(express.json());
app.use(fileUpload({}));
app.use(express.static("static"));

app.use('/api', userRouter);
app.use('/api', postRouter);
app.use("/api/auth", authRouter);
app.use('/api', fileRouter);


const start = () => {
    try {
        app.listen(PORT, () => {
            console.log("Server started on port " + PORT);
        });
    } catch (error) {
        
    }
}

start();
