
 /**
   Create a rest API running on port 4000 using express framework in NodeJs which fetches 
   data from the following api "​https://jsonplaceholder.typicode.com/todos​" and has 
   following two endpoints
   GET /todos :​ returns all the data from the API
   GET /todos/:id : ​returns todo for the specified id in route params
*/




const express = require('express');
const fetch = require('node-fetch')
const app = express();

const baseUrl = 'https://jsonplaceholder.typicode.com/todos';
const port = 4000;


app.get('/todos', async (req, res) => {
	try {
		const response = await fetch(baseUrl);
		const json = await response.json();
		res.status(200).json(json);
	}
	catch(error) {
        console.log(error);
	}
})

app.get('/todos/:id', async (req, res) => {
	try {
		const response = await fetch(`${baseUrl}/${req.params.id}`);
		const json = await response.json();
		res.status(200).json(json);
	}
	catch(error) {
        console.log(error);
	}
})

app.listen(port, () => {
	console.log(`Server is running at port: ${port}`);
});
