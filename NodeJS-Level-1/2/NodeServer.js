/**
   Create a http server running on port 8080 in NodeJs. The server should return 
   "Hello World" from the html document.
*/

const http = require('http');

const server = http.createServer((req, res) => {
	res.end("Hello World");
});

server.listen(8080, () => {
	console.log("Server is runing....");
});