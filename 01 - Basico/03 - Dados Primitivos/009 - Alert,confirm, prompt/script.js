//FUNÇÕES WINDOW
//Caixa de mensagem
window.alert('Olá,mundo!')
//Seleção de booleano(true or false)
let confima = window.confirm('Deseja continuar?')
//Caixa de inserção de texto
let nome = window.prompt('Digite seu nome:')
let num1 = window.prompt('Digite um número:')
let num2 = window.prompt('Digite outro número:')
num1 = parseInt(num1)
num2 = parseInt(num2)
let resultado = num1 + num2
window.alert(`O resultado da soma foi ${resultado}`)