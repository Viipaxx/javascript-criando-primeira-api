const express = require('express');
const server = express()
const livros = require('./src/data/livros.json')

server.get('/livros', (req, res) => {
    return res.json(livros)
})

server.post('/addLivro', () => {
    addlivro = {
        "id": livros.length + 1,
        "autor": 'autor',
        "livro": 'livro',
        "lancamento": 'lancamento'
    }
    livros.push()
} )

server.listen(3000, () => {
    console.log('Servidor está funcionando...')
})