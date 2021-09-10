const Router = require('express');

const userController = require('../controllers/user.controller');

const router = Router();

router.post('/user/create', userController.createUser);

router.get('/user/get', userController.getUsers);
router.get('/user/:id', userController.getOneUser);
router.put('/user/update', userController.updateUser);
router.delete('/user/delete/:id', userController.deleteUser);

module.exports = router;
