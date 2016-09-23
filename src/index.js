// require app, mongoose
var app = require('./server/server.js');
var mongoose = require('mongoose');

// set mongoURI
  // var mongoURI = process.env.MONGODB_URI || 'mongodb://localhost/crowdcart';
// connect db
  // mongoose.connect(mongoURI);
// set port
var port = process.env.PORT || 3000;
// listen on port
app.listen(port);
console.log("Server is listening on port " + port);