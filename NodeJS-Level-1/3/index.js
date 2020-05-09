/**
 Create a server running on port 4000 using express framework in nodejs and use 'ejs' 
 templating engine. The server should return "Hello World" from the template.
*/


const express = require('express');
var app = express();
const port = 4000;

app.set('view engine', 'ejs');

app.get('/', function(req, res) {
	res.render('Home');
});

app.listen(port, () => {
	console.log(`Server is running at port: ${port}`);
});
