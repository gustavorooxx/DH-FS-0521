// Criamremos na aula de hoje um projeto simplificado com algumas funções que um sistema de petshop também possui. Ou seja, teremos
// que criar animais, cadastrar animais (validar os dados antes de cadastrar), vacinar animais
// 

//criando um array contendo objetos, a ideia deste array pets sera criar uma lista de pets, de modo que cada objeto, ira representar
// uma animal
let pets = [
    {
        nome: 'Yoshi',
        nomeDono: 'Victor',
        idade: 7,
        tipo:  'cachorro',
        raca: 'Akita Inu',
        peso: 40, 
        genero: 'Macho',
        cor: 'ruivo',
        vacinado: true

    },

    {
        nome: 'Laila',
        nomeDono: 'Gustavo',
        idade: 8,
        tipo:  'cachorro',
        raca: 'Vira-lata',
        peso: 20, 
        genero: 'Femea',
        cor: 'ruivo',
        vacinado: true


    },

    {
        nome: 'Tziu',
        nomeDono: 'Antonio',
        idade: 2,
        tipo:  'passaro',
        raca: 'Curio',
        peso: 0.5, 
        genero: 'Macho',
        cor: 'preto',
        vacinado: true


    },

]

//criar uma função para listar todos os objetos que temos dentro do array acima, o proposiro desta função é listar o nome de todos
//os animais contidos da lista, o nome da função deverá ser listarPets
// Tempo 5 min
//Nome: NomeDoPet

let listarPets = () => {
    pets.forEach(pet => {
        console.log('Nome: ' + pet.nome)
    });
    
}

//listarPets();

let listarPets2 = () => {
    for(let i=0; i < pets.length; i++){
        console.log('Nome: '+ pets[i].nome)

    }
}

//listarPets2();


let novoPet =  {
    nome: 'Thor',
    nomeDono: 'Antonio',
    idade: 2,
    tipo:  'cachorro',
    raca: 'Poodle',
    peso: 20, 
    genero: 'Macho',
    cor: 'preto',
    vacinado: true


}



//arrayPets é substituido por pets e objetoPet por novoPet
// cadastrarPet(pets, novoPet)

// listarPets2();


//Criar a função validaDados para validar se o objeto passado para a função cadastrarPet, possui as propriedades necessárias
//(nome, nomeDono, idade, tipo, raca, genero, idade, peso, genero, cor, vacinado)
// caso não possua deverá retornar false, caso esteja tudo ok com as propriedades, retornar true.
//Obs: utilizar operadores lógicos para solucionar esse desafio

function validaDados(objetoPet){
    return (
        objetoPet.nome && 
        objetoPet.nomeDono && 
        objetoPet.idade &&
        objetoPet.tipo &&
        objetoPet.raca &&
        objetoPet.peso &&
        objetoPet.genero &&
        objetoPet.cor &&
        objetoPet.vacinado //true
        )
}

//arrow function

// const validaDados = (objetoPet) => {
//     return (
//         objetoPet.nome && 
//         objetoPet.nomeDono && 
//         objetoPet.idade &&
//         objetoPet.tipo &&
//         objetoPet.raca &&
//         objetoPet.peso &&
//         objetoPet.genero &&
//         objetoPet.cor &&
//         objetoPet.vacinado //true
//         )
// }

//Criar uma função para cadastrar pets chamada cadastrarPet dentro dessa nossa lista de pets contida na variavel pets
//esta função deverá receber um parametro, recomendavel que o parametro seja um objeto com as mesmas propriedades dos outros objetos
// existentes dentro do Array, no caso, (nome, nomeDono, idade, tipo, raca, genero, idade, peso, genero, cor, vacinado)


// function cadastrarPet(arrayPets, objetoPet){
//     return arrayPets.push(objetoPet)
// }

//1- aplicar validação para verificar se o segundo parametro passado na funcao cadastrarPet é realemte um objeto ou não, caso contrario,
//retornar uma mensagem semelhante a abaixo:
// Insira um objeto valido


//2- aplicar validação para verificar se o objeto passado como parametro realmente possui todas as propriedades necessarias
//caso contrario, retornar uma mensagem semelhante a de a abaixo:
// O objeto não tem todas as propriedades necesssarias informadas

function cadastrarPet(arrayPets, objetoPet){
    if(typeof objetoPet == "object"){
     if(validaDados(objetoPet)){
         arrayPets.push(objetoPet)
         console.log(pets)
     } else{
         console.log('O objeto não tem todas as propriedades necesssarias informadas')
     }
     } else{
        console.log('Insira um objeto válido')
     }
        
    }

    cadastrarPet(pets, novoPet)

 
    

