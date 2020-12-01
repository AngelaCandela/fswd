// Parte 1.
const container = document.getElementById("container");
const p1 = document.createElement("p")
const p2 = document.createElement("p")
p1.textContent = ("Text one.");
p2.textContent = ("Text two.");
container.appendChild(p1);
container.appendChild(p2);

// Parte 2.
const button = document.createElement("button");
button.textContent = ("button");
container.appendChild(button);

button.addEventListener("click", backgroundColorChange);

function backgroundColorChange(click) {
    document.body.classList.toggle("dark");
}

// Parte 3.

const links = document.getElementsByTagName("li");
let link_1 = links[0];
let link_2 = links[1];
let link_3 = links[2];

link_1.addEventListener("click", picChange);

function picChange (click) {
    link_1.firstChild.src=;

}


