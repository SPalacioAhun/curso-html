/*function palabraMasLarga (arr){
    let palabraLarga = '';
    for (let i = 0; i < arr.length; i++) {
       if(arr[i].length > palabraLarga.length){
        palabraLarga = arr[i]
       }
    }
    return palabraLarga
}
const palabras1 = ['gato', 'perro', 'elefante', 'jirafa', 'leon'];
const palabraLarga = palabraMasLarga(palabras1)
console.log(palabraLarga)      
        

function encontrarPalabraMasLarga(arr) {
    let palabraMasLarga = '';
  
    for (let i = 0; i < arr.length; i++) {
      if (arr[i].length > palabraMasLarga.length) {
        palabraMasLarga = arr[i];
      }
    }
  
    return palabraMasLarga;
  }
  
  const palabras = ['gato', 'perro', 'elefante', 'jirafa', 'leon'];
  const palabraMasLarga = encontrarPalabraMasLarga(palabras);
  console.log(palabraMasLarga);*/

  //Problema:
//Dado un arreglo de números, crea una función que calcule y devuelva la suma de los números pares del
 //arreglo.
  
 /*function numerosPares(array){
    let par = array.filter(value=> value % 2 === 0)
    let suma = par.reduce((acumulador, numero)=> acumulador + numero, 0)
    return suma
}
    
 
 const numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
 const result = numerosPares(numeros)
 console.log(result)*/


// Dada una variable cadena de tipo String queremos saber si sólo tiene dígitos.
//Esto es molesto.
//Primero podemos ver si un carácter c es un dígito con 
//> !isNaN(Number(c)) 
//entonces podemos transformar el String en un arreglo de caracteres
//> var caracteres = Array(cadena)
//luego mapeamos eso para todos los caracteres del arreglo
//> var sonDigitos = caracteres.map(e => !isNaN(Number(e)))
//eso nos da un arreglo de Booleanos y podemos reducirlo
//> var esNumero = sonDigitos.reduce((e,a) => e && a,true)


/* var cadena = "Esto es molesto";
var caracteres = Array.from(cadena);
var sonDigitos = caracteres.map(e => !isNaN(Number(e)));
var esNumero = sonDigitos.reduce((e,a) => e && a, true);
console.log(esNumero)*/


//var cadena = "Esto es molesto";: Aquí defines una variable cadena que contiene el texto que deseas verificar.

//var caracteres = Array.from(cadena);: Utilizas el método Array.from() para convertir la cadena en un arreglo de caracteres. 
//Cada carácter se convierte en un elemento del arreglo.

//var sonDigitos = caracteres.map(e => !isNaN(Number(e)));: Utilizas el método map() para iterar sobre cada carácter del arreglo y verificar 
//si es un dígito utilizando !isNaN(Number(e)). Esto genera un nuevo arreglo llamado sonDigitos, donde cada elemento es un valor booleano 
//que indica si el carácter es un dígito (true) o no (false).

//var esNumero = sonDigitos.reduce((e,a) => e && a, true);: Utilizas el método reduce() para reducir el arreglo sonDigitos a un solo valor 
//booleano. El callback (e, a) => e && a verifica si todos los elementos del arreglo son true y devuelve true en ese caso, o false en caso 
//contrario. La inicialización true del reduce() establece el valor inicial del acumulador.

//En resumen, este código convierte la cadena en un arreglo de caracteres, verifica si cada carácter es un dígito y luego reduce el arreglo 
//de booleanos a un solo valor booleano que indica si todos los caracteres son dígitos.

//En el caso específico de la cadena "Esto es molesto", el resultado de esNumero será false, ya que contiene caracteres que no son dígitos.


//2. Dada una variable cadena de tipo String queremos saber si sólo tiene letras.
//La misma idea que antes pero ahora para chequear si c es una letra usamos:
//> RegExp(/^\p{L}/,'u').test(c)
//Eso funciona con letras con tilde y con la ñ.

let str = "La cabaña 565 está en orden"
var caracteres = Array.from(str);
var sonLetras = caracteres.map(e => RegExp(/^\p{L}/,'u').test(e));
var esSoloLetras = sonLetras.reduce((e,a) => e && a, true);
console.log(esSoloLetras)



let fecha = new Date();
console.log(fecha);
console.log(fecha.getDay());
console.log(fecha.getDate());
console.log(fecha.getMonth());
console.log(fecha.getFullYear());
console.log(Date.now());




