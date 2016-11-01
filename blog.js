var express = require("express");
var path = require('path');

var app = express();

// set up handlebars view engine
var handlebars = require('express-handlebars').create({
    defaultLayout:'main'});

// Register `handlebars.engine` with the Express app.
app.engine('handlebars', handlebars.engine);
app.set('view engine', 'handlebars');

//setting localhost and port
app.set('port', process.env.PORT || 8000);

//middleware to access static
app.use(express.static(__dirname + '/public'));

//route to test handlebars view engine
app.get('/home', function(req, res){
	res.render('home');
});

app.get('/about', function(req, res){
	res.render('about');
});

app.get('/contact', function(req, res){
	res.render('contact');
});

app.get('/category/math', function(req, res){
	res.render('categories/mathematics');
});

// custom 404 page
app.use(function(req, res){
	res.type('text/plain');
	res.status(404);
	res.send('404 - Not Found');
});
// custom 500 page
app.use(function(err, req, res, next){
	console.error(err.stack);
	res.type('text/plain');
	res.status(500);
	res.send('500 - Server Error');
});

app.listen(app.get('port'), function(){
	console.log('Express started on http://localhost: ' + app.get('port') + ' press Ctr-c to terminate');
});