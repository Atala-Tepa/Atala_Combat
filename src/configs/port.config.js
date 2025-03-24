// JS FR
const { config } = require("dotenv");
// JS
config();
PORT = +process.env.PORT;
module.exports = PORT;