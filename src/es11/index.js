//Dynamic import: realizar una import de forma dinamica para poder llamrc piezas de 
//codigo y asi optimiza mejor nuestro proyecto

const button = document.getElementById("btn");
//este metodo permite escuchar alguna accion algun cambio que va a ocurrir en el boton
button.addEventListener("click", async function () {
    const module = await import("./file.js");   
    module.hello();                             //await para que espere por el inport
});

//import

/*concluciones 
  El dinamic import es importante ya que solo carga a lapagina web el archivo
  cuando se va a utilizar lo que significa que no va a ser tan pesada
*/ 


//trabajo con numero grandes
// 🔢 Big INT: permite trabajar con numeros mayores a 2^53

// 1- Añadiendo una "n" al final activas el big int en el valor
const aBigNumber = 9007199254740991n;

// 2- Con el metodo BigInt activas el valor
const anotherBigNumber = BigInt(9007199254740991);

console.log(aBigNumber);
console.log(anotherBigNumber);

/*🤝 Promise All Settled : nos va adar una promesa que se va a cumplir despues que todas
las promesas se hallan cumplido o rechazado
*/

const promise1 = new Promise((resolve, reject) => reject("reject") ) ;
const promise2 = new Promise((resolve, reject) => resolve("resolve1") ) ;
const promise3 = new Promise((resolve, reject) => resolve("resolve2") ) ;

//meter todas la promesas en un arreglo 

Promise.allSettled([promise1, promise2, promise3])
.then(response => console.log(response));

Promise.all([promise1, promise2, promise3])
.then(response => console.log(response));

 /*Promise.all: Va a ser recahazada en el momento en que se rechace alguna de estas promesas; ahi esdonde acaba
   Promise.allSettled:No importa el estado de las promesas esperara hasta que todas sean resultas.
 */


   // 🌎 Global This

console.log(window);
console.log(globalThis);

// 🔍 Nuevo operador lógico: null operato
       //SI EL VALOR ES NULO VAMOS A PONER UN TIPO STRING POR DEFAULT
const foo = null ?? 'defualt string' ;
console.log(foo);

// ⛓ Optional chaining   : vamosa podertrabajr diferentes niveles los arreglos y objetos

const user = {};
//vamoa a leer hasta este nivel; pero no rompas mi aplicacion
console.log(user?.profile?.email);
//sdale undefined pero no rompe la aplicacion

if (user?.profile?.email) {
    console.log('email');
} else{
    console.log('fail man ');
}