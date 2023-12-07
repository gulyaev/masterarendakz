const Router = require("express");
const router = new Router();
const authMiddleware = require('../middleware/auth.middleware');
const fileController = require("../controller/file.controller")


router.post('/avatar', authMiddleware, fileController.uploadAvatar);

module.exports = router