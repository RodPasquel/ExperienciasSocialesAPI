const express = require('express');

const app = express();
const { config } = require('./config/index');
const experiencesAPI = require('./routes/experiences');

// ErrorHandlers Middlewares 
const { logErrors, wrapError, errorHandler } = require ('./utils/middleware/errorHandlers');

const notFoundHandler = require ('./utils/middleware/notFoundHandler');

// json BodyParser Middleware
app.use(express.json()); 

// Router middleware
experiencesAPI(app);
// Not Found 404 error
app.use(notFoundHandler);

// Errors middlewares
app.use(logErrors);
app.use(wrapError);
app.use(errorHandler);

app.listen(config.port, function(){
    console.log(`Listening http://localhost:${config.port}`);
});