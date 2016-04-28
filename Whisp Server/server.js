//Dependencies
var express = require('express');
var bodyParser = require('body-parser');
var mongoose = require('mongoose');

//MongoDB
mongoose.connect('mongodb://localhost/whispful');

//Express
var app = express();
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});


app.use('/api', require('./routes/api'));

app.listen(3000);
console.log('Server is running at port 3000');
