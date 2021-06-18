const request = require('request');
 
_STORE_URL = 'https://600c30e638fd25001702cf7e.mockapi.io/api/v1/products';

const callExternalApiUsingStore = (callback) => {
    request(_STORE_URL, { json: true }, (err, res, body) => {
    if (err) { 
        return callback(err);
     }
    return callback(body);
    });
}

module.exports.callApi = callExternalApiUsingStore;