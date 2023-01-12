// como eu fiz: 

/* 

let numeroA = window.prompt("Insira o primeiro numero")
let numerob = window.prompt("Insira o segundo numero")

console.log(numeroA + numerob)
console.log(numeroA - numerob)
console.log(numeroA * numerob)
console.log(numeroA / numerob)
console.log(numeroA % numerob)

*/

// como é:


const entrada1 = prompt("Informe o primeiro número:")
const entrada2 = prompt("Informe o segundo número:")

// nao posso somar assim pois acaba concatenando. 
//A funcao prompt sempre resulta em string, por tanto tenho que usar essa funcao: 

const x = parseFloat(entrada1)
const y = parseFloat(entrada2)

const soma = x + y
const subtracao = x - y
const multiplicacao = x * y
const divisao = x / y

alert(
  "Resultado:\n" +
  "\nSoma: " + soma +
  "\nSubtração: " + subtracao +
  "\nMultiplicação: " + multiplicacao +
  "\nDivisão: " + divisao
)




