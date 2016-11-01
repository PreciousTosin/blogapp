var express = require("express");

var app = express();

//setting localhost and port
app.set('port', process.env.PORT || 8000);


app.listen(app.get('port'), function(){
	console.log('Express started on http://localhost: ' + app.get('port') + ' press Ctr-c to terminate');
});