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

// Parsing - Cambio de tipo de dato
let num3 = "1000.5";
console.log(typeof num3, num3);
console.log(typeof parseInt(num3), parseInt(num3));  // Convierte una string a integer
console.log(typeof parseFloat(num3), parseFloat(num3)); // Convierte una string a float
console.log(typeof Number(num3), Number(num3)); // Crea un número, respetando si es int o float

console.log("1000" + 1000, typeof("1000" + 1000));
console.log(1000 + + "1000", typeof(1000 + + "1000"));
console.log(1000 + Number("1000"), typeof(1000 + Number("1000")));
console.log("1000" * 1, typeof("1000" * 1));


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

console.clear();
// Constructores de objetos utilizando funciones
// **** Hace falta entender las funciones primero.

function Car(brand, color, weight, topSpeed) {
    this.brand = brand;
    this.color = color;
    this.weight = weight;
    this.topSpeed = topSpeed;

    this.description = () => `Este ${this.brand} ${this.color} pesa` +
    ` ${this.weight} y puede llegar a los ${topSpeed} kms/h.`
}

const miCoche = new Car("BMW", "red", 1800, 230);
console.log(miCoche.description());

const coche2 = new Car("Volvo", "blue", 2000, 180);
console.log(coche2.description());

console.log(miCoche, coche2);

console.clear();
// Iterar sobre todas las propiedades de un objeto
for (let key in miCoche) {    
    if (typeof key !== "function") {
        console.log(key);
    }
}

for (let key of Object.keys(miCoche)) {
    console.log(key);
}

for (let key of Object.values(miCoche)) {
    console.log(key);
}

for (let key in miCoche) {
    console.log(key, miCoche[key]);  // si no sabemos el nombre de la key
}

// Comprobar si una propiedad está presente en un objeto
if ("year" in miCoche) {
    console.log("El coche tiene año especificado.");
}

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
selectedColors.shift(); //Elimina el primer elemento de un array
selectedColors.pop(); //Elimina el último elemento de un array
selectedColors.splice(1, 2); // Elimina, a partir del indice que indiquemos, el número de elementos que indiquemos

console.log(typeof selectedColors, selectedColors, selectedColors.length);

// Búsqueda
console.log(selectedColors.indexOf("red"));
console.log(selectedColors.lastIndexOf("red"));

// Ordenar
selectedColors.sort();
console.log(selectedColors);

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

// for ... of
for (let color of selectedColors) {
    console.log(`FOR ... OF : ${color}`);
}


// Break - rompe el bloque de código en el que esté
let k = 0;
let z = 0;

labelBreakLoop: while (true) {
    console.log("Outer loop: ", k);
    k++;
    z = 0;
    while (true) {
        console.log("Inner loop: ", z);
        z++;
        if (z === 10 && k === 2) {
            break labelBreakLoop;

        } else if (z === 10) {
            break;
        }
    }
}


// Continue - hace que nos saltemos una iteración en concreto
for (let i = 0; i < 5; i++) {
    if (i ===3) {
        continue;
    }    
    console.log("Using continue: ", i);
}



// ---------------- DOM -----------------
// Aspectos básicos
console.log(document);
console.log(document.URL);
console.log(document.domain);
console.log(document.title);
console.log(document.links);
console.log(document.images);

console.clear();

// Selectores
document.getElementById(id);
document.getElementsByTagName(tag);
document.getElementsByClassName(name);
document.querySelector("tag.class#id");

const contenedores = document.getElementsByTagName("div");
let grandparent = contenedores[0];
grandparent = contenedores["grandparent"]; // Sólo si grandparent tiene ID
grandparent = contenedores.grandparent;

const parents = document.getElementsByClassName("parent");
let parent1 = parents[0];
parent1 = parents["parent1"];
parent1 = parents.parent1;

const child1 = document.getElementById("child1");

const child2 = document.querySelector("div#grandparent.grandparent>.parent#parent1>#child2");
const children = document.querySelectorAll(".child");

/* parentElement
firstElementChild
lastElementChild
nextElementSibling
previousElementSibling */

console.log(child1.textContent);
console.log(child1.innerHTML);

child1.innerHTML = ""; //Se carga todo el código dentro de ese contenedor div
child1.innerHTML = "<span style='color:red;'>Child ONE</span>";
child2.textContent += "!";

// Creación de elementos
let newDiv = document.createElement("div");
newDiv.id = "identificador"
newDiv.setAttribute("title", "divTitle"); // Cuando la propiedad que queramos configurar no esté disponible
newDiv.title = "divTitle";
newDiv.textContent = "Child 2.5";
newDiv.innerText = "Child 2.5"; /* Similar a textContent pero respeta estilos,
                        p.e. con estilo display:none no lo mostraría */

// Modificación de CSS - no recomendado, el código CSS siempre en el archivo CSS
newDiv.style.backgroundColor = "red";
newDiv.style.border = "2px solid black";
newDiv.style.cssText = "background-color: red; color: white;";

newDiv.className = "btn btn-primary";
newDiv.className += " newClass";

// Modificación de CSS - Forma recomendada/buena práctica (a través de las clases)
newDiv.classList.add("otherClass");
newDiv.classList.remove("newClass");

newDiv.classList.toggle("newClass"); // toggle: si la clase está la quita
newDiv.classList.toggle("newClass"); // y si no está la pone (útil para las animaciones)

// Anexarlo en los hijos
parent1.appendChild(newDiv);
parent1.appendChild(newDiv); /* Sobreescribiría al primero, no pueden
                        coexistir dos instancias del mismo nodo. */


const otherDiv = newDiv.cloneNode(true);
otherDiv.id = "otherID"; // lo acabamos de clonar pero es importante cambiarle el ID
otherDiv.textContent = "Other Div";
parent1.prepend(otherDiv);
parent1.insertBefore(otherDiv, child2);

// Anexarlo al mismo nivel
parent1.after(otherDiv);
parent1.before(otherDiv);

// Eliminar nodes / elementos
otherDiv.remove();
parent1.removeChild(newDiv);

// Eventos
const miBoton = document.querySelector("button")
miBoton.addEventListener("click", buttonClick);

function buttonClick(event) {
    miBoton.textContent = "Nuevo texto";
}

/* document.getElementById(id).onclick = function (){
    //nuestro código
}

element.addEventListener(event, function);
 */


 const h2 = document.querySelector("h2");

 document.body.addEventListener("mousemove", updateCoords);
 function updateCoords(event) {
    console.log(`Alt: ${event.altKey} || Ctrl: ${event.ctrlKey} || Shift: ${event.shiftKey}`);
    h2.textContent = `Coordenadas: X:${event.x} Y:${event.y}`;
 }

 const input = document.querySelector("input");

 input.addEventListener("focus", logEvent);
 input.addEventListener("blur", logEvent);
 input.addEventListener("keyup", logEvent);

 function logEvent(event) {
    console.log(event.type);
    if (event.type === "focus") {
        event.target.style.backgroundColor = "red";
    } else if (event.type === "blur") {
        event.target.style.backgroundColor = "white";
    } else {
        input.previousElementSibling.textContent = event.target.value;
    }
 }
