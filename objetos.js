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
function nombreEnMayuscula( { nombre } ){
    nombre = nombre.toUpperCase()
    console.log(nombre)
}

nombreEnMayuscula(Santiago)
nombreEnMayuscula(dario)
nombreEnMayuscula({ nombre: 'David'})