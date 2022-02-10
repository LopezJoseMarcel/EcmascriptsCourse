//https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Global_Objects/Symbol/description
//crear una pequeña matriz
let array = [1,2,3, [1,2,3, [1,2,3]]];
//array .flat = nos va a permitir devolver una matriz con cualquier sub-matriz aplanada.
//faltt recibe como parametros : valor de la profundidad
console.log(array.flat(2));

//Flat Map
let array1 = [1,2,3,4,5];
//Va a mapear cada uno de los elemntos 
                           //va a retornar nuestro valor y el valor por dos (* 2)
console.log(array1.flatMap(value => [value, value * 2]));

//Eliminar losespacios en blanco de un string
let hello = '    Hello world';
let hello1 = 'Hello World    '
let hello2 = '    Hello Mother     ';
console.log(hello);//hello con los epacios

console.log(hello.trimStart());// hello sacandole los espacios del principio

console.log(hello1.trimEnd());// hello sacandole los espacios del final

console.log(hello2.trimEnd().trimStart());// hello sacandole los espacios del principio y final


try {
    
} catch { // (error) ya no es necesario colocarlo
    error
}

//FROM ENTRIES DE ARREGLO A OBJETO
let person = [['name','Oscar'],['age', 34] ] ; // arreglo con dos arreglos en el interior que representan elemntos del futuro objeto
                       //aca le pasamos el arreglo que sera objeto
let obj = Object.fromEntries(person);

//Objeto de tipo simbolo que nos va apermitir acceder a una descripcion
let mySimbol = 'My Simbol';
let symbol = Symbol(mySimbol);

console.log(symbol.description);



