//Váriaveis e Arrays e Objetos

// Desafio 1 - criar 3 variáveis: nome, idade, eMaiorDeIdade
//No caso como valor destas variáveis voces irao colocar as referente a vcs mesmos


// criando variavel nome contendo uma string com o valor Gustavo. String para se trabalhar com texto
let nome = 'Gustavo';
// cria variável idade contendo um número 25
let idade = 25;
// criando variável eMariodeidade contendo um valor booleano, ou seja, podendo ser false ou true
let eMaiorDeIdade = true;


//OBJETO
//Desafio 2 criar uma variavel pessoa do tipo objeto que irá conter três propriedades: nome, idade, eMaiorIdade. Para 
// cada proridade utilizar como valor as variaveis que foram criadas no desafio 1.


//criando variavel pessoa sendo do tipo objeto e com as propriedades solicitadas, aproveitando o valor da variavel criada
let pessoaA = {
    nome: nome,
    idade: idade,
    eMaiorDeIdade: eMaiorDeIdade
}

//para exibir ou utilizar alguma propriedae do objeto pessoa temos que trabalhar da seguinte maneira, 
//variavel.propriedade,  ou seja, no caaso abaixo iremos listar o valor da propriedade nome do objeto pessoa
console.log(pessoaA.nome);

// Existe uma forma de aprimorar a criação de objetos, reparem no objeto pessoa, uma coisa bacana do JS é que quando ele 
// reconhece que uma propriedade tem como valor uma variável, com o mesmo nome da propriedade
// podemos simplificar a atribuição de valor para as prorpriedades do objeto como vemos na forma abaixo

// o que ocorre quando simplificamos essa atribuição de valor da propriedade ao inves de usarmos a sintaxe propriedade: 
//valor ou seja nome: nome, podemos apenas utilizar nome

let pessoaB = {
    nome,
    idade,
    eMaiorDeIdade
}

//ARRAY
// Desafio 3 - criar uma variavel animais do tipo array e passar 4 animais como valores deste array

//criando a variavel animas do tipo array com os valores Elefante, Bufalo, Leao e Urso.
let animais = ['Elefante', 'Bufalo', 'Leão', 'Urso'];

// Operadores

//criar duas variaveis, numero1 e numero2 e atribuir valores numéricos para estas variáveis e depois partiremos 
// para operações aritméticas
let numero1 = 20;
let numero2 = 20;

//criar uma variavel resultadoSoma que irá obter o resultado da soma entre as variaveis numero1 e numero2 e exibir no console
var resultadoSoma = numero1 + numero2;
console.log('O resultado da soma entre 10 e 5 = ' + resultadoSoma);

//criar uma variavel resultadoSubtracao que irá obter o resultado da subtracao entre as variaveis numero1 e numero2 e exibir no console
var resultadoSubtracao = numero1 - numero2;
console.log('O resultado da subtração entre 10 e 5 = ' + resultadoSubtracao);


//Desafio 4 - Através de uma comparação validar qual é maior, se o valor da variável numero1 ou o valor da valor da variavel numero2
// e exibir uma mensagem: O número X é maior que do numero X (Lembrando que X)

if(numero1 > numero2){
    
    console.log('O número ' + numero1 + ' é maior que ' + numero2);

} else{
    console.log('O número ' + numero1 + ' não é maior que ' + numero2);
}


if(numero1 > numero2){
    console.log('O número ' + numero1 + ' é maior que ' + numero2);
} else if(numero1 == numero2){
    console.log('Os números são iguais');
} else{ 
    console.log('O número ' + numero1 + ' é menor que ' + numero2);
}

