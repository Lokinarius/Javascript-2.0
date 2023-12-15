let num1 = 18; //number
let num2 = 17.5; //number
let num3 = 9.86479813;

console.log(num1 + num2);
console.log(num1.toString(2)); // representação em número binário
console.log(num3.toFixed(2)); // arrendonda para o número de casas decimais desejada
console.log(Number.isInteger(num2)); // retorna se o número é um inteiro ou não

// IEEE 754-2008
let num4 = 0.7; // number
let num5 = 0.1; // number

// num1 = ((num1 * 100) + (num2 * 100)) / 100; // 0.8
// num1 = ((num1 * 100) + (num2 * 100)) / 100; // 0.9
// num1 = ((num1 * 100) + (num2 * 100)) / 100; // 1.0

num1 = Number(num4.toFixed(2));

console.log(num4.toFixed(2));