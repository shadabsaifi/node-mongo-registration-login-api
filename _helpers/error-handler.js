module.exports = errorHandler;
var code = require('../common/status');
var message = require('../common/message');
var { response } = require('../common/response');

function errorHandler(err, req, res, next) {
   
    if (typeof (err) === 'string') {
        // custom application error
       return response(res, code.ALREADY_EXISTS, err)
    }

    if (err.name === 'ValidationError') {
       return response(res, code.VALIDATION_ERROR, err.message)
    }

    if (err.name === 'UnauthorizedError') {
        // jwt authentication error
        return response(res, code.INVALID_TOKEN, message.INVALID_TOKEN)
    }

    // default to 500 server error
    return response(res, code.INTERNAL_SERVER_ERROR, err.message)
}