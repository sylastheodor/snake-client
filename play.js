// const client = require('./client');
// const connect = client.connect;
const {connect} = require('./client');

const setupInput = function () {
  const stdin = process.stdin;
  stdin.setRawMode(true);
  stdin.setEncoding("utf8");
  stdin.resume();
  const handleUserInput = (key) => {
    if (key === '\u0003') {
      process.exit();
    }
  }
  stdin.on("data", handleUserInput);
  return stdin;
};


// establishes a connection with the game server


console.log("Connecting ...");
connect();
setupInput();