// como eu fiz: 

/* 

let nome = window.prompt("Qual seu primeiro nome?")
let sobrenome = window.prompt("Qual seu sobrenome?")
let estudo = window.prompt("Qual o campo de estudo?")
let ano = window.prompt("Qual seu ano de nascimento?")

console.log(nome + sobrenome + estudo + ano) 

*/

// como é: 

const primeiroNome = prompt("Informe o primeiro nome do recruta:")
const sobrenome = prompt("Informe o sobrenome do recruta:")
const campoDeEstudo = prompt("Qual o campo de estudo do recruta?")
const anoDeNascimento = prompt("Qual seu ano de nascimento do recruta?")

alert (
  "Recruta cadastrado com sucesso!\n" +
  "\nNome completo: " + primeiroNome + " " + sobrenome + 
  "\nCampo de estudo: " + campoDeEstudo +
  "\nIdade: " + (2023 - anoDeNascimento)
)