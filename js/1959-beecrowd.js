
const readLine = require('readline-sync');

let lados = 0;
let comprimento = 0;
let resposta = 0;



lados = parseInt(readLine.question('Informe os lados: '));
comprimento = parseInt(readLine.question('Informe o comprimento: '));

resposta = lados * comprimento;

console.log(resposta);
