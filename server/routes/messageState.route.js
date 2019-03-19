/* 
 * Users endpoints
 */

const express = require('express');
const passport = require('passport');
const messageStateCtrl = require('../controllers/messageState.controller');
const router = express.Router();
const auth = require('../middlewares/auth.middleware');

router.post('/' ,passport.authenticate('jwt', {session: false}), messageStateCtrl.create);
router.get('/' ,passport.authenticate('jwt', {session: false}), messageStateCtrl.findAll);
router.get('/:id' ,passport.authenticate('jwt', {session: false}), messageStateCtrl.findOne);
router.put('/:id' ,passport.authenticate('jwt', {session: false}), messageStateCtrl.update);
router.delete('/:id' ,passport.authenticate('jwt', {session: false}), messageStateCtrl.delete);

module.exports = router;