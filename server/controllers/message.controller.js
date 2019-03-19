/* 
 * Message controller
 */

const CRUD = require('../middlewares/CRUD.middleware');
const Promise = require('bluebird');
const Message = require('../models/message.model');

const passport = require('passport');
const jwt = require('jsonwebtoken');

/*------------------------------------------------------------*/
exports.create =  function(req, res) {
    // Create and Save
	CRUD.create(req,res,Message);
};

exports.findAll = function(req, res) {
    // Retrieve and return all  from the database.
	CRUD.findAll(req,res,Message);
};

exports.findOne = function(req, res) {
    // Find a single
	CRUD.findOne(req,res,Message);
};

exports.update = function(req, res) {
	// Update
	CRUD.update(req,res,Message);
};

exports.delete = function(req, res) {
    // Delete a note with the specified noteId in the request
	CRUD.delete(req,res,Message);
};