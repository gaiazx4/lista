
const express = require('express');
const app = express();

app.use(express.json());

let tarefas = [
    { id: 1, descricao: 'Estudar JavaScript', concluida: false },
    { id: 2, descricao: 'Fazer atividade de Express', concluida: false }
];

let proximoId = 3;

// Listar todas as tarefas
app.get('/tarefas', (req, res) => {
    res.json(tarefas);
});

// Consultar uma tarefa pelo ID
app.get('/tarefas/:id', (req, res) => {
    const id = Number(req.params.id);
    const tarefa = tarefas.find(t => t.id === id);

    if (!tarefa) {
        return res.status(404).json({
            mensagem: 'Tarefa não encontrada'
        });
    }

    res.json(tarefa);
});

// Cadastrar uma nova tarefa
app.post('/tarefas', (req, res) => {
    const { descricao, concluida } = req.body;

    if (typeof descricao !== 'string' || !descricao.trim()) {
        return res.status(400).json({
            mensagem: 'Informe a descrição da tarefa'
        });
    }

    const novaTarefa = {
        id: proximoId++,
        descricao: descricao.trim(),
        concluida: concluida === true
    };

    tarefas.push(novaTarefa);

    res.status(201).json(novaTarefa);
});

// Excluir uma tarefa
app.delete('/tarefas/:id', (req, res) => {
    const id = Number(req.params.id);
    const indice = tarefas.findIndex(t => t.id === id);

    if (indice === -1) {
        return res.status(404).json({
            mensagem: 'Tarefa não encontrada'
        });
    }

    tarefas.splice(indice, 1);

    res.json({
        mensagem: 'Tarefa removida com sucesso'
    });
});

app.listen(3000, () => {
    console.log('Servidor da atividade 5 rodando na porta 3000');
});
