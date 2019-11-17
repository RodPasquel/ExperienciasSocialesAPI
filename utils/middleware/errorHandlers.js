// Traemos config para validar si estamos en desarrollo y arrojar el stack en el error. 
// El stack es toda la información relacionada al error
const  { config } = require ('../../config/index');
const boom = require ('@hapi/boom');

// Funcion de ayuda
function withErrorStack(error,stack){
    if(config.dev){
        return{ ...error , stack}
    }
    return error;
}

function logErrors(err, req, res, next) {
    console.log(err);
    next(err);
}

function wrapError(err, req, res, next) {
    if(!err.isBoom) {  // Si no es error tipo boom lo envolvemos paraque lo sea
        next(boom.badImplementation(err));
    }
    next(err);
}

function errorHandler(err, req, res, next) { // eslint-disable-line
    const { output : { statusCode, payload } } = err;

    //res.status(err.status || 500);
    res.status(statusCode);
    //res.json(withErrorStack(err.message, err.stack));
    res.json(withErrorStack(payload, err.stack));
}

module.exports = {
    logErrors,
    wrapError,
    errorHandler
}