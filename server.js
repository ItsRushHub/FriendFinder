// Dependencies
var bodyParser = require('body-parser');
var express = require('express');
var path = require('path');

var app = express();

//Port
var PORT = process.env.PORT || 8080;  

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))
 
// parse application/json
app.use(bodyParser.json())
 
// // Router
require("./routing/htmlRoutes.js")(app);
require("./routing/apiRoutes.js")(app);
require("../data/friends.js")(app);


app.listen(PORT, function() {
  console.log("Server listening on: http://localhost:" + PORT);
});









// var bodyParser = require('body-parser')
// var express = require("express");
// var app = express();




// app.use(express.urlencoded({ extended: true }));
// app.use(express.json());





