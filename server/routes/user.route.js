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
router.post('/logout' ,passport.authenticate('jwt', {session: false}), userCtrl.logout);
router.post('/' , userCtrl.create);
router.get('/' ,passport.authenticate('jwt', {session: false}), userCtrl.findAll);
router.get('/:id' ,passport.authenticate('jwt', {session: false}), userCtrl.findOne);
router.put('/:id' ,passport.authenticate('jwt', {session: false}), userCtrl.update);
router.delete('/:id' ,passport.authenticate('jwt', {session: false}), userCtrl.delete);

module.exports = router;