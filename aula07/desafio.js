//-------------Desafio

//Instruções: Baixe o arquivo da que o professor irá te passar. 

/*


Desafio2: Utilizando o Array de Pets disponibilizado, criar uma função "ListarNomeDonoPets" que exiba no terminal o NOMEDONO de todos os pets.  (Usar for of)

Desafio3: Utilizando o Array de Pets disponibilizado, criar uma função "ListarTipo" que irá receber um parâmetro com o tipo e retornar todos os pets desse tipo. (Usar o Filter)

Desafio4: Utilizando o Array de Pets disponibilizado, criar uma função "DataDeCadastro". Essa função deve retornar um array onde será adicionado a data de hoje em todos os objetos. O nome da nova propreie e dade deve ser "DataCadastro". (Usar Object Date e MAP)

Desafio5: Utilizando o Array de Pets disponibilizado, criar uma função "ListaDadosPet" que irá receber como parâmetro um objeto. Essa função deve exibir os dados de um pet. (usar Desestruturação de objetos)

Desafio6: Utilizando o Array e a função do desafio 5 , criar uma função "LitarPets" que irá receber como parâmetro o array de pets e um callback. Essa função deve exibir os dados de todos os pets cadastrados.  (aplicar a função ListaDadosPet utilizada como callback)


*/
const {pets} = require('./json.json');
console.log(pets);

// let pets = [
//     {
//       nome: 'Yoshi',
//       nomeDono: 'Victor',
//       idade: 7,
//       tipo: 'Cachorro',
//       raca: 'Akita Inu',
//       peso: 40,
//       genero: 'Macho',
//       cor: 'ruivo',
//       vacinado: true
//     },
//     {
//       nome: 'Pituco',
//       nomeDono: 'Victor',
//       idade: 2,
//       tipo: 'ave',
//       raca: 'Calopsita',
//       peso: 0.5,
//       genero: 'Macho',
//       cor: 'cinza',
//       vacinado: true
//     },
//     {
//       nome: 'Pitty',
//       nomeDono: 'Rose',
//       idade: 2,
//       tipo: 'ave',
//       raca: 'Agapornis',
//       peso: 0.5,
//       genero: 'Fêmea',
//       cor: 'verde',
//       vacinado: true
//     },
//     {
//         nome: 'Bixano',
//         nomeDono: 'Rose',
//         idade: 10,
//         tipo: 'Cachorro',
//         raca: 'PastorAlemão',
//         peso: 0.5,
//         genero: 'Fêmea',
//         cor: 'Amarelo',
//         vacinado: true
//       },
//   ]

//   console.log(JSON.stringify(pets));

  // Desafio1 : Utilizando o Array de Pets disponibilizado, criar uma função "ListarNomePets" que exiba no terminal o NOME de todos os pets. 
  // (utilizar o foreach)

  //correção do professor
  // function listarNomePets(){
  //   pets.forEach(pet => {
  //     console.log('Nome: ' + pet.nome);
  //   });
  // }

  // listarNomePets();

  //meu exercicio
  const listarNomePets = () => {
    pets.forEach(function(nomes) {
      console.log('Nome: ' + nomes.nome)
    })
  }

  listarNomePets();

  // Desafio2: Utilizando o Array de Pets disponibilizado, 
  // criar uma função "ListarNomeDonoPets" que exiba no terminal o NOME DO DONO de todos os pets.  (Usar for of)

  //correção
            
  //nome da var // array que quer percorrer
  function listarNomeDonoPet(){
    for (const pet of pets) {
      console.log('Nome do dono: ' + pet.nomeDono)
    }

  }
  
  // listarNomeDonoPet();

  //meu exercicio
  // const ListarNomeDonoPets = () => {
  //   for (var listar of pets){
  //     console.log(listar.nomeDono)
  //   }
  // }

  // ListarNomeDonoPets();

  //Desafio3: Utilizando o Array de Pets disponibilizado, criar uma função "ListarTipo" que irá 
  //receber um parâmetro com o tipo e retornar todos os pets desse tipo. (Usar o Filter)

  //corrreção
  // function ListarTipo(tipoPet){
  //  let petsFiltadosPorTipo = pets.filter(pet => {
  //   return pet.tipo == tipoPet
  //  });
  //  console.log(petsFiltadosPorTipo)
  // }

  // ListarTipo('Cachorro')

  //meu exercicio
  function listarTipo(nomeDoTipo) {
    var listar = pets.filter(function(pet){
      return pet.tipo == nomeDoTipo
    })

    console.log(listar);
  }

  // listarTipo('Cachorro');


  // Desafio4: Utilizando o Array de Pets disponibilizado, criar uma função "DataDeCadastro". 
  // Essa função deve retornar um array onde será adicionado a data de hoje em todos os objetos.
  // O nome da nova propriedade deve ser "DataCadastro". (Usar Object Date e MAP)

  //correção
  function dataDeCadastro(){
      let dataCorrente = new Date();
      let petsNovo = pets.map(pet => {

        //ou pet.dataDeCadastro
        pet['dataCadastro'] = dataCorrente
        return pet;
      })

      return petsNovo;
  }

  // console.log(dataDeCadastro());



  function dataDeCadastro(){

    var colocarData = pets.map(function(objetos){
    let dataDeHoje = new Date();
    // adicionando uma propriedade em um objeto
    objetos.DataCadastro = dataDeHoje
    return objetos;
    })

    console.log(colocarData);
  }

  // dataDeCadastro();

  // Desafio5: Utilizando o Array de Pets disponibilizado, criar uma função "ListaDadosPet"
  // que irá receber como parâmetro um objeto. Essa função deve exibir os dados de um pet. (usar Desestruturação de objetos)

  //correção

  let objetoPet =
{
  nome: 'Yoshi',
  nomeDono: 'Victor',
  idade: 7,
  tipo: 'Cachorro',
  raca: 'Akita Inu',
  peso: 40,
  genero: 'Macho',
  cor: 'ruivo',
  vacinado: true
}
  const listarDadosPet = (objPet) => {
    const { nome, nomeDono, idade, tipo, raca, peso, genero, cor, vacinado } = objPet;
    return console.log(
        `Nome: ${nome}
  Nome do dono: ${nomeDono}
  Idade: ${idade}
  Tipo: ${tipo}
  Raça: ${raca}
  Peso: ${peso}
  Genero: ${genero}
  Cor: ${cor}
  Está vacinado? ${vacinado ? 'Está vacinado' : 'Precisa vacinar'}`
    )
}

// listarDadosPet(objetoPet);


  //meu exercicio
  function listaDadosPet(objeto){

    let {nome, nomeDono, idade, tipo, raca, peso, genero, cor, vacinado} = objeto;
    
    return console.log('Nome: '+ nome, 'Nome do dono: ' + nomeDono, 'Idade: ' + idade, 'Tipo: '+ tipo, 'Raça: '+ raca, 'Peso: ' + peso, 
    'Genero: '+ genero, 'Cor: ' + cor, 'Vacinado: ' + vacinado);
    }
    

  // listaDadosPet(pets[0]);

  // Desafio6: Utilizando o Array e a função do desafio 5 , criar uma função "ListarPets" 
  // que irá receber como parâmetro o array de pets e um callback. Essa função deve exibir os dados de todos os pets cadastrados.  
  // (aplicar a função ListaDadosPet utilizada como callback)



  function listarPets(arrayPets, callback){

    for (let i = 0; i < arrayPets.length; i++) {
      var mostrar = callback(arrayPets[i]);
      
    }
    return mostrar;
  }

  // listarPets(pets,listaDadosPet);

 




  
 
  