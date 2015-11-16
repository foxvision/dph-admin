var KOA = require('koa');
var app = new KOA();
var request = require('co-request');
var route = require('koa-path')();
var renderer = require('./app/server.js');

app.use(route('/api'), function* (n) {

});

app.use(function* (n) {
	var result = renderer(this.request);
	this.body = result.content;
});

app.listen(1000);
console.log('App at 1000');