var express = require("express");
var path = require('path');

var app = express();

// set up handlebars view engine
var handlebars = require('express-handlebars').create(
{
    defaultLayout:'main',
    extname: '.hbs', 
  });

// Register `handlebars.engine` with the Express app.
app.engine('hbs', handlebars.engine);
app.set('view engine', 'hbs');

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
	res.status(404);
	res.render('404');
});
// custom 500 page
app.use(function(err, req, res, next){
	console.error(err.stack);
	res.status(500);
	res.render('500');
});

app.listen(app.get('port'), function(){
	console.log('Express started on http://localhost: ' + app.get('port') + ' press Ctr-c to terminate');
});