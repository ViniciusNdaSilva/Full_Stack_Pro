const atacante = prompt("Qual é o nome do personagem atacente?")
const poderDeAtaque = prompt("Qual é o seu poder de ataque?")

const defensor = prompt("Qual é o personagem defensor?")
let pontosDeVida = prompt("Quantos pontos de vida possui?")
const poderDeDefesa = prompt("Qual é o seu poder de defesa?")
const possuiEscudo = prompt("Ele possui um escudo? (Sim/não)")

let danoCausado = 0 

if (poderDeAtaque > poderDeDefesa && possuiEscudo === "NÃO") {
  danoCausado = poderDeAtaque - poderDeDefesa
} else if (poderDeAtaque > poderDeDefesa && possuiEscudo === "Sim") {
  danoCausado = (poderDeAtaque - poderDeDefesa) / 2 
}

pontosDeVida -= danoCausado

alert(atacante + " causou " + danoCausado + " pontos de dano em " + defensor)
alert(
  atacante + "\nPoder de ataque: " + poderDeAtaque + "\n\n" +
  defensor + "\nPontos de vida: " + pontosDeVida + 
  "\nPoder de defesa: " + poderDeDefesa + "\nPossui escudo: " + possuiEscudo
)