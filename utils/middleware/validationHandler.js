// Middleware para validar información
const boom = require('@hapi/boom');
const joi = require ('@hapi/joi');


function validate (data, schema) {
    const { error } = joi.validate(data, schema); // Le pasamos la 'data' para que lo valide contra el 'schema'
    return error ;
}

function validationHandler(schema, check = "body") {
    return function(req, res, next){
        const error = validate(req[check], schema);

        //error ? next(new Error(error)) :
        error ? next(boom.badRequest(error)) :
            next(); // Si no hay error, solo se llama al siguiente middleware
    };
}

module.exports = validationHandler;