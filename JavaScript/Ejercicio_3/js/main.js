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

const books = [book1, book2, book3, book4, book5];
const cells = document.querySelectorAll("td");

function rowFill() {
    let counter = 0;
    for(i = 0; i < books.length; i++) {
        for(let key in books[i]) {
            cells[counter].textContent = `${books[i][key]}`;
            counter += 1;                       
        }  
    }
}

rowFill();
const btn_removable = document.getElementById("removable");
btn_removable.addEventListener("click", addButton);

const rows = document.querySelectorAll("tr");
let counter_2 = 0;

function addButton() {
    
    for (i = 0; i < rows.length; i++) {
        if(i == 0) {  
            const newHeaderCell = document.createElement("th");          
            rows[i].append(newHeaderCell);
            newHeaderCell.textContent = "Remove";          
        } else {  
            const buttonCell = document.createElement("button");          
            rows[i].append(buttonCell);
            buttonCell.textContent = "Remove";
            buttonCell.classList.add("btn", "btn-danger");

            buttonCell.addEventListener("click", removeRow);

            function removeRow(click) {
                click.target.parentElement.classList.add("displayNone");
            }
        }   
    }    
    counter_2 += 1;
}