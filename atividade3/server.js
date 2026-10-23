
const express = require('express');
const app = express();

const produtos = [
    { id: 1, nome: 'Teclado', preco: 120 },
    { id: 2, nome: 'Mouse', preco: 80 },
    { id: 3, nome: 'Monitor', preco: 750 },
    { id: 4, nome: 'Headset', preco: 150 },
    { id: 5, nome: 'Webcam', preco: 200 }
];

// Mostrar todos os produtos
app.get('/produtos', (req, res) => {
    res.json(produtos);
});

// Mostrar um produto pelo ID
app.get('/produtos/:id', (req, res) => {
    const id = Number(req.params.id);
    const produto = produtos.find(p => p.id === id);

    if (!produto) {
        return res.status(404).json({
            mensagem: 'Produto não encontrado'
        });
    }

    res.json(produto);
});

app.listen(3000, () => {
    console.log('Servidor da atividade 3 rodando na porta 3000');
});
