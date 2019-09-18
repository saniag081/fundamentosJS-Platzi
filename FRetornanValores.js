var santiago = {
    nombre: 'santiago',
    edad: '17'
}

var sacha = {
    nombre: 'sacha',
    edad: 28
}

const mayoriaEdad = 18

function esMayorEdad(persona){
    return persona.edad >= mayoriaEdad
}


function imprimirSiEsMayorDeEdad(persona){
    if(esMayorEdad(persona)){
        console.log(`${persona.nombre} es mayor de edad`)
    }else{
        console.log(`${persona.nombre} es menor de edad`)
    }
}