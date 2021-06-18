
const https = require('https');
 
_EXTERNAL_URL = 'https://run.mocky.io/v3/05e9651d-528e-4d7c-a60b-bae8f09684c6';

_STORE_URL = 'https://600c30e638fd25001702cf7e.mockapi.io/api/v1/products';


const callExternalApiUsingHttp = (callback) => {
    https.get(_EXTERNAL_URL, (resp) => {
    let data = '';
    
    // A chunk of data has been recieved.
    resp.on('data', (chunk) => {
        data += chunk;
    });
    
    // The whole response has been received. Print out the result.
    resp.on('end', () => {
        return callback(data);
       // console.log(JSON.stringify(data));
    });
    
    }).on("error", (err) => {
       
    console.log("Error: " + err.message);
    });


    https.get(_STORE_URL, (resp) => {
        let data = '';
        
        // A chunk of data has been recieved.
        resp.on('data', (chunk) => {
            data += chunk;
        });
        
        // The whole response has been received. Print out the result.
        resp.on('end', () => {
            return callback(data);
           // console.log(JSON.stringify(data));
        });
        
        }).on("error", (err) => {
           
        console.log("Error: " + err.message);
        });
}

module.exports.callApi = callExternalApiUsingHttp;