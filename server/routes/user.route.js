/* 
 * Users endpoints
 */

const express = require('express');
const passport = require('passport');
const userCtrl = require('../controllers/user.controller');
const User = require('../models/user.model');
const router = express.Router();
const auth = require('../middlewares/auth.middleware');

router.post('/login' ,passport.authenticate('local'), userCtrl.login);
router.get('/login-static' , userCtrl.loginPage);
router.get('/register' , userCtrl.createPage);
router.post('/logout' ,auth.isLoggedIn(), userCtrl.logout);
router.post('/' , userCtrl.create);
router.get('/' ,auth.isLoggedIn(), userCtrl.findAll);
router.get('/:id' ,auth.isLoggedIn(), userCtrl.findOne);
router.put('/:id' ,auth.isLoggedIn(), userCtrl.update);
router.delete('/:id' ,auth.isLoggedIn(), userCtrl.delete);

module.exports = router;