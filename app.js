/*app.js*/

var express 	= require('express')
, path 			= require('path')
, debug 		= require('morgan')
, bodyParser 	= require('body-parser')
, app 			= express();

var user  		= require('./routes/users');
var project 	= require('./routes/projects');
var task 		= require('./routes/tasks');

app.use(debug('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.use('/api/v1', user);
app.use('/api/v1', project);
app.use('/api/v1', task);

app.use(function(req, res, next) {
	var err = new Error('Not Found');
	err.status = 404;
	next(err);
});

if (app.get('env') === 'development') {
	app.use(function(err, req, res, next) {
		res.status(err.status || 500);
		res.render('error', {
			message: err.message,
			error: err
		});
	});
}

app.use(function(err, req, res, next) {
	res.status(err.status || 500);
	res.render('error', {
		message: err.message,
		error: {}
	});
});

module.exports = app;
