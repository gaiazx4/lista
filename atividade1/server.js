const express = require('express');
const app = express();

app.get('/', (req, res) => {
    res.send('Bem-vindo à TechVision!');
});

app.get('/sobre', (req, res) => {
    res.send('A TechVision é uma empresa de tecnologia.');
});

app.listen(3000, () => {
    console.log('Servidor rodando na porta 3000');
});