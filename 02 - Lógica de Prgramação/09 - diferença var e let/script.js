const verdadeira = true;

//let tem escopo de bloco
//var tem escopo de função

let nome = 'Will';
var nome2 = 'Liam';

if (verdadeira){
    let nome = 'William';
    console.log(nome,nome2);

    if (verdadeira){
        let nome = 'Wiu';
        console.log(nome, nome2);
    }
}