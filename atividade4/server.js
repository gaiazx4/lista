
const express = require('express');
const app = express();

// Somar
app.get('/somar/:n1/:n2', (req, res) => {
    const n1 = Number(req.params.n1);
    const n2 = Number(req.params.n2);

    res.json({ resultado: n1 + n2 });
});

// Subtrair
app.get('/subtrair/:n1/:n2', (req, res) => {
    const n1 = Number(req.params.n1);
    const n2 = Number(req.params.n2);

    res.json({ resultado: n1 - n2 });
});

// Multiplicar
app.get('/multiplicar/:n1/:n2', (req, res) => {
    const n1 = Number(req.params.n1);
    const n2 = Number(req.params.n2);

    res.json({ resultado: n1 * n2 });
});

// Dividir
app.get('/dividir/:n1/:n2', (req, res) => {
    const n1 = Number(req.params.n1);
    const n2 = Number(req.params.n2);

    if (n2 === 0) {
        return res.status(400).json({
            erro: 'Não é possível dividir por zero'
        });
    }

    res.json({ resultado: n1 / n2 });
});

app.listen(3000, () => {
    console.log('Calculadora rodando na porta 3000');
});
