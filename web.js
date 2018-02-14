/**
 * @author haansoo
 */
var express = require('express'); 
var app = express();

app.get('/', function(req, res){
	res.send('Hellow World!!');
});

app.get('/inputdata', function(req, res){
	res.send('input data!!!');
});

app.get('/log', function(req, res){
	res.send('Log Show');
});

app.listen(8001,function(){
	console.log('Connect 8001 Port!!!');
});
