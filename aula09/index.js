// Importar express no arquivo index.js
const express = require('express')

// Criar uma instancia do express
const app = express();

app.get('/', (req, res) => {
    res.send('Você esta na Home');
});

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

// Desafio - Criar uma rota parametrizada, que irá se chamar /calcular 
// e terá dois parâmetros que serão números, caso, receba apenas o primeiro parâmetro, 
// deverá retornar ele, ou, caso recebe os dois parâmetros terá que somar os dois e retornar
// o resultado.

                            // o interrogação faz com que o parametro seja opcional
app.get('/calcular/:numero1/:numero2?', (req, res) => {
    //recebe os parametros
    let {numero1, numero2} = req.params
    // condição e forçando a tipagem para numero
    if(numero2){
        let resultado = parseInt(numero1) + parseInt(numero2)
        res.send('O resultado da soma é: ' + resultado)
    } else{
        res.send(numero1);
    }
});


//utilizarem o metodo listen para que com um console.log, consigam exibir a mensagem: Servidor rodando na porta 3000
app.listen(3000, () => {console.log('Servidor rodando : http://localhost:3000')});

