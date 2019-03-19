/* 
 * Users endpoints
 */

const express = require('express');
const passport = require('passport');
const groupCtrl = require('../controllers/group.controller');
const router = express.Router();
const auth = require('../middlewares/auth.middleware');

router.post('/' ,passport.authenticate('jwt', {session: false}), groupCtrl.create);
router.get('/' ,passport.authenticate('jwt', {session: false}), groupCtrl.findAll);
router.get('/:id' ,passport.authenticate('jwt', {session: false}), groupCtrl.findOne);
router.put('/:id' ,passport.authenticate('jwt', {session: false}), groupCtrl.update);
router.delete('/:id' ,passport.authenticate('jwt', {session: false}), groupCtrl.delete);

module.exports = router;