const Router = require('express');
const userController = require('../controllers/user.controller');


const router = Router();


router.post('/signup', userController.createUser);
router.post('/login', userController.loginUser);

module.exports = router;


