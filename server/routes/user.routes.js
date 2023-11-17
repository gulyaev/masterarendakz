const Router = require("express")
const router = new Router()
const userController = require("../controller/user.controller")
const authMiddleware = require('../middleware/auth.middleware');

router.post('/user', userController.createUser);
router.get('/user', userController.getUsers);
router.get('/user/:id', userController.getOneUser);
router.get('/user/status/:id', userController.getUserStatus);
router.put('/user/status', authMiddleware, userController.updateUserStatus);
router.put('/user', userController.updateUser);
router.delete('/user/:id', userController.deleteUser)
router.put("/follow", authMiddleware, userController.followUser);
router.put("/unfollow", authMiddleware, userController.unfollowUser);


module.exports = router