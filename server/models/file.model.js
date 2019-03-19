/* 
 * Users model
 */

const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const passportLocalMongoose = require('passport-local-mongoose');

const FileSchema = new Schema({
	filename:{type:String},
	format:{type:String},
	path:{type:String},
	timeCreated : { type : Date, default: Date.now },
},{ collection:"files" });

//FileSchema.plugin(passportLocalMongoose);

const File = mongoose.model('File', FileSchema);

module.exports = File;
