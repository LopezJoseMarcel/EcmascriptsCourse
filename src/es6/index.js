//PARAMETROS POR DEFECTO

//antes de es6

function newFunction(name, age, country){
    var name = name || "Jose";
    var age = age || 23;
    var country = country || "Brazil";
    console.log(name, age, country);
}
//es6

function newFunction2(name = 'oscar', age = 45, country = "Barbados") {
    console.log(name, age, country);
}
newFunction2();//Trae el valor por defecto 

newFunction2('Juan', 45, "Colombia");//Aca trae cel valor asignado en los parametros

//tempaltes literals
//manera antigua
let hello = "hello";
let world = "World";
let epicPhrase = hello + " "+ world;
console.log(epicPhrase);

//Manera actual
let epicPhrase2 = `${hello} ${world}`;

console.log(epicPhrase2);




//LET y CONST, Multilínea, Spread Operator y Desestructuración
//antes Multilinea
let lorem = "Quiero escribir una frase epica que podamos separar \n"
+ "Otra frase epica que nesecitabamos";
//AHORA
let lorem2 = `Otra frase mejor 
Esta sera la ultima frase`;
console.log(lorem);
console .log(lorem2);

//Desestructuración
let person = {
    'name' : 'Oscar',
    'age' : 34 ,
    'country' : 'CU'
};

console.log(person.age, person.country);
//destructuracion de los elemntos
//elementos                  ?de donde los voy a requerir
let {name, age} = person;
console.log(name,age); //Impresion de los que quiero


//operador de proppagacion: Nos permite expandir de ciertas situaciones varios elementos 
let team1 = ['Oscar', 'Julia', 'Ricardo'];
let team2 = ['Valeria', 'Jessica', 'Camila'];
//aplicando el operador de propagacion para traer los dos arreglos y meterlos dentro de otro
// "... aregloName"
let eduacations= ['Juan', ...team1, ...team2];

console.log(eduacations);

//LET "let"
//con let la variable solo esta disponible enn el escope
{
    var globalVar = 'Global var';
}

{
    let globalLet = 'Global let'; //la variablke solo esta disponible dentro de ese bloque 
     console.log(`${globalLet} dentro del scope`);                                      
}                                 

console.log(globalVar);          //si se imprime porque var esta disponobñle fuera del scope
console.log(globalLet);

const a = 23;
//a = 45;  <-- NO SE PUEDE
console.log(a);




//PROPIEDAD DE OBJETOS MEJORADA
let name = 'Oscar';
let age = 32;
//Antes de ES6
obj = {
    age: age,
    name: name
};
//Despues de ES6
obj2 = {name, age};

console.log(obj2);

//Arrows function
const names = [
    {name: 'Paco', age: 45},
    {name: 'Yessica', age: 25}
];

let listOfNames = names.map(function(item){
    console.log(item.name);
});
//Arrow
//  1era Forma           parametro    retorno
let listOfNmaes2 = names.map(item => console.log(item.name));

//2da forma          parametros              retorno
const listOfNmaes3 = (name, age, country) => {

};

//3ra forma un solo parametro
const listOfNmaes4 = item => {

};
//ejemplo
const squareA = num => num * num;




//PROMESAS IMPORTANTE ASINCRONISMO
const promesa = () => {
    return new Promise((resolve, reject) => {
        if (true) {
            resolve('hey!!');
        } else {
            reject('ups');
        }
    });
}

//llamamos  la promesa

promesa() //despues    presentamos el valor de la respuesta
.then(response => console.log(response))
.then(() => console.log('Hola')) //una promesa puede tener mas de un .then
.catch(error => console.log(error)) //capturar el error
;





//Clases, Módulos y Generadores
//Clases

class calculator {
   constructor(){
       this.valueA = 0;
       this.valueB = 0;
   }

   suma(valueA, valueB){
       this.valueA = valueA;
       this.valueB = valueB;
       return this.valueA + this.valueB;
   }
}

const cal = new calculator();
console.log(cal.suma(5, 5));

import{ hello } from './module';

hello();                     


//Generator : es una funcion especial que retorna una serie de valores segun el algoritmo definido.

function* helloWorld() { //va a poder retornar varios valores
    if (true) {
        yield 'Hello, ';
    }
    if (true) {
        yield 'World'
    }
}

const generatorHello = helloWorld();

console.log(generatorHello.next().value); //aca va a retornar el primer valor 
console.log(generatorHello.next().value); //aca va a retornar el segundo valor 

console.log(generatorHello.next().value); //este es para ver que sucede