const express = require('express');

const server = express();

server.use(express.json());

const musicas = ['Mensagem apagada', 'Fulminante', 'Sinais'];

//retorna um curso
server.get('/musicas/:index', (req, res) => {
    const { index } = req.params;

    return res.json(musicas[index])
});

//retornar todos os musicas
server.get('/musicas', (req, res) => {
    return res.json(musicas)
});

//criar um curso
server.post('/musicas', (req, res) => {
    const {name} = req.body;
    musicas.push(name);

    return res.json(musicas);
})

//atualizar
server.put('/musicas/:index', (req, res) => {
    const { index } = req.params;
    const { name } = req.body;

    musicas[index] = name;

    return res.json(musicas);
})

//deletar
server.delete('/musicas/:index', (req, res) => {
    const { index } = req.params;

    musicas.splice(index, 1);
    return res.json({message: "A musica foi deletada"});
});

server.listen(3000);