/* class formaDeBolo{
    constructor(saborDaMassa, saborRecheio){
        this.saborDaMassa = saborDaMassa;
        this.saborRecheio = saborRecheio;
    }

    escrever(){
        console.log(`Um delicioso bolo de ${this.saborDaMassa} com ${this.saborRecheio}`)
    }

    assar(){
        console.log(`Bolo assando de ${this.saborDaMassa} com ${this.saborRecheio}`)
    }
}

let boloFesta = new formaDeBolo("chocolate", "recheio de Nutella");
let boloCaseiro = new formaDeBolo("cenoura", "recheio de Chocolate");

boloFesta.escrever()
boloCaseiro.assar()
boloCaseiro.escrever();
 */

class heros{
    constructor(type, atack, defend){
        this.atack = atack;
        this.type = type;
        this.defend = defend;
    }

    escreverAtack(){
        console.log(`O ${this.type} atacou usando ${this.atack}.`)
    }

    escreverDefend(){
        console.log(`O ${this.type} se ${this.defend}`)
    }
}

let herosGuerreiro = new heros("Guerreiro", "espada", "defendeu usando escudo")
let herosMago = new heros("Mago", "magia negra", "defendeu usando mágia de proteção")


herosGuerreiro.escreverAtack()
herosGuerreiro.escreverDefend()
console.log("-----")
herosMago.escreverAtack()
herosMago.escreverDefend()
