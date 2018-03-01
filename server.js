'use strict';

const express = require('express');
const redis = require('redis');

const PORT = 8080;
const HOST = '0.0.0.0';

const app = express();

const client = redis.createClient('6379', 'redis');

app.get('/', (req, res) => {
	client.incr('counter', (err, counter) => {
		res.send(`hello world, ${process.pid}, This page has been viewed ${counter} times!`);
	});
});

app.listen(PORT, HOST);
console.log(`Running on http://${HOST}:${PORT}`);

// const cluster = require('cluster');
// const numCPUs = require('os').cpus().length;
// console.log(numCPUs);
// if (cluster.isMaster) {
// 	console.log(`Master ${process.pid} is running`);

// 	for (let i = 0; i < numCPUs; i++) {
// 		cluster.fork();
// 	}

// 	cluster.on('exit', (worker, code, signal) => {
// 		console.log(`worker ${worker.process.pid} died`);
// 	});
// } else {

// }