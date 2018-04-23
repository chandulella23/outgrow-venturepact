<<<<<<< HEAD
const express = require('express');
const app = express();
// Run the app by serving the static files
// in the dist directory
app.use(express.static(__dirname + '/dist'));
// Start the app by listening on the default
// Heroku port
app.listen(process.env.PORT || 8080);

const path = require('path');
// ...
// For all GET requests, send back index.html
// so that PathLocationStrategy can be used
app.get('/*', function(req, res) {
  res.sendFile(path.join(__dirname + '/dist/index.html'));
});
=======
var express = require('express');
var app=express();
app.use(express.static(__dirname + '/server'));
app.listen(process.env.PORT || 3000);
>>>>>>> c66877886af97b44f946859665bbf8d2eefdcd2d
