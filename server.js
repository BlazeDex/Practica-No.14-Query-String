const express = require('express'); //Importando la dependencia a una variable.
let app = express(); //Declaramos la app de Express.
let PORT = process.env.PORT || 3000; //Asignando el puerto que escuchará las peticiones.
app.use('/assets', express.static(__dirname + '/public')); //Directorio virtual para contenido estático.

app.set('view engine', 'ejs'); //Template de EJS

//Directorio raíz (nuestra primera ruta).
app.get('/',(req, res) => {
    res.send(`<!DOCTYPE html> <html lang="en"> <head> <link rel="stylesheet" href="/assets/style.css">
    <title>Document</title> </head>
    <body> <h1>Hola mundo </h1>
    </p></body> </html>`);
});

/*Segundo directorio, el cual recibe el nombre de una persona, un mensaje y 
un parámetro para repetir el mensaje "n" veces.*/
app.get('/person/:id', (req, res) => {
    res.render('person', {ID: req.params.id, Msg: req.query.message, Times: req.query.times});
});

app.listen(PORT); //Activamos el servidor.