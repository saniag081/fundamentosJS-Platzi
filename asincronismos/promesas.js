const API_URL = 'https://swapi.co/api/'
const PEOPLE = 'people/:id'
//                                 remplazar texto               
//const luckUrl =  `${API_URL}${PEOPLE.replace(':id',1)}` 
// archivo no se encuentra en carpeta (API)
const opts = { crossDomain: true }


function obtenerPersonaje(id){
    //        parametros de el constructor de la promesa
    return new Promise( (resolve,reject) => {
        const url = `${API_URL}${PEOPLE.replace(':id',id)}` 

        $.get(url,opts, (data)=>{
            resolve(data)

        })    
        .fail( () => {
            reject(id)
            
        })
    })
}

function onError(id){
    console.log(`Sucedio un error al obtener el personaje ${id}`)

}


obtenerPersonaje(1)
.then((personaje)=>{
    console.log(`El personaje 1 es ${personaje.name}`)

})
.catch(onError)


