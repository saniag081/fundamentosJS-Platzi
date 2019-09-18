var Santiago = {
    nombre: 'Santiago',
    apellido: 'Gonzalez',
    edad: 28
}

var dario = {
    nombre: 'Dario',
    apellido: 'Sunisky',
    edad: 27
}

                        // ATRIBUTOS DEL OBJETO 
function nombreEnMayuscula(persona){

    //var nombre = persona.nombre.toUpperCase()
    var { nombre } = persona.toUpperCase()
    console.log(nombre)
}

function imprimirNombreYEdad(persona){
    var {nombre} = persona
    var {edad} = persona
    console.log('hola me llamo ' + nombre + ' y tengo ' + edad)
}

imprimirNombreYEdad(Santiago)
imprimirNombreYEdad(dario)

//nombreEnMayuscula(Santiago)
//nombreEnMayuscula(dario)
//nombreEnMayuscula({ nombre: 'David'})