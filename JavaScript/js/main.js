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
}

const car2 = {
    brand: "Volvo",
    weight: 2800,
    owner: "Jane",
    year: 2010,
}

console.log(typeof car);
console.log(car1.brand, car1.weight, car1.owner, car1.year);
console.log(car2.brand, car2.weight, car2.owner, car2.year);
