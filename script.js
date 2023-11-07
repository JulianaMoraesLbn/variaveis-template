
/* const nome = "Juliana"
let idade = 36
let presenca = true

console.log(typeof nome, nome)
console.log(typeof idade, idade)
console.log(typeof presenca, presenca) */

//-----

//nome = "Fernanda"

/* idade = 37
console.log(idade);

presenca = false
console.log(presenca); */

// ----------

const nome = prompt("Informe o seu nome")
let idade = Number(prompt("Informe sua idade"))
let presenca = confirm("Está presente na aula?")

console.log(typeof nome, nome)
console.log(typeof idade, idade)
console.log(typeof presenca, presenca)

//-----

console.log("Estudante", nome, "tem", idade, "anos. Presença:", presenca)

console.log("Estudante" + nome + "tem" + idade + "anos. Presença:" + presenca)

console.log("Nome: ", typeof nome, "Idade: ", typeof idade, "Presença: ", typeof presenca)

