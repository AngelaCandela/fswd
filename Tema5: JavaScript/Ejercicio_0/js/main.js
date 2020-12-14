// Crear un array de 100 elementos en el que cada elemento
//tenga el valor del tamaño del array menos su índice.

let array = [];
let length = 100;

for (let i = 0; i <= length - 1; i++) {
    array[i] = length - i;
}

/* for (let i = length; i > 0; i--) {
    array.push(i);
} */

console.log(`Array 1: ${array}`);

// Con forEach sobre el primer array, copiaremos elemento
// a elemento en un segundo array previamente definido.

let array2 = [];

// Función nombrada
function copyItem (item) {
    array2.push(item);
};

array.forEach(copyItem);

// Función anónima
array.forEach(function (item) {
    array2.push(item);
});

// Función de flecha / Arrow function
array.forEach(item => array2.push(item));

console.log(`Array 2: ${array2}`);