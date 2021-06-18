const apiCallFromRequest = require('./Request')
const apiCallFromNode = require('./NodeJsCall')
const apiCallFromStore = require('./Store')

const http = require('http')



http.createServer((req, res) => {
        if(req.url === "/arifstore1"){
            apiCallFromRequest.callApi(function(response){
				res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE'); // If needed
   
                //console.log(JSON.stringify(response));
                res.write(JSON.stringify(response));
                res.end();
            });
        }

        else if(req.url === "/arifstore"){
            apiCallFromStore.callApi(function(response){
				res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE'); // If needed
   
                //console.log(JSON.stringify(response));
                res.write(JSON.stringify(response));
                res.end();
            });
        }

        else if(req.url === "/node"){
            apiCallFromNode.callApi(function(response){
				res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE'); // If needed
    
                res.write(response);
                res.end();
            });
        }
        
        // res.end();
}).listen(3000);

console.log("service running on 3000 port....");