// const client = require('./client');
// const connect = client.connect;
const {connect} = require('./client');
const {input} = require('./client')


// establishes a connection with the game server


console.log("Connecting ...");
connect();
input();