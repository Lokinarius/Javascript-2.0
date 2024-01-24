/*
Operadores de comparação
> maior que
>= maior que ou igual a
< menor que
<= menor que ou igual a
== igualdade(valor)
=== igualdade estrita(valor e tipo)
!= diferença(valor)
!== diferença estrita(valor e tipo)
*/
console.log(10 > 5); // --> true
console.log(10 > 12); // --> false

const num1 = 10;
const num2 = '10';
const comp1 = num1 == num2; // --> true
const comp2 = num1 === num2; // --> false