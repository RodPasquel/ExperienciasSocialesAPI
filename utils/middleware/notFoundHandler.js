const boom = require ('@hapi/boom');

function notFoundHanler (req, res) {
    const {
        output: { statusCode, payload }
    } = boom.notFound();  // llamamos la funcion notFound de Boom qu eya incluye el error y el payload

    res.status(statusCode).json(payload);
}

module.exports = notFoundHanler;