//Ejercicio:
//Dado un arreglo de números, escribe una función llamada obtenerPromedio que calcule el promedio de todos los números en el arreglo 
//y retorne el resultado.

 /*[10, 20, 30, 40, 50]

function obtenerPromedio(array){
  let suma = 0
  for (let i = 0; i < array.length; i++) {
    const element = array[i];
    suma += element
}
 let promedio = suma / array.length
  return promedio
   // console.log(array)
}*/


/*¡Hola! Claro, aquí te dejo 5 problemas con arrays que puedes resolver en JavaScript:

Sumar los elementos de un array:

function sumarArray(arr){
  let array = 0;
  for (let i = 0; i < arr.length; i++) {
    
    array += arr[i];
    
  }
  return array;  
}

const arreglo = [2, 4, 6, 9];
console.log(sumarArray(arreglo));*/



//Encontrar el número más grande en un array:

/*function numeroMasGrande(arr) {
  let max = [];

  for (let i = 1; i < arr.length; i++) {
     if (arr[i] > max) {
       max = arr[i];
     } 
    
  }
    return max;
}

  const bigNumber = [5, 4, 9, 2]
  console.log(numeroMasGrande(bigNumber))*/


  //Encontrar el número más pequeño en un array:

 /* function numeroMasChico(arr) {
    let min = arr[0];

    for (let i = 1; i < arr.length; i++) {
      if(arr[i] < min){
        min = arr[i]
      }
    }
    return min
      
  }


 // const arr = [3, 1, 4, 1, 5, 9, 2, 6, 5, 3];
  //const result = numeroMasChico(arr);
 // console.log(result); // muestra "1" en la consola
 const masPequenio = [95, 156, 203, 45, 798]
 console.log(numeroMasChico
 consle.og(number.at(-3))(masPequenio));*/


 //Problema: Obtener el promedio de los elementos numéricos en un arreglo.

//Descripción: Dado un arreglo que contiene números y otros tipos de datos, 
//se te pide calcular el promedio de los elementos numéricos presentes en el arreglo. 
//Debes utilizar métodos de arrays para realizar el cálculo.

//Instrucciones:

//Crea un arreglo con varios elementos, incluyendo números y otros tipos de datos como cadenas de texto y 
//booleanos.
//Utiliza un método de arrays para filtrar solo los elementos numéricos del arreglo.
//Calcula la suma de los elementos numéricos utilizando un método de arrays.
//Divide la suma total entre la cantidad de elementos numéricos para obtener el promedio.
//Muestra el resultado del promedio en la consola.  //filter, reduce

//const arreglo = [5, 'Hola', 10, true, 8, 2, 'Mundo', 15, false, 3.5];


const nombresCompletos = ["santiago palacio", "malena palacio", "evangelina di croce"];

const inicialesMayusculas = nombresCompletos.map(function(nombre) {
  const palabras = nombre.split(' ');
  const iniciales = palabras.map(function(palabra) {
    return palabra.charAt(0).toUpperCase();
  });
  return iniciales.join('')
});

console.log(inicialesMayusculas);


//let arr = "Malena Palacio"
//console.log(arr.split(' '))


let num = 2.998e20
console.log(num)


