// ? :
const pontuacaoUser = 999;

/* if (pontuacaoUser >= 1000){
    console.log('Usuário vip')
} else {
    console.log('Usuário normal')
} */

const nivelUser = pontuacaoUser >= 1000 ? 'Usuário VIP' : 'Usuário normal' ;
console.log(nivelUser);
// (condição) ? 'Valor para verdadeiro' : 'Valor para falso';