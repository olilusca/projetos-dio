//Desafio - Classificação de Nível do Herói

//Definindo as variáveis
let nomeDoHeroi = "NANAMI"
let nivelDoHeroi
let xpDoHeroi = 7500

//Dinâmica dos níveis criadas pela estrutura de decisão IF/ELSE IF
if(xpDoHeroi <= 1000) {
   nivelDoHeroi = "FERRO"
} else if(xpDoHeroi <= 2000) {
   nivelDoHeroi = "BRONZE"
} else if(xpDoHeroi <= 5000) {
   nivelDoHeroi = "PRATA"
} else if(xpDoHeroi <= 7000) {
   nivelDoHeroi = "OURO"
} else if(xpDoHeroi <= 8000) {
   nivelDoHeroi = "PLATINA DIAMANTE"
} else if(xpDoHeroi <= 9000) {
   nivelDoHeroi = "ASCENDENTE"
} else if(xpDoHeroi <= 10000) {
   nivelDoHeroi = "IMORTAL"
} else {
   nivelDoHeroi = "RADIANTE"
}

console.log("O herói de nome " + nomeDoHeroi + " está no nível de " + nivelDoHeroi)