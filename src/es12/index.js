// 🧯 Replace: encontar el primer valor dentrodel String y remplazarlo por otro
const string = "JavaScript es maravilloso, con JavaScript puedo crear el futuro de la web";
               //primer valor: valora encontar en la cadena, segunso paramatro es por que lo va a remplazar
const remplacedString = string.replace("JavaScript", "Python");// REMPLAZA EL PRIMERO QUE ENCUENTRA
console.log(remplacedString);

const remplacedAllString = string.replaceAll("JavaScript", "Python");
console.log(remplacedAllString);// remplaza en todos los lugares donde encuentra

//metodos privados 

class Message {
    show(val){
        console.log(val);
    }

    #mostrar(val){        //# => con este simbolo vamos a poder declarar este metodo como privado
        console.log(val);
    }

    //GETTER AN SETTER
    get #add (val){
        
    }


}

const message = new Message();

message.show('hola');
message.mostrar('Hola atodos');

//Promise any: 
//es un objeto global de Promise cuyo argumento va a ser la forma de un array de promesas
//que vamos pasarle gestionando y calculando la primera que sea resuelta de forma mas satisfactoria

const promise1 = new Promise((resolve, reject) => {
    reject('1')
});

const promise2 = new Promise((resolve, reject) => {
    resolve('2')
});

const promise3 = new Promise((resolve, reject) => {
    resolve('3')
});

//Utilizar como funcion a estos 
Promise.any([promise1, promise2, promise3])  //retorna el primer valor que se resuelva de las promesas, ignora los demas
.then(response => console.log(response));




//  🦴 WeakRef(element): 
//   permite mantener una referencia debil a otro  sin evitar que este objeto sea pasado o recogido por el  collector

class anyClas {

 constructor(element){
   this.ref = new WeakRef(element) ;
 }
    
}


// 🧪 Nuevos operadores lógicos
//https://developer.mozilla.org/es/docs/Web/JavaScript/Guide/Expressions_and_Operators

//Asignacion and logico
let isTrue = true;
let isfalse = false;

console.log(isTrue &&= isfalse);

//Asignacion or logico
let isTrue = true;
let isfalse = false;

console.log(isTrue ||= isfalse);

//Asignacion de anulacion logica
let isTrue = true;
let isfalse = false;

console.log(isTrue ??= isfalse);










