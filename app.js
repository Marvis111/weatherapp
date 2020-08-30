var express = require('express');
const request = require('request');
var app = express();
const port = process.env.PORT || 8000;
const { array } = require('yargs');
const controller = require('./controller/controller');
app.set('view engine','ejs');
app.use('/Styles',express.static('Styles'));
app.use('/fonts',express.static('fonts'));



//calling the Weather controller function..
controller(app);


app.listen(port);
console.log('server running on 8000');
