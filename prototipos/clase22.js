//constructor
function Persona(nombre,apellido,altura){
    //atributos
        this.nombre = nombre
        this.apellido = apellido
        this.altura = altura
    }
    
    //funciones
    Persona.prototype.saludar = function (){
        console.log(`hola, me llamo ${this.nombre} ${this.apellido}`)
    }
    
    Persona.prototype.soyAlto = function(){
        return this.altura > 1.80
        // if(this.altura > 1.80){
        //     console.log(`soy alto`)
        // }else{
        //     console.log('soy bajito')
        // }
    }
    
    
    
    var Sergio = new Persona('santiago','gonzalez',1.85)
    var erika = new Persona('Erika','Luna',1.59)
    var artuto = new Persona('Arturo','Martinez',1.83)
    