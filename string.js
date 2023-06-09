//charAt()

/*const nombre = "Santiago"
const primero = nombre.charAt(0)
const ultimo = nombre.charAt(nombre.length - 1);
const porDefecto = nombre.charAt();
const noExiste = nombre.charAt(99);
console.log(primero);
console.log(ultimo);
console.log(porDefecto);
console.log(noExiste);*/


//concat()

/*const name = "santiago"
const lastName = " Palacio"

console.log(name.concat(" hola"));
console.log(name.concat(lastName));
console.log(name.concat(lastName, " Ahun"));*/


//includes()

/*const oracion = "Mi bebe Malena es la mas linda del mundo";

console.log(oracion.includes("Malena"));    // Devuelve true
console.log(oracion.includes("Malena", 2)); // Devuelve true
console.log(oracion.includes("Malena", 9)); // Devuelve false*/


//indexOf()

//const s = "The code undefined code code !"

/*console.log(s.indexOf("Code"));
console.log(s.indexOf("code"));
console.log(s.indexOf("code", 4));
console.log(s.indexOf("code", 5));
console.log(s.indexOf("code", -5));
console.log(s.indexOf(" "));
console.log(s.indexOf());*/


//lastIndexOf()

/*console.log(s.lastIndexOf("Code"));
console.log(s.lastIndexOf("code"));
console.log(s.lastIndexOf("code", 24));
console.log(s.lastIndexOf("code", 23));
console.log(s.lastIndexOf("code", -5));
console.log(s.lastIndexOf(" "));
console.log(s.lastIndexOf());*/

/*function contarPalabras(texto) {
    const palabras = texto.split(" ");
    return palabras.length;
  }
  
  // Ejemplo de uso
  const frase = "Malena, es la bebe mas hermosa del mundo mundial";
  const cantidadPalabras = contarPalabras(frase);
  console.log(cantidadPalabras);*/

  //match()

  /*let text = "The rain in SPAIN stays mainly in the plain"

  let res = text.match("ain");
  let res2 = text.match(/ain/); 
  let res3 = text.match(/ain/g); // [ 'ain', 'ain', 'ain' ]
  let res4 = text.match(/ain/gi); //[ 'ain', 'AIN', 'ain', 'ain' ]
  let res5 = text.match(/w/); //null

  console.log(res)
  console.log(res2)
  console.log(res3)
  console.log(res4)
  console.log(res5)*/

//replace ()

/*const text = "Mr Blue has a blue house and a blue car"

let result = text.replace("blue", "red");

let result1 = text.replace("blue", (match)=>{
  return match.toUpperCase();
})

let result2 = text.replace(/blue/g, "red");

let result3 = text.replace(/blue/gi, "red");

let result4 = text.replace(/blue/gi, (match)=>{
  return match.toUpperCase();
})

console.log(result);
console.log(result1);
console.log(result2);
console.log(result3);
console.log(result4);*/

//split()

/*const string = "The morning is upon us."

const arr0 = string.split()

const arr1 = string.split(" ");

const arr2 = string.split("");

const arr3 = string.split("o");

const arr4 = string.split("o", 2);

const arr5 = string.split("o", 0);

console.log(arr0);
console.log(arr1);
console.log(arr2);
console.log(arr3);
console.log(arr4);
console.log(arr5);*/


//substring()

/*const s = 'The morning is upon us.'

const sub1 = s.substring(12);
const sub2 = s.substring(-11);
const sub3 = s.substring(23);
console.log(sub1);
console.log(sub2);
console.log(sub3);

const sub4 = s.substring(13, 16);
const sub5 = s.substring(16, 13);
const sub6 = s.substring(-8, -4);
const sub7 = s.substring(-8, 4);
const sub8 = s.substring(8, -4);
console.log(sub4);
console.log(sub5);
console.log(sub6);
console.log(sub7);
console.log(sub8);*/

//slice()

/*const sl = 'The morning is upon us.'

const sl1 = sl.slice(12);
const sl2 = sl.slice(-11);
console.log(sl1);
console.log(sl2);

const sl3 = sl.slice(13, 16);
const sl4 = sl.slice(16, 13);
const sl5 = sl.slice(-8, -4);
const sl6 = sl.slice(-8, 4);
const sl7 = sl.slice(8, -4);
console.log(sl3);
console.log(sl4);
console.log(sl5);
console.log(sl6);
console.log(sl7);*/


const lower = "istanbul"
const upper = lower.toLocaleUpperCase('en-US')
console.log(upper);

const min = "İSTANBUL"
const may = lower.toLocaleLowerCase('en-US')
console.log(may)











  



















