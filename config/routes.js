const express = require('express')
const routes = express.Router()

//simuluação da tabela usuario
let usuario = []

//buscar dados
routes.get('/', (req, res) => {
    return res.json(usuario);
});

// inserir dados
routes.post('/add', (req, res) => {
    const body = req.body;

    if (!body) {
        return res.status(400).end();
    }

    const data = Object.values(body)[0];

    usuario.push(data);

    return res.json(data);
});

module.exports = routes