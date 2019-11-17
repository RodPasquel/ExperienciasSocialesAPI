// Llamamos a express (previamente instalado con npm i express)
const express = require('express');
// Ejecutamos Express para crear la nueva app.
const app = express();
// Llamamos a la confguración creada en el archivo dotenv
const { config } = require('./config/index');

// Express nos permite crear rutas:
app.get('/',function(req, res){
    res.send("hello world");
});

app.get('/json',function(req, res){
    res.json({ hello: 'world'});
});

app.listen(config.port, function(){
    console.log(`Listening http://localhost:${config.port}`);
});