/* 
 * Group controller
 */

const CRUD = require('../middlewares/CRUD.middleware');
const Promise = require('bluebird');
const Group = require('../models/group.model');
const omit = require('lodash').omit;

const passport = require('passport');
const jwt = require('jsonwebtoken');

/*------------------------------------------------------------*/
exports.create =  function(req, res) {
    // Create and Save
	CRUD.create(req,res,Group);
};

exports.findAll = function(req, res) {
    // Retrieve and return all  from the database.
	let query = req.body.params || req.query;
	if( query.userId !== undefined ){
		const { offset, limit } = query;
		query = omit(query, ['offset', 'limit']);
		query.users = [query.userId];
		let result = { count:null, pagesCount:null, value:null, links: null	};

		Group.find({users:query.userId}, function(err, data) {
			if(err) {
				res.status(500).send({message: err.message});
			} else {
				Group.countDocuments(query, (err, count) => {
					if(err) {
						res.status(500).send({message: err.message});
					} else {
						result.value = data;
						result.count = count;
						res.send(result);
					}
				});
			}
		} );
	}else{
		res.status(500).send({message:'No user id was specified'});
	}
};

exports.findOne = function(req, res) {
    // Find a single
	CRUD.findOne(req,res,Group);
};

exports.update = function(req, res) {
	// Update
	CRUD.update(req,res,Group);
};

exports.delete = function(req, res) {
    // Delete a note with the specified noteId in the request
	CRUD.delete(req,res,Group);
};