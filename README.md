# NodeJs chat backend

Uses socket.io for sending live messages.
Front end part could be found [here](https://github.com/antmihlin/chat)

Username added on page openning. UserId created form user name and random string. 
It does not use database or cookies for saving username.

Open the page and enter your name. That's it, you can start chatting.

## Get started

Clone repository

    git clone https://github.com/antmihlin/chat-server

Change directory

    cd chat-server

Install dependencies

    npm install

Start server

    node app.js

It will be accessible on http://localhost:4001/

## Possible improvements

 - Add authentication
 - Send only new messages
 - Lazy load previous messages
 - Save messages into database

## References

 - [socket.io](https://socket.io/)
 - [ExpressJs](https://expressjs.com/)
 - [NodeJs](https://nodejs.org/en/)
