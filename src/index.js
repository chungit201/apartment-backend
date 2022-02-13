const mongoose = require("mongoose");
const app = require("./app");
const http = require("http");
const config = require("./config/config");


mongoose.connect(config.mongoose.url, {
  useNewUrlParser: true,
  useCreateIndex: true,
  useUnifiedTopology: true
}).then(async () => {
  console.log("Connected to MongoDB");
  const connect = async () => {
    return http.createServer(app).listen(config.port);
  };
  connect()
    .then(server => {
      console.log("Server is running on port " + config.port);
    });
}).catch(e => {
  console.log(e);
});





