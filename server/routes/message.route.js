/* 
 * Users endpoints
 */

const express = require('express');
const passport = require('passport');
const messageCtrl = require('../controllers/message.controller');
const router = express.Router();
const auth = require('../middlewares/auth.middleware');

router.post('/' ,passport.authenticate('jwt', {session: false}), messageCtrl.create);
router.get('/' ,passport.authenticate('jwt', {session: false}), messageCtrl.findAll);
router.get('/:id' ,passport.authenticate('jwt', {session: false}), messageCtrl.findOne);
router.put('/:id' ,passport.authenticate('jwt', {session: false}), messageCtrl.update);
router.delete('/:id' ,passport.authenticate('jwt', {session: false}), messageCtrl.delete);

module.exports = router;