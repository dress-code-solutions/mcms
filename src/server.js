// server.js
// load the things we need
var express = require('express');
var app = express();

// set the view engine to ejs
app.set('view engine', 'ejs');

// use res.render to load up an ejs view file

// index page
app.get('/', function(req, res) {
    res.render('src/pages/index');
});

// index page
app.get('/login', function(req, res) {
    res.render('src/pages/login/login');
});

// about page
app.get('/about', function(req, res) {
    res.render('src/pages/about');
});

app.listen(8080);
console.log('8080 is running');
