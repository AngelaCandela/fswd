// Apartado 1.
const container = document.getElementById("container");
const p1 = document.createElement("p");
const p2 = document.createElement("p");
p1.textContent = ("I am the first paragraph.");
p2.textContent = ("I am the second paragraph.");
container.appendChild(p1);
container.appendChild(p2);

// Apartado 2.
const container_2 = document.getElementById("container_2");;
const button = document.createElement("button");
button.textContent = ("Change Background Color");
container_2.appendChild(button);

button.addEventListener("click", backgroundColorChange);

function backgroundColorChange(click) {
    document.body.classList.toggle("dark");
}

// Apartado 3.
/* const links = document.getElementsByTagName("span");
const picture = document.getElementById("pic");

links[0].addEventListener("click", picChange);
links[1].addEventListener("click", picChange);
links[2].addEventListener("click", picChange);

function picChange (click) {
    if (click.target === links[0]) {
        picture.src = links[0].textContent;
    } else if (click.target === links[1]) {
        picture.src = links[1].textContent;
    } else {
        picture.src = links[2].textContent;
    }     
} */

//Apartado 3.
const links = document.getElementsByTagName("span");
const picture = document.getElementById("pic");

const array = Array.from(links);
array.forEach(element => element.addEventListener("click", picChange));

function picChange (click) {
    picture.src = click.target.textContent; 
}

//Apartado 4.
let input = document.getElementById("input");
let button_2 = document.getElementById("button_2");
let p3 = document.getElementById("paragraph");

button_2.addEventListener("click", addText);

function addText(click) {
    p3.textContent = input.value;
}

//Apartado 4.2.
let input_2 = document.getElementById("input_2");

input_2.addEventListener("keyup", addText2);

function addText2(keyup) {
    p3.textContent = input_2.value;
}

//Apartado 5.
let textarea = document.getElementById("textarea");
let button_3 = document.getElementById("button_3");
let p4 = document.getElementById("paragraph_2");

button_3.addEventListener("click", checkLength);
function checkLength (click) {
    if (textarea.value.length < 15) {
        p4.textContent = "Please type 15 or more characters.";
    } else {
        p4.textContent = "That's it!";
    }
}

//Apartado 6.
let input_3 = document.getElementById("input_3");
let button_4 = document.getElementById("button_4");
let p5 = document.getElementById("paragraph_3");

button_4.addEventListener("click", checkEven);

function checkEven(click) {
    input_3.classList.remove("red_border");
    if (input_3.value % 2 === 0) {
        p5.textContent = "That's it!"; 
        input_3.classList.remove("red_border");       
    } else {
        p5.textContent = "Please type an even number.";
        input_3.classList.add("red_border"); 
    }    
}

input_3.addEventListener("click", removeRedBorder);

function removeRedBorder(click) {
    input_3.classList.remove("red_border");
}

//Apartado 7.
const ul10 = document.createElement("ul");
const container_4 = document.getElementById("container_4");
container_4.appendChild(ul10);

for (let i = 1; i < 11; i++) {
    let li = document.createElement("li");
    li.textContent = `Elemento ${i}`;
    ul10.appendChild(li);
}

//Apartado 8.
const link = document.getElementById("link");
let button_5 = document.getElementById("button_5");

button_5.addEventListener("click", newTab);

function newTab(click) {
    link.target = "_blank";
}

//Apartado 9.
let p6 = document.getElementById("paragraph_4");
let select = document.getElementById("select");
let options = Array.from(select);

options.forEach(option => option.addEventListener("click", p6colorChange));

function p6colorChange(click) {
    p6.style.color = click.target.value;
}

//Apartado 10.
let button_6 = document.getElementById("button_6");
button_6.addEventListener("click", randomNumber);
let p7 = document.getElementById("paragraph_5");
let p8 = document.getElementById("paragraph_6");
let p9 = document.getElementById("paragraph_7");
let p10 = document.getElementById("paragraph_8");

let listOfGeneratedNumbers = [];
let listOfEvenNumbers = [];
let listOfOddNumbers = [];
let numberCount = 0;

function randomNumber(click) {
    let num = Math.round(Math.random() * 100);
    console.log(num);
    numberCount += 1;
    listOfGeneratedNumbers.push(num);
    if (num % 2 == 0) {
        listOfEvenNumbers.push(num); 
    } else {
        listOfOddNumbers.push(num);
    }
    p7.textContent = `You have generated the following random numbers: ${listOfGeneratedNumbers}.`;
    p8.textContent = `Of which the following are even numbers: ${listOfEvenNumbers}.`;
    p9.textContent = `And the following are odd numbers: ${listOfOddNumbers}.`;
    p10.textContent = `In total you have generated ${numberCount} random numbers.`;
}

//Apartado 11.
let input_4 = document.getElementById("input_4");
let button_7 = document.getElementById("button_7");
let ol = document.getElementById("ol");
let list = Array.from(ol);

button_7.addEventListener("click", inArray);

function inArray(click) {
    let num = input_4.value;
    let alreadyExists = false;
    for (let i = 0; i < list.length; i++) {
        if(list[i] == num) {            
            alert("This number is already in the list. Please type a different number.")
            alreadyExists = true;
            break;
        }        
    }

    if(alreadyExists == false) {
        list.push(num);
        let newLi = document.createElement("li");
        ol.appendChild(newLi);
        newLi.textContent = num;
        console.log(ol);
    }
}

//Apartado 12.
let button_8 = document.getElementById("button_8");
button_8.addEventListener("click", changeButtonStyle);

function changeButtonStyle(click) {
    button_8.classList.toggle("btn");
}
