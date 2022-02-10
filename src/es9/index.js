//Operador de reposo: puede extraer las propidades de un objeto el cual no se a construido.

const obj = {
name: 'oscar',
age : 32,
country: 'MX'
}
  //Va a traer  el name y todo lo demas encapsulado en {age, country};
let{country, ...all } = obj;
console.log(all);

//Operador de propagacion
const obj1 = {
    name: 'Pablo',
    age : 23,
    }

    const obj2 = {
        ...obj1,  //va a traer todos los elemntos de obj1 y los mete en obj1
        country : 'PY'
        }

console.log(obj2);



//promise.finaly
const World = () => {
    return Promise((resolve, reject) => {
      (true)
      ? setTimeout(() => resolve('Hello World'), 3000)
      : reject(new Error('Test Error'))
    });
};

World()
.then(response => console.log(response))
.catch(error => console.log(error))
.finally(() => console.log('Ya finalizo'))//Cuando sabemos que ya nuestra promesa a sido resulta o 
 //Va a permitir ejecutar un bloque de cosigo segun sea el caso


 //regexData
      //Como vamos a manjear las fechas 
 const regexData = /([0-9]{4})-([0-9]{2})-([0-9]{2})/
 //match: nos va a permitir saber si los datois estan establecidos correctamente sobre el rigex
 const match = regexData.exec('2018-04-20');
//Acceder a doatos muy particualres como el mes o el dia 
const year = match[1]; //tarer el primer bloque del grupo 
const month = match[2];
const day = match[3];

console.log(year, month, day);