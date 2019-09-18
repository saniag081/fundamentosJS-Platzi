class Persona{
    constructor(nombre,apellido,altura){
        this.nombre = nombre
        this.apellido = apellido
        this.altura = altura
    }

    saludar(){
        console.log(`hola, me llamo ${this.nombre} ${this.apellido}`)
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
    saludar(){
        console.log(`hola me llamos ${this.nombre} ${this.apellido} y soy desarrollador`)
    }
}



    
// var Sergio = new Persona('santiago','gonzalez',1.85)
// var erika = new Persona('Erika','Luna',1.59)
// var artuto = new Persona('Arturo','Martinez',1.83)
    