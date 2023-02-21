// class Car {
//     constructor(marca, caballos) {
//         this.marca = marca;
//         this.caballos = caballos;
//     }
//     sonido() {
//         console.log('PI PI PI ! ! !')
//     }
// }

// const coche = new Car('BMW', 400);

// console.log(coche);
// console.log(coche.marca);
// coche.sonido();

// class Cordenadas {
//     constructor(latitud, longitud) {
//         this.latitud = latitud;
//         this.longitud = longitud;
//     }
//     suma() {
//         return this.latitud + this.longitud;
//     }
// }


// const cord = new Cordenadas(123, 321);
// console.log(cord);
// console.log(cord.suma())


//ejercicio de MARTA
// class Dice {
//     constructor(nCaras) {
//         this.caras = nCaras;
//     }
//     lanzar() {
//         return Math.floor(Math.random() * this.caras) + 1;
//     }
// }

// const dado = new Dice(6)
// console.log(dado.lanzar())

//EJERCICIO GRUPAL
class Pokemon {
    constructor(name, type) {
        this.name = name
        this.type = type
        this.hp = 100
        this.level = 1
    }
    attack(pokemon) {
        pokemon.hp -= 10
        console.log(`${this.name} de tipo ${this.type} está atacando a ${pokemon.name} de tipo ${pokemon.type} y le queda de vida ${pokemon.hp}`)
    }
}

class PokemonAgua extends Pokemon {
    constructor(nombre) {
        super(nombre, 'Agua')
    }
    attack(pokemon) {
        if (pokemon.type === 'Fuego') {
            super.attack(pokemon)
            super.attack(pokemon)
        } else {
            super.attack(pokemon)
        }
    }
}

class PokemonFuego extends Pokemon {
    constructor(name) {
        super(name, 'Fuego')
    }
    attack(pokemon) {
        if (pokemon.type === 'Electrico') {
            super.attack(pokemon)
            super.attack(pokemon)
        } else {
            super.attack(pokemon)
        }
    }
}

class PokemonElectrico extends Pokemon {
    constructor(naim) {
        super(naim, 'Electrico')
    }
    attack(pokemon) {
        if (pokemon.type === 'Agua') {
            super.attack(pokemon)
            super.attack(pokemon)
        } else {
            super.attack(pokemon)
        }
    }
}

// class PokemonPlanta extends Pokemon {
//     constructor(naime) {
//         super(naime, 'Planta')
//     }
//     attack(pokemon) {
//         if (pokemon.type === 'Agua') {
//             super.attack(pokemon)
//             super.attack(pokemon)
//         } else {
//             super.attack(pokemon)
//         }
//     }
// }

const charizard = new PokemonFuego('Charizard')
const squirtle = new PokemonAgua('Squirtle')
const bulbasur = new PokemonPlanta('Bulbasur')
const pikachu = new PokemonElectrico('Pikachu')
squirtle.attack(charizard)
charizard.attack(squirtle)
bulbasur.attack(bulbasur)
pikachu.attack(pikachu)