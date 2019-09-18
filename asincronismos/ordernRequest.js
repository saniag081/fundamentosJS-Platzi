const API_URL = 'https://swapi.co/api/'
const PEOPLE = 'people/:id'
//                                 remplazar texto               
//const luckUrl =  `${API_URL}${PEOPLE.replace(':id',1)}` 
// archivo no se encuentra en carpeta (API)
const opts = { crossDomain: true }


function obtenerPersonaje(id, callback){
    const url = `${API_URL}${PEOPLE.replace(':id',id)}` 
    // request con .get
    // parametros de get
    //     url  occiones  funcion (callback) 

    $.get(url,opts, function(persona){
        //arguments variable con para metros que recibe una funcion
        //console.log(arguments)
        console.log(`hola yo soy ${persona.name}`)
    })

    if(callback){
        callback()
    }
}

obtenerPersonaje(1, function(){
    obtenerPersonaje(2, function(){
        obtenerPersonaje(3, function(){
            obtenerPersonaje(4, function(){
                obtenerPersonaje(5)
            })
        })
    })
})