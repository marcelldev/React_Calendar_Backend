const express = require('express');
require('dotenv').config();

//console.log(process.env);

// crear el servidor de express
const app = express();


// directorio publico html
app.use(express.static('public'));

//midelware lectura y parseo de body
app.use(express.json());

// Rutas
app.use('/api/auth', require('./routers/auth'));
//TODO: auth  // new, login ,renew

//TODO: CRUD de eventos



//escuchar peticiones

app.listen(process.env.PORT,()=>{

    console.log(`Servidor corriendo en el puerto ${process.env.PORT}`);

});