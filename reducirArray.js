var santiago = {
    nombre: 'Santiago',
    apellido: 'Gonzalez',
    altura: 1.81,
    libros: 60
}

var vicky = {
    nombre: 'Vicky',
    apellido: 'Barrios',
    altura: 1.76,
    libros: 100
}

var paula = {
    nombre: 'Paula',
    apellido: 'Zapata',
    altura: 1.56,
    libros:190
}

var alan = {
    nombre: 'Alan',
    apellido: 'Hoyos',
    altura: 1.76,
    libros: 50
}

var martin = {
    nombre: 'Martin',
    apellido: 'Gomez',
    altura: 1.90,
    libros: 200
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

// console.log(personaAltas)
// console.log(personasBajas)
console.log(personasCms)

//               acumulador  elementos
const reducer = (acumulador, {libros} ) => acumulador + libros


var totalLibros = personas.reduce(reducer, 0)


// var acum = 0
// for(var i = 0; i < personas.length; i ++){
//     acum = acum + personas[i].libros
// }
    
    console.log(`en total tiene ${totalLibros} libros`)

