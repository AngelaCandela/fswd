// Probando JS externo.
function hey() {
    alert("Hey,  soy el tercer enlace");
};
document.getElementsByTagName("a")[2].addEventListener("click", hey);


// ---------------------Variables -----------------------
// var -> scope function
// let -> scope del bloque de código
function saludar () {
    console.log(i);
    for (var i=0; i < 5;i++) {
        console.log(i);
    }
    console.log(i, " sin problema.");
}

saludar();
//const -> scope de bloque de código
const num1 = 1;
// num1 = 2; // Produce error 

let var1, var2, var3;

// ---------------- Tipos de datos -------------
const name = "John"; // String
const age = 30; // Number
const height = 1.8; // Number
const isApproved = false; // boolean
const varUndefined = undefined; // undefined
let varUndefined2; // undefined
const selectedOption = null; // null

console.log(typeof name, name);
console.log(typeof age, age);
console.log(typeof height, height);
console.log(typeof isApproved, isApproved);
console.log(typeof varUndefined, varUndefined);
console.log(typeof varUndefined2, varUndefined2);
console.log(typeof selectedOption, selectedOption);

// ------------------- Strings ---------------------
let str = "Hola Futuro.";
console.log(str, str.length);

let str2 = str + " Hola JS." + 5;
console.log(str2, str2.length);

str2 = str.concat(" Hola JS."); // La diferencia entre .concat y + es que .concat acepta solo strings.
console.log(str2, str2.length);

let str3 = "Hola";
str3 += " Futuro."; // str3 = str3 + " Futuro."
console.log(str3, str3.length);

console.log("Hola aparece en el índice", str2.indexOf("Hola"));
console.log("Hola aparece en el índice", str2.lastIndexOf("Hola"));

console.log(str2.substring(5, 12));

console.log(str.toUpperCase());
console.log(str.toLowerCase());

console.log(str.replace("Futuro", "Mundo"));

console.log(`${name} tiene ${age} años.`);

// ------------------- Objects --------------------
console.clear();

const car1 = {
    brand: "BMW",
    weight: 2200,
    owner: "John",
    year: 2019,

    changeOwner (newOwner) {
        this.owner = newOwner;
    },
    turnOn () {
        console.log(this);
    }
}

car1.turnOn();

const car2 = {
    brand: "Volvo",
    weight: 2800,
    year: 2010,
    owner: {
        name: "Jane",
        lastName: "Smith",
        address: {
            street: "Calle Larios",
            number: 2,
            city: "Málaga"
        },
        age: 30,
        children: [{name: "John"}, {name: "Peter"}],
    },
    length: 3.1,    
};

console.log(car2.owner.children[0].name);

car1.owner = "Otro dueño"; // Dot notation

console.log(typeof car1);
console.log(car1.brand, car1.weight, car1.owner, car1.year);
console.log(car2.brand, car2.weight, car2.owner, car2.year);

let inputAttribute = "year";
console.log(car1[inputAttribute]); // Brackets notation

console.log(car2);

const users = [
    {
        id: 1,
        userName: "u1",
    },
    {
        id: 2,
        userName: "u2",
    }
];

// ------------------- Arrays --------------------

let selectedColors = ["red", "blue"];
console.log(typeof selectedColors, selectedColors, selectedColors.length);

console.log(selectedColors[0]);
console.log(selectedColors[1]);
console.log(selectedColors[2]); // undefined, no da error

//Añadir elementos

selectedColors[2] = "brown";
selectedColors.push("yellow");
selectedColors.unshift("pink");

console.log(typeof selectedColors, selectedColors, selectedColors.length);

//Eliminar elementos
/* selectedColors.shift(); //Elimina el primer elemento de un array
selectedColors.pop(); //Elimina el último elemento de un array
selectedColors.splice(1, 2); // Elimina, a partir del indice que indiquemos, el número de elementos que indiquemos */

console.log(typeof selectedColors, selectedColors, selectedColors.length);

// Búsqueda
console.log(selectedColors.indexOf("red"));
console.log(selectedColors.lastIndexOf("red"));

// Ordenar
selectedColors.sort();
console.log(selectedColors);

console.clear();
// ------------------- Condicionales --------------------
let datoLogico = true;

if (datoLogico && 5 < 6 && true && 5 == "5" && !(5 === "5")) {
    console.log("Condicional que siempre es verdadero");
} else if (false) {
    console.log("Otras acciones.");
} else {
    console.log("No se ha cumplido ninguna condición previa.");
}

// Ternary operators
// (condicion) ? si es verdadero : si es falso

let nota = 7;
datoLogico = nota >= 5 ? "Aprobado" : "Suspendido";

console.log(datoLogico);

//Switch
let option = 3;

switch (option) {
    case 1:
        console.log("Opción 1");
        break;
    case 2:
        console.log("Opción 2");
        break;
    case 3:
        console.log("Opción 3");
        break;
    default:
        console.log("Opción no existente.");
        break;
}

console.clear();
// ------------------- Funciones --------------------
function suma(num1, num2) {
    return num1 + num2;
}
console.log(suma(2, 2));

function esPar(num) {
    const esPar = num % 2 === 0;
    return esPar;
}
console.log(esPar(2));
console.log(esPar(3));


// Función anónima, la asignamos (sin nombre) a una variable
let saludar2 = function () {
    console.log("Hey");
};

console.log(typeof saludar2);

// Función como expresión

let result = (function (num1, num2) {return num1 + num2;})(2,2)

// Funciones de flecha / Arrow functions (solo para funciones de un comando return o ejecutar)
let perimeterOfSquare = function (side) {
    return side * 4;
};

perimeterOfSquare = (side) => side * 4;

let perimeter = perimeterOfSquare(5);
console.log(perimeter);

// ----------------- Bucles / Loops -----------------
// i++ es equivalente a i = i + 1 y a i += 1
// i-- es equivalente a i = i - 1 y a i -= 1

// For
for (let i = 1; i < 21; i++) {
    console.log(i);
}
for (let i = 20; i > 0; i--) {
    console.log(i);
}

// While
let i = 0;
while (i < 21) {
    console.log("Esta vez con while: ", i);
    i++;
}

// ForEach

function myFunction (item, index) {
    console.log(`Elemento ${index} es: ${item}`);
}

selectedColors.forEach(myFunction);

// El anterior forEach es equivalente al siguiente for:
for (let i = 0; i <= selectedColors.length - 1; i++) {
    console.log(`Elemento ${i} es: ${selectedColors[i]}`);
}