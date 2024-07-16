//Pesquisas no array 
/*
const array1 = ["A", "B", "C", "D"];

const found = array1.find((element) => element === 'A');
console.log(found);
const found1 = ((element) => element === 'C')
console.log(array1.findIndex(found1));

console.log(array1.indexOf('D'));

const found2 = (element) => element === 'A';
console.log(array1.some(found2));

const found3 = (element) => element === 'A';
console.log(array1.every(found2));
*/
// const array = [1, 2, 3, 4, 5];

// // Checks whether an element is even
// const even = (element) => element % 2 === 0;

// console.log(array.some(even));
// // Expected output: true

//// Manipulacao de Strings
 function nomeFuncao() {
    return "Olá Mundo"
 }

 const helloword = nomeFuncao();
 console.log(helloword);

 // Arrow Functions

 const byeWorld = () => "Tchau mundo"
 console.log(byeWorld())

 const a = 10
 const b = 20

 const soma = (a, b) => {
    valor = a +b
    return valor
 }

 console.log(soma(a,b));

 const mut = (a, b) => a * b;
 console.log(mut(a, b));

 const imprimirNomeCorreto = (nome, sobrenome) => {
    nomeCompleto = nome + " " + sobrenome
    return nomeCompleto
 }
 console.log(imprimirNomeCorreto("Sandra", "Valcacer"));

 const variavelFuncao = function (nome, sobrenome) {
    nomeCompleto = nome + " " + sobrenome
    return nomeCompleto
 }
console.log((variavelFuncao("Evelyn", "Silva")));


