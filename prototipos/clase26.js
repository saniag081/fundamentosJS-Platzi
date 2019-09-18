class Persona{
    constructor(nombre,apellido,altura){
        this.nombre = nombre
        this.apellido = apellido
        this.altura = altura
    }

    saludar(fn){
        var {nombre,apellido} = this

        console.log(`hola, me llamo ${nombre} ${apellido}`)

        if(fn){
            fn(nombre,apellido,false)
        }
    }
    soyAlto(){
        return this.altura > 1.80
    }
}

class Desarrollador extends Persona{
    constructor(nombre,apellido,altura){
        
        //constructor de la clase padre
        super(nombre,apellido,altura)
    }
    saludar(fn){
        var {nombre,apellido} = this

        console.log(`hola me llamos ${nombre} ${apellido} y soy desarrollador`)
        if(fn){
            fn(nombre,apellido,true)
        }
    }
}

function responderSaludo(nombre,apellido,esDev){
    console.log(`buen dia ${nombre} ${apellido}`)

    if(esDev){
        console.log(`Ah mira, no sabia que eras desarrollador`)
    }
}
    
var Sergio = new Desarrollador('santiago','gonzalez',1.85)
var erika = new Persona('Erika','Luna',1.59)
var artuto = new Persona('Arturo','Martinez',1.83)
    
Sergio.saludar(responderSaludo)
erika.saludar(responderSaludo)
artuto.saludar()