//Desafio 3 - Escrevendo as classes de um jogo

class heroi {
   constructor(nomeHeroi, idadeHeroi, tipoHeroi){
      this.nomeHeroi  = nomeHeroi
      this.idadeHeroi = idadeHeroi
      this.tipoHeroi  = tipoHeroi
   }

   ataqueDoHeroi () {
      
      let armaDoHeroi
      
      switch(this.tipoHeroi) {
         case "mago":
            armaDoHeroi = "magia"
            break
            
         case "guerreiro":
            armaDoHeroi = "espada"
            break
            
         case "ninja":
            armaDoHeroi = "shuriken"
            break
            
         case "monge":
            armaDoHeroi = "artes marciais"
            break
            
         default:
            armaDoHeroi = "uma batata"
            this.tipoHeroi = "aldeão"
            this.nomeHeroi = "Cachurros"
            
      }
      
      if(this.tipoHeroi === "aldeão") { // <- easter egg pra espertinhos
         console.log(`O ${this.tipoHeroi} chamado ${this.nomeHeroi} atacou usando ${armaDoHeroi} e foi derrotado.`)
         
      } else {
         console.log(`O ${this.tipoHeroi} chamado ${this.nomeHeroi} atacou usando ${armaDoHeroi}.`)
         
      }
   }
}

let heroi1 = new heroi("Cibaleno", 57, "mago")
let heroi2 = new heroi("Calabreso", 30, "monge")

heroi1.ataqueDoHeroi()
heroi2.ataqueDoHeroi()
