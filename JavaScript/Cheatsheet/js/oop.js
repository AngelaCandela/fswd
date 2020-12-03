console.log("------------------------ES5-----------------------");
// 1. Objetos y prototipos

// 1.1 Creación de objetos y asignación de propiedades
let myCar = {};
console.log(typeof myCar, myCar);

myCar = new Object();
console.log(typeof myCar, myCar);

myCar.brand = "Ford";
myCar.model = "Mustang";
console.log(typeof myCar, myCar);

myCar["brand"] = "Ford";
myCar["model"] = "Mustang";
console.log(typeof myCar, myCar);

myCar = {
    brand : "Ford",
    model : "Mustang",
}
console.log(typeof myCar, myCar);

// 1.2 Enumeración de propiedades y valores
for (const property in myCar) {
    console.log("Using For...in:", property);
}

const keys = Object.keys(myCar);
console.log("Keys:", typeof keys, keys);
keys.forEach(key => console.log("Using Object.keys:", key));

const values = Object.values(myCar);
console.log("Values:", typeof values, values);
values.forEach(value => console.log("Using Object.values:", value));

const entries = Object.entries(myCar);
console.log("Entries:", typeof entries, entries);
entries.forEach(([key, value]) => {
    console.log("Using Object.entries:", key, value)
    });
    
// 1.3 Funciones constructoras
function Car(brand, model, year) {
    this.brand = brand;
    this.model = model;
    this.year = year;

    this.getAge = function () {
        let age = new Date().getFullYear() - this.year;
        console.log(`This ${this.brand} ${this.model} is ${age} years old.`);
    }
}

myCar = new Car("Ford", "Mustang", 2015);
console.log(typeof myCar, myCar);
myCar.getAge();

// 1.4 Métodos de objetos vs métodos del prototipo

Car.getAge = function () {
    console.log("Otro cálculo de edad.");
}
myCar.getAge(); //la función no se ha modificado entonces no modifica las instancias creadas
                //hace falta escribir la función en el prototipo

Car.prototype.getHP = function () {
    console.log("This car has 300 horsepower.");
}

Car.prototype.getHP = function () {
    console.log("This car has 400 horsepower.");
}

myCar.getHP(); //la función se ha modificado

// 1.5 Herencia
function SUV(brand, model, year, height, width) {
    Car.call(this, brand, model, year);
    this.height = height;
    this.width = width;
}

SUV.prototype = Car.prototype;
SUV.prototype.constructor = SUV;
let mySUV = new SUV("Audi", "Q7", 2019, 1.7, 2);
console.log(mySUV);
mySUV.getHP();



console.log("------------------------ES6-----------------------");
// Clases (Synctactic sugar)
class Book {
    constructor(title, author, year) {
        this.title = title;
        this.author = author;
        this.year = year;
        this.basePrice = 150;
    }

    getSummary() {
        console.log(`${this.title} was written by ${this.author} in ${this.year}.`);
    }

    get price() {
        return this.basePrice * 1.21;
    }

    set price(value) {
        this.basePrice = value / 1.21;
    }
}

const book1 = new Book("Metamorphosis", "Franz Kafka", 1912);
console.log(book1);
book1.getSummary();

//Get
const finalPrice = book1.price;
console.log(finalPrice);

//Set
book1.price = 121;
console.log(book1.basePrice);

class Magazine extends Book {
    constructor(title, author, year, month) {
        super(title, author, year);
        this.month = month;
    }
    getType () {
        console.log("Magazine");
    }
}

const mag1 = new Magazine("Autopista", "Motorpress Ibérica", 2017, "July");
console.log(mag1);
mag1.getSummary();
