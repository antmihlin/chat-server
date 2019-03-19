/* 
 * Users model
 */

const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const passportLocalMongoose = require('passport-local-mongoose');

const GroupSchema = new Schema({
	users:[{type: Schema.Types.ObjectId}],
	title:{type:String},
	timeCreated : { type : Date, default: Date.now },
	public:{type:Boolean}
},{ collection:"groups" });

//GroupSchema.plugin(passportLocalMongoose);

const Group = mongoose.model('Group', GroupSchema);

module.exports = Group;
