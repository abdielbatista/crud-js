const express = require('express');

const server = express();

server.use(express.json());

const cursos = ['FullSatack', 'Dev Games', 'HTML'];











server.listen(3000);