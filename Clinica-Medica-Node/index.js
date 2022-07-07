/* const express = require('express');
//const app = express();
const app=require('./app');
const path = require('path');

require('./connection');

//configuracion
//app.set('port', '3000');
app.set('view engine', 'ejs');
app.engine('html', require('ejs').renderFile);
app.set('views', path.join(__dirname, 'views'));

//Middlewares
app.use(express.static(path.join(__dirname, 'public')));
app.use(express.json());

app.get("/", (req, res) => {
  res.json({ user: 'geek' });
});

//Rutas
/* app.use(require('./routes/clientes'));
app.use(require('./routes/views')); */


//Servidor
/* app.listen(app.get('port'), () => {
  console.log(`Servidor corriendo en el puerto ${app.get('port')}`);
}) */ 

const app = require("./app");
require('./connection');

app.listen(app.get("port"));

console.log("Server on port", app.get('port'));
