const express = require('express');
const app = express();

app.use(express.json());
app.use(express.text());

//Query
app.get('/administrativos', (req, res) => {
    console.log(req.query);
    res.send('Servidor contestando a petición GET con Query');
});
//Body
app.post('/admin', (req, res) => {
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

