let num1 = 9.587469;

let num2 = Math.floor(num1);
//Math.floor: arrendonda o número para baixo
let num3 = Math.ceil(num1);
//Math.ceil: arrendonda o número para cima
let num4 = Math.round(num1);
//Math.round: arrendonda para o mais próximo
console.log(num2, num3, num4);

console.log(Math.max(1,5,47,89,6,9,122,5000))
//Math.max: descobre o maior número dentro de uma sequência
console.log(Math.min(-50,1,4,6,8,-98))
//Math.max: descobre o menor número dentro de uma sequência
const aleatorio = Math.random() * (10 - 5) + 5;
//Math.random: gera um número aleatório
console.log(aleatorio);