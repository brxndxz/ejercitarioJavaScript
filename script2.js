Crea una variable numero y asígnale un valor de tipo number.
var numero = 1;
//Crea una variable texto y asígnale un valor de tipo string.
let texto = "Gatitos locos";
//Crea una variable verdadero y asígnale un valor de tipo boolean que represente una afirmación verdadera.
let verdadero = true;
//Crea una variable falso y asígnale un valor de tipo boolean que represente una afirmación falsa.
let falso = false;
//Crea una variable nulo y asígnale un valor de tipo null.
let nulo = null;
//Crea una variable indefinido y asígnale un valor de tipo undefined.
let indefinido = undefined;
//Crea una variable arreglo y asígnale un arreglo con varios valores de diferentes tipos de datos.
let arreglo = [1,'Gato', true];
//Imprime en la consola el valor de la variable número y el tipo de dato que almacena.
console.log(numero, typeof numero);
//Imprime en la consola el valor de la variable texto y el tipo de dato que almacena.
console.log(texto, typeof texto);
//Imprime en la consola el valor de la variable verdadero y el tipo de dato que almacena.
console.log(verdadero, typeof verdadero);
//Imprime en la consola el valor de la variable falso y el tipo de dato que almacena.
console.log(falso, typeof falso);
//Imprime en la consola el valor de la variable nulo y el tipo de dato que almacena.
console.log(nulo, typeof nulo);
//Imprime en la consola el valor de la variable indefinido y el tipo de dato que almacena.
console.log(indefinido, typeof indefinido);
//Imprime en la consola el valor de la variable arreglo y el tipo de dato que almacena.
console.log(arreglo, typeof arreglo);



/*Decisiones en javascript (if,if else, switch)*/

//Escribe un programa que tome un número como entrada y muestre un mensaje en la consola indicando si es mayor,
// menor o igual a 10.


let x = prompt ('Ingrese un numero')
if (x>10){
    console.log('Es mayor a 10')
} else if (x<10){
    console.log('Es menor a 10')
}else{
    console.log('Es igual a 10')
}


//Escribe un programa que solicite al usuario que ingrese un número y verifique si es par o impar.


let num = prompt ('Ingrese un numero')
if (num % 2 == 0){
    console.log('El numero '+ num + ' es par')
} else{
    console.log('El numero '+ num + ' es impar')
}


//Escribe un programa que solicite al usuario que ingrese una letra y verifique si es una vocal o una consonante.



let letra = prompt ('Ingrese una letra')
if (letra === 'a' || letra === 'e' || letra === 'i' || letra === 'o' || letra === 'u'){
    console.log('La letra '+ '"' + letra + '" es una vocal')
} else{
    console.log('La letra '+ '"' + letra + '" es una consonante')
}



//Escribe un programa que solicite al usuario que ingrese una edad y verifique si es mayor o menor de edad.


let edad = prompt ('Ingrese su edad')
if (edad == 18 || edad > 18){
    console.log('Es mayor de edad')
} else{
    console.log('Es menor de edad')
}


//Escribe un programa que solicite al usuario que ingrese un número del 1 al 7 y muestre un mensaje en la consola
//indicando el día de la semana correspondiente.


let valor = prompt ('Ingrese un numero del 1 al 7')
switch (valor) {
    case '1':
        console.log('Domingo')
        break;
    case '2':
        console.log('Lunes')
        break;
    case '3':
        console.log('Martes')
        break;
    case '4':
        console.log('Miercoles')
        break;
    case '5':
        console.log('Jueves')
        break;
    case '6':
        console.log('Viernes')
        break;
    case '7':
        console.log('Sabado')
        break;
}





//FUNCIONES

//Escribe una función que tome dos números como argumentos y devuelva su suma.

//Las variables "z,a" son números
let z = 25;
let a = 39;

function suma(){
    let za = 0;
    za = z+a;
    return za; 
}


//Escribe una función que tome un número como argumento y devuelva true si es par o false si es impar.

function ParImpar(){
    if (z % 2 == 0){
        return true;
    } else {
        return false;
    }
}

//Escribe una función que tome un array de números como argumento y devuelva la suma de sus elementos.
let array = [1,2,3,4,5];
function arreglo (){
    let sumaArray = 0;
    sumaArray = array.reduce((anterior, actual) => anterior + actual, 0);
    return sumaArray;
}
//Escribe una función que tome un array de strings como argumento y devuelva la longitud del string más largo.


let str = ['Gato', 'Perro', 'Tiburon', 'Ornitorrinco'];

