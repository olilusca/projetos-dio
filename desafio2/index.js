//Classificador de Partida Rankeada

function getBalance(vitorias, derrotas) {
   let subtracaoVitorias = vitorias - derrotas //operadores
   return subtracaoVitorias
}
let saldoVitorias = getBalance(100,5)

function imortalLeveler() {
   while(saldoVitorias <= 100) {
      saldoVitorias++
      console.log("Voce derrotou um inimigo!")
      console.log("Vitórias: " + saldoVitorias)
   }
   return saldoVitorias
}
let niveladorHeroi = imortalLeveler()

function getLevel() {
   let level
   if(saldoVitorias <= 10) {
      level = "FERRO"
   } else if(saldoVitorias <= 20) {
      level = "BRONZE"
   } else if(saldoVitorias <= 50) {
      level = "PRATA"
   } else if(saldoVitorias <= 80) {
      level = "OURO"
   } else if(saldoVitorias <= 90) {
      level = "DIAMANTE"
   } else if(saldoVitorias <= 100) {
      level = "LENDARIO"
   } else {
      level = "IMORTAL"
   }

   
   return level
}
let nivelDoHeroi = getLevel()

if(saldoVitorias > 100) {
   console.log("O herói tem saldo de " + saldoVitorias + " e está no nível de " + nivelDoHeroi)
} else {
   console.log(niveladorHeroi)
}

//Função 'ImortalLeveler':
//Caso o saldo de vitórias não seja suficiente pra chegar no IMORTAL...
//...a função adicionará UMA VITÓRIA até chegar no nível máximo