class Book {
    constructor(id, title, author, sales, price) {
        this.id = id;
        this.title = title;
        this.author = author;
        this.sales = sales;
        this.price = price;
    }
}

const book1 = new Book (1, "The Selfish Gene", "Richard Dawkins", 740120, 12);
const book2 = new Book (2, "The God Delusion", "Richard Dawkins", 610120, 15);
const book3 = new Book (3, "La nueva mente del emperador", "Roger Penrose", 120000, 17);
const book4 = new Book (4, "Sapiens: A Brief History of Humankind", "Yuval Noah Harari", 910120, 16);
const book5 = new Book (5, "The Selfish Gene", "Richard Dawkins", 740120, 12);

// Filling the array with all the books
const books = [book1, book2, book3, book4, book5];

// Defining and initialising variables/constants
const table = document.getElementById("table");
const tableHead = document.getElementById("tableHead");
const tableBody = document.getElementById("tableBody");
const btn_removable = document.getElementById("removable");
let counter = 0;

//Generic function to fill in a table starting from an array of objects
function tableFill(table, list) {
    for(const obj of list) {
        const newRow = document.createElement("tr");
        table.appendChild(newRow);
        for(const property in obj) {
            let newCell = document.createElement("td");
            newRow.appendChild(newCell);
            newCell.textContent = obj[property];
        }
    }
}

tableFill(tableBody, books);

// Adding event listener to the green 'Removable' button
btn_removable.addEventListener("click", addButton);

//Function to make the 'Remove' buttons appear ONLY ONCE
function addButton() {
    if(counter == 0) {
        const newHeaderCell = document.createElement("th");
        tableHead.firstElementChild.appendChild(newHeaderCell);
        newHeaderCell.textContent = "Remove";

        const rows = Array.from(tableBody.children);
        for(row of rows) {
            const buttonCell = document.createElement("button");
            row.appendChild(buttonCell); 
            buttonCell.textContent = "Remove";
            buttonCell.classList.add("btn", "btn-danger");

            // Adding event listener to the red 'Remove' buttons
            buttonCell.addEventListener("click", removeRow);
            //Function to remove the entire row
            function removeRow(click) {
                click.target.parentElement.classList.add("displayNone");
            }
        }
    }
    counter += 1;    
}

