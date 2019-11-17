const { config } = require('../config');

function cacheResponse(res, seconds) {
    if(!config.dev) {  // Cuidamos que solo suceda en produccion, no en DEv para evitar problemas
        res.set('Cache-Control', `public, max-age=${seconds}`);
    }
}

module.exports = cacheResponse;