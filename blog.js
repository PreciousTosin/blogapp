var express = require("express");
var path = require('path');

var app = express();

//setting localhost and port
app.set('port', process.env.PORT || 8000);

app.use(express.static(__dirname + '/public'));

app.get('/', function(req, res){
	res.json("WELCOME TO BLOG EXPRESS APPLICATION")
});

//adding route for homepage
app.get('/home', function(req, res){
	res.sendFile(path.join(__dirname + '/views/home.html'));
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