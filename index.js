class hero {
    constructor(heroName, heroAge, heroType, heroAttack) {
        this.heroName = heroName
        this.heroAge = heroAge
        this.heroType = heroType
        this.heroAttack = heroAttack
    }
    atacar() {
        console.log(`O ${this.heroType} atacou usando ${this.heroAttack} `)
    }
}

let heroTank = new hero("Titan", "120", "tank", " o martelo")
let heroMago = new hero("Cinzento", "500", "mago", "magia das trevas")
let heroGuerreiro = new hero("Kratos", "85", " guerreiro", "laminas do caos")
let heroMonge = new hero("wong", "90", "monge", "artes marciais")
let heroNinja = new hero("naturo", "14", "ninja", "shuriken")

heroTank.atacar()
heroMago.atacar()
heroGuerreiro.atacar()
heroMonge.atacar()
heroNinja.atacar()