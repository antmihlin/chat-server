/* 
 * Users endpoints
 */

const express = require('express');
const passport = require('passport');
const fileCtrl = require('../controllers/file.controller');
const router = express.Router();
const auth = require('../middlewares/auth.middleware');

router.post('/' , passport.authenticate('jwt', {session: false}),fileCtrl.create);
router.get('/' ,passport.authenticate('jwt', {session: false}), fileCtrl.findAll);
router.get('/:id' ,passport.authenticate('jwt', {session: false}), fileCtrl.findOne);
router.put('/:id' ,passport.authenticate('jwt', {session: false}), fileCtrl.update);
router.delete('/:id' ,passport.authenticate('jwt', {session: false}), fileCtrl.delete);

module.exports = router;