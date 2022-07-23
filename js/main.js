class Mentor{
    constructor( name, age, prueba){
        this.name = name;
        this.academy = "kodemia";
        this.age = age;
        this.prueba = prueba;
        }
    }
    
    class auxiliarMentor extends Mentor{
        constructor(name, bootcamp, age){ //--> constructor(name, bootcamp, age, prueba){ , de aqui lo pasa al super  
            super(name, age); //--> super(name, age, prueba); de super lo pasa al constructor de Mentor.3
             
            this.bootcamp = bootcamp;
        }
    }
    
    let someMentor = new auxiliarMentor("Jonathan", "Python", "25", "prueba")
    
    console.log(someMentor)

/*
console

auxiliarMentor {name: 'Jonathan', academy: 'kodemia', age: '25', prueba: undefined, bootcamp: 'Python'}
academy: "kodemia"
age: "25"
bootcamp: "Python"
name: "Jonathan"
prueba: undefined -->
[[Prototype]]: Mentor

prueba: undefined   --> sale indefinido por que desde el auxiliarMentor to tengo que pasarle 
                        el parametro de "pureba" al constructor de mentor.
                        
                        recordemos que super se conecta con el constructor de Mentor 

*/