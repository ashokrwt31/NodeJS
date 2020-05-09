/**
  Create a rest API running on port 4000 using express framework in NodeJs and run it on a cluster for each CPU.

  API should have following endpoint
  
  GET / : r​eturns the following message - "Hello from Worker <id>" and should log the following message in the
  console on the server - "Worker <id> running!"

  Note: "id" is the cluster worker id.
*/


const express = require('express');
const app = express();
const cluster = require('cluster');
const cpuCount = require('os').cpus().length;
const port = 4000;


if(cluster.isMaster) {
   for (var i = 0; i< cpuCount; i++) {
   	    cluster.fork();
   }
   cluster.on('exit', function (worker) {
   	 // console.log('Worker %d died.', worker.id);
   })
}
else {
  app.get('/',function (req, res) {
      res.send('Hello from Worker'  + cluster.worker.id);

  });

  app.listen(port, () => {
	  console.log('Worker %d running!', cluster.worker.id); 
  });  
}




