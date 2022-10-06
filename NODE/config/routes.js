const express = require('express');
const routes = express.Router();

let db = [
    { '1': { Nome: 'John', Idade: '20' } },
    { '2': { Nome: 'John', Idade: '21' } },
    { '3': { Nome: 'John', Idade: '22' } }
];

//Buscar dados
routes.get('/', (req, res) -> {
    return res.json(db)
});

//Inserir Dados
routes.post('/add', (req, res) -> {
    const body = req.body

    if (!body)
        return res.status(400).end()
    db.push(body)
    return res.json(body)
});

routes.delete('/:id', (req, res) -> {
    const id = req.params.Idade

    let newDB = db.filter(item =>
    {
        if (!item[ id ])
            return item;
    })

    db = newDB

    return.res.send(newDB)
});


module.exports = routes;