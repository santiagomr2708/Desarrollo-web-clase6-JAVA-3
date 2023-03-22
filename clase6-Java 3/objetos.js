//objetos

const persona ={
    primernombre: 'Juan',
    apellido: 'Perez',
    edad: 22,
    documentoIdentidad: 5612,
    caracteristicas:{
        colorcabello: 'Rojo',
        etnia: 'Indoeuropeo',
        idiomaMaterno: 'Español'
    },
    //metodo
    saludar:function() {
        return `hola ${this.primernombre} ${this.apellido}`
        
    }
};
//accediendo al método
console.log(persona.saludar());
console.log(persona);
//acceder a una propiedad. Forma 1
console.log(persona.apellido)
//acceder a una propiedad. Forma 2
console.log(persona['primernombre'])

//clases
class Persona{
    constructor(primernombreusuario,apellidousuario){
        this.primernombreusuario = primernombreusuario;
        this.apellidousuario = apellidousuario;
    }
    //metodo
    saludarpersona(){
        return `hola ${this.primernombreusuario} ${this.apellidousuario}`
    }
}
//voy a usar la clase para construir una persona(objeto)
let Personita = new Persona('Juan','Perez')
Personita.primernombreusuario = 'Carlos';
Personita.apellidousuario = 'Cantor';
console.log(Personita);
console.log(Personita.saludarpersona());

//herencia
class Animales{
    constructor(nombre,edad, sonido){
        this.nombre = nombre;
        this.edad = edad;
        this.sonido = sonido;
    }
    //metodos
    sonido(){
        return `${this.nombre} tiene el sonido: ${this.sonido}`;
    }
}
//Herencia. Palabra clave extends
class Gatos extends Animales{
    //constructor de la clase Gatos
    constructor(nombre,edad,sonido,cazador){
        super(nombre,edad,sonido)
        this.cazador= cazador;
    }
    //método
    maullar(){
        return `Yo Puedo hacer el sonido ${this.sonido}`
    }
}
//crear un animal, especificamente un gato
let gato = new Gatos('alberto',52,'miaw',true);
console.log(gato);

//Tarea
/*1.crear un objeto que tenga minimo dos metodos, 
ademas debe tener una propiedad que sea un objeto*/
const avion ={
    tipo:'Caza de superioridad aérea furtivo',
    modelo: 'F-22 Raptor',
    generacion: 5,
    paisorigen: 'EE.UU',
    caracteristicasA:{
        peso: '19700 kg',
        velocidadmaxima: '2410 Km/H(MACH 2,25)',
        Armamento: 'Cañon rotativo 20mm,bombas,misiles aire-aire,misiles aire-tierra'
    },
    //metodo 1
    documental:function() {
        return `Los rusos temen al ${this.modelo} de ${this.generacion} generación`
    },
    //metodo 2
    info:function(){
        return `-"ingeniero": si se logra reducir el peso de ${this.caracteristicasA.peso} tal vez se podria aumentar mucho más su velocidad actual de ${this.caracteristicasA.velocidadmaxima}`
    }

};
//accediendo al método 1
console.log(avion.documental());
//accediendo al método 2
console.log(avion.info());

/*2.crear una clase que herede de otra.
Debe poseer minimo 3 propiedades para el constructor*/
class autos{
    constructor(marca,modelo, motor){
        this.marca = marca;
        this.modelo = modelo;
        this.motor= motor;
    }
    
}
//Herencia. Palabra clave extends
class electricos extends autos{
    //constructor de la clase electricos
    constructor(marca,modelo,motor,velocidad){
        super(marca,modelo,motor)
        this.velocidad= velocidad;
    }
    
}
//crear un animal, especificamente un gato
let autoelectrico = new electricos('Tesla','Roadster','motor eléctrico de 3 fases y 4 polos','201 Km/H');
console.log(autoelectrico);
/*3.crear una funcion tipo flecha que haga uso de la 
clase construida y el objeto declarado*/