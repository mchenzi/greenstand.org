require('colors');
var express         = require('express'),
    bodyParser      = require('body-parser'),
    // mongoose        = require('mongoose'),
    morgan          = require('morgan')('dev'),
    // Routes          = require('./routes'),
    fs              = require('fs');
    // clientSessions  = require('client-sessions');

// connect to DB
// mongoose.connect('mongodb://localhost/green-stand');

var app = express();
var port = process.env.PORT || 3000;

// Middleware
app.use(
  express.static('./public'),
  bodyParser.urlencoded({extended: true}),
  bodyParser.json()
);

// give routes.js express app object
// Routes(app);

app.listen(port, ()=> {
  console.log(("Server running on port" + port).rainbow);
  console.log("WOOF".random);
})
