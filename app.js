const express = require("express");
const http = require("http");
const socketIo = require("socket.io");
const axios = require("axios");
const bodyParser = require('body-parser');
const expressSession = require('express-session');

const path = require('path');
require('dotenv').config();
const port = process.env.PORT || 4001;
//const index = require("./routes/index");
const app = express();
const cors = require('cors');
const routes = require('./routes');

const mongo = require('mongodb');
const db = require('./server/config/database');

// Config
global.appRoot = path.resolve(__dirname);

app.use(cors()); // Use this after the variable declaration

//app.use(index);
const server = http.createServer(app);
const io = socketIo(server, {
	origins: 'http://localhost:3006'
});

global.messages = [];

//______________________________________________________________________

// Configuring Passport
const passport = require('passport');
const LocalStrategy = require('passport-local').Strategy;
const User = require('./server/models/user.model');
//______________________________________________________________________

const router = express.Router();

//_____________________________________
// Parsers
app.use(bodyParser.json({limit: '50mb'}));
app.use(bodyParser.urlencoded({extended: true, limit: '50mb', parameterLimit: 50000 }));

app.use(passport.initialize());
app.use(passport.session({ cookie: { maxAge : 10000 }}));

passport.use(new LocalStrategy(	User.authenticate()	));

passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser());

//_____________________________________

// Routes
app.use('/user', routes.userRoute);
app.use('/group', routes.groupRoute);
app.use('/message', routes.messageRoute);
app.use('/messageState', routes.messageStateRoute);
app.use('/file', routes.fileRoute);

router.get("/", (req, res) => {
  res.set('Access-Control-Allow-Origin', '*');
  res.set('Access-Control-Allow-Credentials', 'false');
  res.send({ response: "I am alive" }).status(200);
});

//Receives messages
//Emit socket
router.post("/send/:room/", (req, res) => {
	res.set({
		'Access-Control-Allow-Origin': 'http://localhost:3006', 
		'Access-Control-Allow-Credentials': 'false'
	});
	//global.messages.push(req.query);
	//getApiAndEmit(socketConnection);
	//res.send(req.query).status(200);
  
    let room = req.params.room;
    let message = req.query;

    io.sockets.in(room).emit('message', { room: room, message: message });

    res.end('message sent');
});

/*
app.post('/send/:room/', function(req, res) {
    var room = req.params.room
        message = req.body;

    io.sockets.in(room).emit('message', { room: room, message: message });

    res.end('message sent');
});
 */

app.use(router);

//______________________________________________________________________

let socketConnection = null;

/*
 * User's subscription to socket
 * Emits every 5 seconds
 
io.on("connection", socket => {
	console.log("New client connected"), setInterval(
	  () => getApiAndEmit(socket),
	  5000
	);
	socketConnection = socket;
	socket.on("disconnect", () => console.log("Client disconnected"));
});

const getApiAndEmit = async socket => {
    socket.emit("FromAPI",global.messages);
};
*/
io.sockets.on('connection', (socket)=>{
	
	//console.log("New client connected"), setInterval(
	 // () => getApiAndEmit(socket),
	//  5000
	//);
	
    socket.on('subscribe', (room) =>{
        console.log('joining room', room);
        socket.join(room);
    });

    socket.on('unsubscribe', (room) =>{  
        console.log('leaving room', room);
        socket.leave(room);
    });

    socket.on('send', (data)=> {
        console.log('sending message',data);
        io.sockets.in(data.room).emit(data);
    });
	
	socket.on("disconnect", () => console.log("Client disconnected"));
});

const getApiAndEmit = async socket => {
    socket.emit("FromAPI",global.messages);
};


server.listen(port, () => console.log(`Listening on port ${port}`));