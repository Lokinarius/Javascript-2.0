//Let ou const
/* William Galvão, tem 28 anos, pesa 77kg, tem 1.8 de altura*/
const nome = 'William';
const sobrenome = 'Galvão';
const idade = 28;
const peso = 83;
const altura = 1.8;
let imc;
imc = peso/(altura * altura);
let anoNasc;
anoNasc = 2023 - idade;

console.log(imc)
console.log(anoNasc)

console.log(nome,sobrenome,', tem',idade,'anos, pesa',peso,'kg, e tem',altura, 'm de altura')
// o '+' tem a mesma funcionalidade da virgula
console.log(nome + ' ' + sobrenome + ', tem ' + idade + ' anos, pesa ' + peso +'kg, e tem ' + altura + 'm de altura.')
//também é possivel colocar uma frase inteira no console.log, basta coloca-la entre crases `` e colocar o nome da variável entre ${}
console.log(`${nome} ${sobrenome}, tem ${idade} anos, pesa ${peso}kg, e tem ${altura}m de altura.`)