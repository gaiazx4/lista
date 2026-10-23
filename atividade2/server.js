
const express = require('express');
const app = express();

app.get('/', (req, res) => {
    res.send('Bem-vindo ao curso de Desenvolvimento Web!');
});

app.get('/cursos', (req, res) => {
    res.send('Cursos: Node.js, JavaScript e HTML/CSS.');
});

app.get('/professores', (req, res) => {
    res.send('Professores: Carlos, Mariana e Roberto.');
});

app.get('/contato', (req, res) => {
    res.send('Contato: contato@curso.com');
});

// Página não encontrada
app.use((req, res) => {
    res.status(404).send('Página não encontrada!');
});

app.listen(3000, () => {
    console.log('Servidor da atividade 2 rodando na porta 3000');
});
