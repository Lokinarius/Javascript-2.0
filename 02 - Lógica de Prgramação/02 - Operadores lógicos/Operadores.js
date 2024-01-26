/*
Operadores lógicos
&& -> AND //todas as expressões precisam ser verdadeiras para retornar true
|| -> OR //
! -> NOT
*/

const expressãoAnd = ( true && true && true)
const expressãoOr = false || true;
console.log(expressãoAnd);
console.log(expressãoOr);

const usuario = 'Will';
const senha = '123456789';
//                  True                   false
const login = usuario === "Will" && senha === '1234567'; //false pois a senha não está idêntica
console.log(login);

// o ! inverte o resultado
console.log(!false); // true pois o false foi invertido
console.log(!true); // false pois o true foi invertido

/*
FALSY
false
0
'' "" ``
null / undefined
NaN
*/