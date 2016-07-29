#!/bin/env node
//  OpenShift sample Node application
var http = require('http');

//Get the environment variables we need.
var port    = process.env.PORT || 8080;

var http = require('http');

function onRequestPage(request, response) {
	response.writeHead(200, {'Content-Type':'text/html'});
	//response.write('Hello world!');
	var html = [
				'<html>',
				'<head>',
				'<title> Hello world sample </title>',
				'</head>',
				'<body>',
				'<h1>Hello world! Test</h1>',
				'</body>',
				'</html>'
				];

	response.write(html.join(''));
	response.end();
}

var server = http.createServer(onRequestPage).listen(port);
console.log('Server running port ' + port);

