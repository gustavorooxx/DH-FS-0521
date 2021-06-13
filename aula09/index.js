// Importar express no arquivo index.js
const express = require('express')

// Criar uma instancia do express
const app = express();

// Desafio - Criar uma rota parametrizada, que irá se chamar /cumprimentar 
// e terá um parâmetro que será um nome, logo, ele terá que receber esse parâmetro
// que foi informado e exibir uma mensagem de cumprimento "Olá, nome"

// app.get('/cumprimentar', (req, res) => {
//     res.send('Olá mundo!');
// });

app.get('/cumprimentar/:nome', (req, res) => {
    const nome = req.params.nome
    res.send('Olá, ' + nome);
});


//utilizarem o metodo listen para que com um console.log, consigam exibir a mensagem: Servidor rodando na porta 3000
app.listen(3000, () => {console.log('Servidor rodando : http://localhost:3000')});

