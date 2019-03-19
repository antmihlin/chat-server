/* 
 * File controller
 */

const CRUD = require('../middlewares/CRUD.middleware');
const Promise = require('bluebird');
const File = require('../models/file.model');

const passport = require('passport');
const jwt = require('jsonwebtoken');

/*------------------------------------------------------------*/
exports.create =  function(req, res) {
    // Create and Save
	CRUD.create(req,res,File);
};

exports.findAll = function(req, res) {
    // Retrieve and return all  from the database.
	CRUD.findAll(req,res,File);
};

exports.findOne = function(req, res) {
    // Find a single
	CRUD.findOne(req,res,File);
};

exports.update = function(req, res) {
	// Update
	CRUD.update(req,res,File);
};

exports.delete = function(req, res) {
    // Delete a note with the specified noteId in the request
	CRUD.delete(req,res,File);
};