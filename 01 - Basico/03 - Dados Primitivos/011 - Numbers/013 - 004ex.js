const numStr = prompt("Digite seu número:");
const num = parseFloat(numStr);

document.body.innerHTML += `<h2><strong>Seu número é ${num}</strong></h2></br>`;
document.body.innerHTML += `A raiz quadrada: ${num ** 0.5}</br>`;
document.body.innerHTML += `${num} é inteiro:${Number.isInteger(num)}</br>`;
document.body.innerHTML += `É NaN:${Number.isNaN(num)}</br>`;
document.body.innerHTML += `Arrendondando para baixo:${Math.floor(num)}</br>`;
document.body.innerHTML += `Arrendondando para cima:${Math.ceil(num)}</br>`;
document.body.innerHTML += `Com duas casa decimais:${num.toFixed(2)}</br>`;