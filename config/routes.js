const express = require('express')
const routes = express.Router()

//simuluação da tabela usuario
let usuario = [
    {'1': {cpf: '12345678900', nome: 'Teste atividade',data_nascimento: '21/08/2002'}}
]

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

    const lastKey = usuario.length > 0 ? Number(Object.keys(usuario[usuario.length - 1])[0]) : 0;
    const newKey = lastKey + 1;

    usuario.push({ [newKey]: body });

    return res.json({ [newKey]: body });
});

module.exports = routes