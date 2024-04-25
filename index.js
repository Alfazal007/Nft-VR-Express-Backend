const { startServer, app } = require("./src/index.js");
const dotenv = require("dotenv");
dotenv.config();

startServer();
module.exports = app;