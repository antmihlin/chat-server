/* 
 * MessageState controller
 */

const CRUD = require('../middlewares/CRUD.middleware');
const Promise = require('bluebird');
const MessageState = require('../models/messageState.model');

const passport = require('passport');
const jwt = require('jsonwebtoken');

/*------------------------------------------------------------*/
exports.create =  function(req, res) {
    // Create and Save
	CRUD.create(req,res,MessageState);
};

exports.findAll = function(req, res) {
    // Retrieve and return all  from the database.
	CRUD.findAll(req,res,MessageState);
};

exports.findOne = function(req, res) {
    // Find a single
	CRUD.findOne(req,res,MessageState);
};

exports.update = function(req, res) {
	// Update
	CRUD.update(req,res,MessageState);
};

exports.delete = function(req, res) {
    // Delete a note with the specified noteId in the request
	CRUD.delete(req,res,MessageState);
};