const request = require('request');
 
_EXTERNAL_URL = 'https://run.mocky.io/v3/05e9651d-528e-4d7c-a60b-bae8f09684c6';

const callExternalApiUsingRequest = (callback) => {
    request(_EXTERNAL_URL, { json: true }, (err, res, body) => {
    if (err) { 
        return callback(err);
     }
    return callback(body);
    });
}

module.exports.callApi = callExternalApiUsingRequest;