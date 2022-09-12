//OBJECT.ENTRIES : nos va a permitir devolver la clave y los valores de una matriz

const data = {
 fronted : 'Oscar',
 backend : 'Ana',
 diseñador : 'Julia'
};

//TRANSFORMAR ESTE OBJETO A UNA MATRIZ
//                le pasamos nuestro valor de data           
 const entries = Object.entries(data);
 console.log(entries);

 //saber cuantos elementos tiene un objeto
 console.log(entries.length);

 //OBJECT VAlues: devuelve los valores de un objeto o a un arreglo de strings
 
const data = {
    fronted : 'Oscar',
    backend : 'Ana',
    diseñador : 'Julia', //establece que puede o no haber un valor siguiente
   };
// de objeto a arreglo
   const values = Object.values(data);
   console.log(values);

//PADDING
const string = 'Hello';
console.log(string.padStart(7,'hi'));//agrega al pricipio o al final cracteres indicandol el maximo de caracteres dela cadena
console.log(string.padEnd(11,' ----'));





//Async 
//Esto seria para que espere tres segundos antes de imprimir
const helloWorld = () => {
   return new Promise((resolve, reject) => {
      (true)
      ? setTimeout(() => resolve('Hello World'), 3000)
      : reject(new Error('Test Error'))
   })
};

const helloAsyn  = async () => {
   const hello = await helloWorld();
   console.log(hello);
}

helloAsyn();


//otra forma
const anotherFunction = async () => {
  try {
    const hello  = await helloWorld();
    console.log(hello);
  } catch (error) {
     console.log(error);
  }
};

anotherFunction();



























