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
