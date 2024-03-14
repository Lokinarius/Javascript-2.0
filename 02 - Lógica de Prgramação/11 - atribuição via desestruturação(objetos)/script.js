const pessoa ={
    nome: 'William',
    sobrenome: 'Galvão',
    idade: 28,
    endereço: {
        rua: 'tristeza',
        numero: 0
    }
};

//Atribuição via desetruturação
const { nome, sobrenome } = pessoa;
console.log(nome, sobrenome);