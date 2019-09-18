var Santiago = {
    nombre: 'Santiago',
    apellido: 'Gonzalez',
    edad: 17,
    peso: 60
}

console.log(`Al inico del año ${Santiago.nombre} pesa ${Santiago.peso}kg`)

const INCREMENTO_PESO = 0.3
const DIAS_DEL_ANO = 365

const aumentarPeso = (persona)=> persona.peso += INCREMENTO_PESO
const adelgazar = (persona) => persona.peso -= INCREMENTO_PESO
const comeMucho = () => Math.random() < 0.3
const realizaDeporte = () => Math.random() < 0.4


const META = Santiago.peso - 3
var dias = 0

while(Santiago.peso > META){
    if(comeMucho()){
        //aumentarDePeso
        aumentarPeso(Santiago)
    }
    if(realizaDeporte()){
        //adelgazar
        adelgazar(Santiago)
    }
    dias += 1
}

console.log(`Pasaron ${dias} días hasta que ${Santiago.nombre} adelgazo 3kg`)