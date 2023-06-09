/*Supongamos que queremos crear una clase llamada Perro, con las propiedades nombre, raza y edad. 
Además, queremos que la clase tenga un método ladrar 
que devuelve un mensaje que indica que el perro está ladrando.*/ 

/*class Perro{
  constructor(nombre, raza, edad){
    this.nombre = nombre;
    this.raza = raza;
    this.edad = edad;
  }

  ladrar(){
    return `${this.nombre} esta ladrando, woof woof`
  }

  clase(){
    return `esta perra es una ${this.raza}`
  }
}

const perro1 = new Perro("Shaina", "Collie", 10)

console.log(perro1.ladrar())
console.log(perro1.nombre)
console.log(perro1.clase())
console.log(perro1.edad)*/


/*PROBLEMA 1: Clase Rectángulo
Crea una clase llamada Rectangulo que tenga dos propiedades: base y altura. La clase debe tener los siguientes métodos:

calcularArea(): retorna el área del rectángulo (base x altura)
calcularPerimetro(): retorna el perímetro del rectángulo (2 x base + 2 x altura)*/

/*class Rectangulo{
    constructor(base, altura){
        this.base = base;
        this.altura = altura;
    }

    calcularArea(){
        return this.base * this.altura
    }

    calcularPerimetro(){
        return (2 * this.base) + (2 * this.altura)
    }
}

   const rectangulo1 = new Rectangulo(20, 50);

   console.log(rectangulo1.calcularArea())
   console.log(rectangulo1.calcularPerimetro())
   console.log(rectangulo1.base)*/


   /*PROBLEMA 2: Clase Punto
   Crea una clase llamada Punto que tenga dos propiedades: x e y. La clase debe tener los siguientes métodos:
   
   mover(dx, dy): mueve el punto dx unidades en el eje x y dy unidades en el eje y
   calcularDistancia(punto): calcula la distancia entre el punto actual y el punto pasado como parámetro*/

   /*class Punto{
    constructor(x, y){
        this.x = x;
        this.y = y;
    }

      mover(dx, dy){
        this.x += dx;
        this.y += dy;
      }

      calcularDistancia(punto){
        const dx  = punto.x - this.x;
        const dy = punto.y - this.y;
        return Math.sqrt(dx ** 2 + dy ** 2)
      }
   }
        const punto1 = new Punto(0, 0)
        const punto2 = new Punto(3, 4)
       
        
        console.log(punto1.calcularDistancia(punto2))
        punto1.mover(2, 3);
        console.log(punto1.x, punto1.y);*/

       /* PROBLEMA 3: Clase Animal
Crea una clase llamada Animal que tenga una propiedad nombre y un método hacerSonido(). 
Luego, crea dos subclases llamadas Perro y Gato que hereden de la clase Animal y tengan su propio método hacerSonido().
 Los perros hacen "Guau" y los gatos hacen "Miau".*/


  /* class Animal{
    constructor(nombre){
        this.nombre = nombre;
    }

    hacerSonido() {
      console.log("Sonido genérico de animal");
    }
   }

   class Perro extends Animal{
       constructor(nombre){
          super(nombre);
       }
       hacerSonido() {
        console.log("Guau");
      }
   }

   class Gato extends Animal {
      constructor(nombre){
         super(nombre);
      }

      hacerSonido() {
        console.log("Miau");
      }
    }
    
    const perro1 = new Perro("Shaina");
    perro1.hacerSonido(); // Guau
    console.log(perro1.nombre);
    const gato1 = new Gato("Marlene");
    gato1.hacerSonido(); // Miau
    console.log(gato1.nombre);*/