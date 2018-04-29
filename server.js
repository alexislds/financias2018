// REQUIRES
const express = require('express');
const fs = require('fs');
const hbs = require ('hbs');

// CONFIG
const app = express();
app.set('view engine', 'hbs');
app.use(express.static(__dirname + '/public'));
hbs.registerPartials(__dirname + '/views/partials');

// INICIO
app.listen('3000', () => {
    console.log(`Servidor iniciado`);
});

// ROTAS
app.get('/', (req, res) => {
    res.render('home');
});
app.get('/entrar', (req, res) => {
    res.render('entrar');
});