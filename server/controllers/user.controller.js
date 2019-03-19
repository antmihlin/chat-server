/* 
 * User controller
 */

const CRUD = require('../middlewares/CRUD.middleware');
const Promise = require('bluebird');
const User = require('../models/user.model');

const passport = require('passport');
const jwt = require('jsonwebtoken');

/*------------------------------------------------------------*/

exports.loginPage = function(req, res) {
    // Retrieve and return all  from the database.
	res.status(200).send(`
		<form method="post" action="${req.baseUrl}/login" >
			<h1>Login</h1>
			<label>Username</label>
			<input type="text" name="username"/>
			<label>Password</label>
			<input type="password" name="password"/>
			<button type="submit" >Login</button>
		</form>
	`);
};

/*exports.login = function(req,res,next){
	req.login(req.user, function (err, data) {
		if (err) {
			return next(err);
		}
		if (req.user.role > 4) {
			return next('User does not have access');
		}
		return res.status(200).json({id: req.user.id, username: req.user.username});
	});
};
*/
exports.login = function (req, res) {
	req.login(req.user, {session: false}, function (err, data) {
		if (err) {
			return next(err);
		}
		const token = jwt.sign(req.user.toJSON(), 'your_jwt_secret' ,{ expiresIn: '30m' } );
		let userData = {};
		User.findById( req.user.id, function(err, data){
			if(err) {
				res.status(500).send({message: err.message});
			} else {
				userData = data;
				return res.status(200).json({ id: req.user.id, username: req.user.username, token,nickName:userData.nickName });
			}
		});
		
	});
};
 
exports.logout = function(req,res){
	req.logout();
	res.status(200).json('Logged out');
};

exports.isAuthorized = function (req, res) {
	if (req.isAuthenticated() === false) {
		return res.status(401).send(req.isAuthenticated());
	}
	return res.status(200).json({id: req.user.id, username: req.user.username, role: req.user.role, regionUc: req.user.regionUc, institute: req.user.institute});
};

exports.createPage = function(req, res) {
    // Retrieve and return all  from the database.
	res.status(200).send(`
		<form method="post" action="${req.baseUrl}" >
			<h1>Register</h1>
			<label>Username</label>
			<input type="text" name="username"/>
			<label>Password</label>
			<input type="password" name="password"/>
			<button type="submit" >Register</button>
		</form>
	`);
};

exports.create =  function(req, res) {
    // Create and Save
	User.register(new User(req.body), req.body.password, (err, data) => {
		if (err)
			return res.status(500).json("Error" + err);
		else
			res.status(200).json('Registered');
	});
};

exports.findAll = function(req, res) {
    // Retrieve and return all  from the database.
	CRUD.findAll(req,res,User);
};

exports.findOne = function(req, res) {
    // Find a single
	CRUD.findOne(req,res,User);
};

exports.update = function(req, res) {
	// Update
	CRUD.update(req,res,User);
};

exports.delete = function(req, res) {
    // Delete a note with the specified noteId in the request
	CRUD.delete(req,res,User);
};