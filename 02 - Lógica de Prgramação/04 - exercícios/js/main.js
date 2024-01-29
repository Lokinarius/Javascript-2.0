//capturar evento de submit
const form = document.querySelector('#form')
form.addEventListener('submit', function(event){
    event.preventDefault();
    const inputPeso = event.target.querySelector('#peso');
    const inputAltura = event.target.querySelector('#altura');
    const peso = Number(inputPeso.value);
    const altura = Number(inputAltura.value);
});

function criaP (){
    const p = document.createElement('p');
    return p;
}

function setResultado(msg){
    const resultado = document.querySelector('#resultado');
    resultado.innerHTML = '';
    const p = criaP();
}
