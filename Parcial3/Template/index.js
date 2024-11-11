const express = require('express');
const path = require('path');
const app = express();
//const pug = require('pug');

app.use(express.json());
app.use(express.text());

//console.log(__dirname);
//console.log(__filename); 

app.set('view engine', 'pug');
app.set('views', path.join(__dirname, 'views'))
//Query

app.get('/administrativos', (req, res) => {
    console.log(req.query);
    //res.send('Servidor contestando a petición GET con Query');
    res.render('admin')
});
//Body
app.post('/maestros', (req, res) => {
    console.log(req.body);
    res.send('Servidor contestando a petición POST');
});
//Params
app.get('/estudiantes/:carrera', (req, res) => {
    console.log(req.params.carrera);
    console.log(req.query.control);
    res.send('Servidor contestando a petición GET');
});

app.listen(8080, () => {
    console.log(`Servidor express escuchando en http://localhost:8080`);
});

