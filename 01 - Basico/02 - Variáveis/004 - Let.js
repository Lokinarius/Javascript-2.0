//Não podemos criar variáveis com palavras reservadas
//Ex: let let, let console, let alert
//nomes significativos
//Variáveis não podem começar com números, conter traços ou espaços
//camelCase e Case-sensitive
//NÃO UTILIZE VAR, UTILIZE LET

let nome = 'William'; //string
let ano = '2023';
let nasc = '1995';
let prof = 'programador';
let ling = 'Javascript';
let hora = '16:00';
let hob1 = 'academia';
let hob2 = 'jogar videogame'
/*
console.log(William, nasceu em 1995. );
console.log('Em 2023, William, decidiu virar programador.');
console.log('William começou a estudar pela linguagem JavaScript.');
console.log('William estudava sempre ás 16:00.')
console.log('Além de estudar programação, William, gostava de ir a academia e jogar videogame')
*/ 
console.log(nome,', nasceu em ,',nasc,"." );
console.log('Em',ano,nome, 'decidiu virar',prof,'.');
console.log(nome,'começou a estudar pela linguagem',ling,".");
console.log(nome,'estudava sempre ás',hora,'.')
console.log('Além de estudar programação,',nome,', gostava de ir a',hob1,'e',hob2,'.')

let test; // declarando a variavel
test = 'testando'; // incializando a variável
console.log(test);
test = 'Olá, Mundo!';
console.log(test)