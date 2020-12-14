class User {
    constructor(name, firstLastName, secondLastName, email, age, city) {
        this.name = name;
        this.firstLastName = firstLastName;
        this.secondLastName = secondLastName;
        this.email = email;
        this.age = age;
        this.city = city;
        this.nProducts = 0;
    }
    addProduct() {
        this.nProducts += 1;
    }
    emptyCart() {
        this.nProducts = 0;
    }
}

const fran = new User("Fran", "Gómez", "Fernández", "fgomez@gmail.com", 35, "Málaga");
const angela = new User("Angela", "Candela", "/", "angelacandela@hotmail.it", 30, "Valderice");
const andrea = new User("Andrea", "Moro", "/", "amoro@gmail.com", 33, "Udine");
const victor = new User("Víctor", "Garrido", "Esperón", "pepo@gmail.com", 37, "La Cala del Moral");
const carmen = new User("Carmen", "López", "de Haro", "mclodeharo@gmail.com", 27, "Rincón de la Victoria");

const users = [fran, angela, andrea, victor, carmen];

const userSelect = document.getElementById("userSelect");
const list = document.getElementById("list");
const button1 = document.getElementById("addProduct");
const button2 = document.getElementById("emptyCart");

button1.addEventListener("click", add);
button2.addEventListener("click", reset);
userSelect.addEventListener("change", changeUser);


// Estado inicial del DOM
function fillSelect(select, options) {
    select.innerHTML = "";
    for (const option of options) {
        const newOption = document.createElement("option");
        newOption.textContent = option;
        select.appendChild(newOption);
    }
}

function fillList(list, obj) {
    list.innerHTML = "";
    for(const property in obj) {
        const listItem = document.createElement("li");
        listItem.innerHTML = `<b>${property}:</b> ${obj[property]}`;        
        listItem.classList.add("list-group-item");
        list.appendChild(listItem);
    }
}

fillSelect(userSelect, users.map(user => user.name));
fillList(list, users[0]);

// let selectedUser = users.find(user => user.name === userSelect.value);
let selectedUser = users[userSelect.selectedIndex];

function add() {
    selectedUser.addProduct();   
    fillList(list, selectedUser);   
}

function reset() {    
    selectedUser.emptyCart();
    fillList(list, selectedUser);
}

function changeUser() {
    selectedUser = users[userSelect.selectedIndex];
    fillList(list, selectedUser);
}