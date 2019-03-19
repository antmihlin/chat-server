/* 
 * Users model
 */

const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const passportLocalMongoose = require('passport-local-mongoose');

const MessageStateSchema = new Schema({
	userId:{type: Schema.Types.ObjectId},
	messageId:{type: Schema.Types.ObjectId},
	state:{type:String,enum:['sent','received','read','responded']},
	stateChangeTime : { type : Date},
	time : { type : Date, default: Date.now },
},{ collection:"messageStates" });

//MessageStateSchema.plugin(passportLocalMongoose);

const MessageState = mongoose.model('MessageState', MessageStateSchema);

module.exports = MessageState;
