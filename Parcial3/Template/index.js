const express = require('express');
const path = require('path');
const app = express();

app.use(express.json());
app.use(express.text());

app.set('view engine', 'pug');
app.set('views', path.join(__dirname, 'views'))
//Query

app.get('/administrativos', (req, res) => {
    console.log(req.query);
    res.render('admin')
});
//Body
app.post('/maestros', (req, res) => {
    console.log(req.body);
    res.render('admin')
});

app.listen(8080, () => {
    console.log(`Servidor express escuchando en http://localhost:8080`);
});

