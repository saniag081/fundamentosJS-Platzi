var Santiago = {
    nombre: 'Santiago',
    apellido: 'Gonzalez',
    edad: 17,
    peso: 60
}

console.log(`Al inico del año ${Santiago.nombre} pesa ${Santiago.peso}kg`)

const INCREMENTO_PESO = 0.2
const DIAS_DEL_ANO = 365

const aumentarPeso = (persona)=> persona.peso += INCREMENTO_PESO
const adelgazar = (persona) => persona.peso -= INCREMENTO_PESO



for( var i = 1; i <= DIAS_DEL_ANO ; i++){

    var radom  = Math.random()

    if(radom < 0.25){
        //aumenta de peso
        aumentarPeso(Santiago)
    }else if(radom < 0.5){
        adelgazar(Santiago)
    }

}
                                                                    //dos lugares despues de la coma
console.log(`Al final del año ${Santiago.nombre} pesa ${Santiago.peso.toFixed(1)}kg`)