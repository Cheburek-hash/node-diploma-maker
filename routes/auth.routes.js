const Router = require('express');

const { check } = require('express-validator');
const userController = require('../controllers/user.controller');


const router = Router();

router.post('/signup', [
    check('nickname')
        .exists()
        .withMessage('nickname is required')
        .isLength({ min: 3 })
        .withMessage('wrong nickname length'),

    check('email')
        .exists()
        .withMessage('email is required')
        .isEmail()
        .normalizeEmail({gmail_remove_dots: true})
        .withMessage('email is not valid'),
    
    check('password')
        .exists()
        .withMessage('password is required')
        .isLength({min:6})
        .withMessage('password shoul be at least 6 symbols')
    ],
    userController.createUser);
router.post('/login', [
    check('email')
        .exists()
        .withMessage('email is required')
        .isEmail()
        .normalizeEmail({gmail_remove_dots: true})
        .withMessage('email is not valid'),
    
    check('password')
        .exists()
        .withMessage('password is required')
        .isLength({min:6})
        .withMessage('password shoul be at least 6 symbols')
], userController.loginUser);

module.exports = router;


