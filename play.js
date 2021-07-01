// const client = require('./client');
// const connect = client.connect;
const {connect} = require('./client');
const {setupInput} = require('./input')


// establishes a connection with the game server


console.log("Connecting ...");
const connection = connect();
setupInput(connection);
