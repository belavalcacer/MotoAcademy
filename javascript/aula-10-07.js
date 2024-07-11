// function nomeFuncao(params) {

// }
// const funcao = nomeFuncao()

// const array = ['String', 123123, true]

// array[0] = 'Nao quero string'

// console.log(array[0], array[1])

// const numero = [1, 2, 3, 4];
// numero.push(5)
// console.log(numero);

// numero.pop()
// console.log(item)

// numeros.map ((item)=> {
//     console.log(numero); 
// })

// const testeNumeros = numero.filter((item) => item != 2) 
// console.log(testeNumeros)

// const pessoa = {
//      nome: 'Joao',
//      idade: 20,
//      profissao: 'arquiteto',
//      saudacao: function () {
//         console.log('Olá, eu sou ' + this.nome)
//      }
//  }

// console.log(pessoa);
// console.log(pessoa.nome);
// console.log(pessoa['nome']);

// pessoa.nome = 'bela';
// console.log(pessoa.nome);

// delete pessoa.profissao;
// console.log(pessoa);

// pessoa.saudacao();
// console.log("Loop do For");
// for (let i = 0; i<=5; i++) {
//     console.log(i);
// }

// console.log("Loop do while")
// let i = 0
// while (i<=5) {
//     console.log(i); 
//     i++;
// }

// for(let i = 0; i<5; i++) {

// }

const pessoa =  [{ 
    nome: 'Sandra',
    idade: 20, 
    profissao: 'Nao sei'

},
{ 
    nome: 'Evelyn',
    idade: 24, 
    profissao: 'Nao sei'

},


{ 
    nome: 'Carla',
    idade: 34, 
    profissao: 'Nao sei'

}
]
// console.log("Obtendo pessoa.idade > 22  a partir do for")
// for(let contador = 0; contador<pessoa.length; contador++) {
//     if(pessoa[contador].idade > 22) {
//         console.log(pessoa[contador]);
//     }
// }

// console.log("Utilizando funcoes do JS =")
// pessoa.map((pessoa) => {
//     if(pessoa.idade > 22) { 
//         console.log(pessoa);
//     }
// })

// testePessoa = pessoa.filter(((pessoa) => pessoa.idade > 22));
// console.log(testePessoa);

//Nome da Pessoa != 'Carla'
pessoa.map((pessoa) => {
    if(pessoa.nome != 'Carla') { 
        console.log(pessoa);
    }
})

testeNome = pessoa.filter((pessoa) => pessoa.nome != 'Carla');
console.log(testeNome);
