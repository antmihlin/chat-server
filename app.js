const express = require("express");
const http = require("http");
const socketIo = require("socket.io");
const axios = require("axios");
const port = process.env.PORT || 4001;
//const index = require("./routes/index");
const app = express();
const cors = require('cors');

app.use(cors()); // Use this after the variable declaration

//app.use(index);
const server = http.createServer(app);
const io = socketIo(server, {
	origins: 'http://localhost:3006'
});

global.messages = [];

//______________________________________________________________________

//const express = require("express");
const router = express.Router();
router.get("/", (req, res) => {
  res.set('Access-Control-Allow-Origin', '*');
  res.set('Access-Control-Allow-Credentials', 'false');
  res.send({ response: "I am alive" }).status(200);
});

router.post("/", (req, res) => {
  res.set({
	  'Access-Control-Allow-Origin': 'http://localhost:3006', 
	  'Access-Control-Allow-Credentials': 'false'
  });
  global.messages.push(req.query);
  getApiAndEmit(socketConnection);
  res.send(req.query).status(200);
});

app.use(router);

//______________________________________________________________________

let socketConnection = null;

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
server.listen(port, () => console.log(`Listening on port ${port}`));