function findLongestWord(str) {
    var strSplit = str.split(' '); 
    var longestWord = 0; 
    for (var i = 0; i < strSplit.length; i++) {
      if (longestWord < strSplit[i].length) {  
        longestWord = strSplit[i].length;    
      }
    }
    return longestWord; 
  }

//Escribe una función que tome un objeto como argumento y devuelva un array con los valores de todas sus propiedades.






//VECTORES

//Escribe una función que tome un array de números como argumento y devuelva el número más grande.

let arrNum = [3 , 6, 2, 56, 32, 5, 89, 32];
let mayor = 0;
function masGrande(){
for(i = 0; i < arrNum.length; i++){
    if (arrNum[i] > mayor)
    {
        mayor = arrNum[i];
    }
}
console.log(mayor);
}

//Escribe una función que tome un array de números como argumento y devuelva un array
// con los números ordenados de menor a mayor.

let numeritos = [1,10, 9, 7, 5, 3, 8, 2, 4, 6]; //AYUDAAAAAA
function ordenados (numeritos){
    numeritos.sort(function(a, b){return a - b});
}
//Escribe una función que tome dos arrays como argumentos y devuelva un array que contenga
//los elementos comunes entre ambos.

let arrjk= [1,2,3,4,5,23,35,6];
let array2= [2,4];

 function hola (arrjk, arrzx){
    let iguales=0;
    for(let i in arrjk){
    //console.log(i+"----> for 1")
	    for(let j in arrjk){
        // console.log(j+"---> for 2")
		    if(arrjk[i]==arrzx[j]){
			    iguales++;
                console.log(arrzx[j])
            }
	    }
    }
    console.log(iguales);
}


//Escribe una función que tome un array de strings como argumento y devuelva un nuevo array que contenga los strings 
//convertidos a mayúsculas.
let palabras = ["estrella", "guerra",  "mañana", "papa",  "bella"]

function convertirAMayusculas(peliculas) {    
     for (let i = 0; i < palabras.length; i++) {        
        palabras[i]  = palabras[i].toUpperCase()   
     }

    return peliculas
}

palabras = convertirAMayusculas(palabras);
console.log(palabras);

//Escribe una función que tome un array de números como argumento y devuelva un nuevo array
//que contenga la suma acumulativa de sus elementos.

let arreglo5 = [1,3,7,23];
function(arreglo5){
    
}



//BUCLES

//Escribe un bucle for que imprima en la consola los números del 1 al 10.

for(i=1;i<=10;i++){
console.log(i)}

//Escribe un bucle while que imprima en la consola los números del 1 al 5.

let h = 1;
while(h <=5){
    console.log(h);
    h++;
}

//Crea un vector con los números del 1 al 5. 
//Escribe un bucle for que imprima en la consola cada uno de los elementos del vector.


let arr5 = [1,2,3,4,5];
for(i=0; i<arr5.length; i++){
    console.log(arr5[i])}


//Crea una función que reciba un número n y devuelva la suma de todos los números del 1 al n.
// Utiliza un bucle for para calcular la suma y muestra el resultado en la consola.

let n = 5;
function sumaTodos(n){
    for(i = 1; i <= n; i++){
        n += i; 
        console.log(`Iteracion ${i}: ${n}`);
    }
}

//Crea una función que reciba un vector y devuelva la suma de todos sus elementos.
//Utiliza un bucle while para calcular la suma y muestra el resultado en la consola.
let arr3 = [1,2,3,4,5];
let c = 0;
function sumaWhile(arr3){
    while(c<arr3.length){
        let suma = 0;
        suma = arr3[0] + arr3 [4];
    }
}


//DOM y EVENTOS

//Crea un archivo HTML con un botón y un div vacío.
//Usa JavaScript para agregar un mensaje al div cuando se hace clic en el botón.

//Crea una función que cambie el color de fondo de un elemento HTML a rojo cuando el mouse se mueve sobre él.
// Agrega esta función como un listener de evento para el div del ejercicio anterior.

//Crea una función que cambie el tamaño de fuente de un elemento HTML cuando se presiona una tecla en el teclado. 
//Agrega esta función como un listener de evento para el div del ejercicio anterior.

//Crea una función que cambie el contenido de un elemento HTML cuando se hace doble clic sobre él. 
//Agrega esta función como un listener de evento para el div del ejercicio anterior.

//Crea una función que cambie la imagen de fondo de un elemento HTML cuando se carga la página. 
//Agrega esta función como un listener de evento para el body del documento.