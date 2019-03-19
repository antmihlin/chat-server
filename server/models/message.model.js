/* 
 * Users model
 */

const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const passportLocalMongoose = require('passport-local-mongoose');

const MessageSchema = new Schema({
	ownerId:{type: Schema.Types.ObjectId},
	groupId:{type: Schema.Types.ObjectId},
	file:{type: Schema.Types.ObjectId},
	text:{type:String},
	type:{type:String,enum:['emergency','normal']},
	time : { type : Date, default: Date.now },
	expiration:{type:Date}
},{ collection:"messages" });

//MessageSchema.plugin(passportLocalMongoose);

const Message = mongoose.model('Message', MessageSchema);

module.exports = Message;
