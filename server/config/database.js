/**/
const mongoose = require('mongoose');

const mongoDB = process.env.MONGODB_URI || 'mongodb://localhost:27017/chat';

const serverOptions = {
    poolsize:100 ,
    socketOptions:{
            socketTimeoutMS: 3000000,
            connectionTimeoutMS: 3000000,
            keepAlive:3000000
        }
    };

mongoose.connect(mongoDB, {
	socketTimeoutMS: 3000000,
	connectTimeoutMS: 3000000,
	keepAlive:3000000,
});

//Get the default connection
const db = mongoose.connection;

//Bind connection to error event (to get notification of connection errors)
db.on('error', console.error.bind(console, 'MongoDB connection error:'));

module.exports = db;