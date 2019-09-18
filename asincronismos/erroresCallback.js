const API_URL = 'https://swapi.co/api/'
const PEOPLE = 'people/:id'
//                                 remplazar texto               
//const luckUrl =  `${API_URL}${PEOPLE.replace(':id',1)}` 
// archivo no se encuentra en carpeta (API)
const opts = { crossDomain: true }


function obtenerPersonaje(id, callback){
    const url = `${API_URL}${PEOPLE.replace(':id',id)}` 

    //fail() si hay error ejecuta un callback
    $.get(url,opts,callback)
    .fail( function(){
        console.log(`sucedio un error. no se pudo obtener el personajes ${id}`)
    })
}

obtenerPersonaje(1, function(persona){
    console.log(`Hola, yo soy ${persona.name}`)

    obtenerPersonaje(2, function(persona){
        console.log(`Hola, yo soy ${persona.name}`)

        obtenerPersonaje(3, function(persona){
            console.log(`Hola, yo soy ${persona.name}`)

            obtenerPersonaje(4, function(persona){
                console.log(`Hola, yo soy ${persona.name}`)

                obtenerPersonaje(5, function(persona){
                    console.log(`Hola, yo soy ${persona.name}`)
                })
            })
        })
    })
})