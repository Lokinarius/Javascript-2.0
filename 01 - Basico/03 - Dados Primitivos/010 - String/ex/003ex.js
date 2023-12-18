const nome = prompt('Digite seu nome completo:');
document.body.innerHTML += `Seu nome é: <strong>${nome}</strong><br />`;
//nome
document.body.innerHTML += `Seu nome tem ${nome.length} letras <br />`;
//nome.length
document.body.innerHTML += `A segunda letra do seu nome é: ${nome[1]}<br />`;
//nome[]
document.body.innerHTML += `Qual o primeiro índice da letra A no seu nome? ${nome.indexOf('a')}<br />`;
//nome.indexOf('')
document.body.innerHTML += `Qual o último índice da letra A no seu nome? ${nome.lastIndexOf('a')}<br />`;
//nome.lastIndexOf("")
document.body.innerHTML += `As últimas 3 letras do seu nome são: ${nome.slice('-3')}<br />`;
//nome.slice('')
document.body.innerHTML += `As palavras do seu nome são: ${nome.split(' ')}<br />`;
//nome.split('')
document.body.innerHTML += `Seu nome com letras maiúsculas: ${nome.toUpperCase()}<br />`;
//nome.toUpperCase()
document.body.innerHTML += `Seu nome com letras minúsculas: ${nome.toLowerCase()}<br />`;
//nome.toLowerCase()