var santiago = {
    nombre: 'Santiago',
    apellido: 'Gonzalez',
    altura: 1.81
}

var vicky = {
    nombre: 'Vicky',
    apellido: 'Barrios',
    altura: 1.76
}

var paula = {
    nombre: 'Paula',
    apellido: 'Zapata',
    altura: 1.56
}

var alan = {
    nombre: 'Alan',
    apellido: 'Hoyos',
    altura: 1.76
}

var martin = {
    nombre: 'Martin',
    apellido: 'Gomez',
    altura: 1.90
}

var personas = [santiago,vicky,paula,alan,martin]

const esAlta = ({altura})=> altura > 1.8
const esBaja = ({altura}) => altura < 1.8



//filtrar array
var personaAltas = personas.filter(esAlta)
var personasBajas = personas.filter(esBaja)

const pasarAlturaACms = persona => ({
        ...persona,
        altura: persona.altura * 100
})

// const pasarAlturaACms = persona => {

//     return{
//         ...persona,
//         altura: persona.altura * 100
//     }
// }

var personasCms = personas.map(pasarAlturaACms)

console.log(personasCms)
// console.log(personaAltas)
// console.log(personasBajas)
