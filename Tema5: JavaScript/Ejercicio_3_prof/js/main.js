// Classes
class Book {
    constructor(id, title, author, sales, price) {
        this.id = id;
        this.title = title;
        this.author = author;
        this.sales = sales;
        this.price = price;
    }
}

class Table {
    constructor(element, dataArray, removable) {
        this.element = element;
        this.dataArray = dataArray;
        this.removable = removable;
        this.update();
    }

    toggleRemovable () {
        this.removable = !this.removable;
        this.update();
    }    

    createHeader() {
        if(!document.querySelector("#removeHeader")) {
            const newTh = document.createElement("th");
            newTh.scope = "col";
            newTh.textContent = "Remove";
            newTh.id = "removeHeader";
            document.querySelector("thead tr").appendChild(newTh);
        }        
    }

    createRemoveButton(newRow) {
        const newButton = document.createElement("button");
        newButton.textContent = "Remove";
        newButton.classList.add("btn", "btn-danger");

        newButton.addEventListener("click", e => {
            const bookID = e.target.parentNode.parentNode.firstChild.textContent;
            this.dataArray = this.dataArray.filter(item => item.id != bookID);
            this.update();
        });

        const lastCell = document.createElement("td");
        lastCell.appendChild(newButton);

        newRow.appendChild(lastCell);
    }

    createRow (cells) {
        const newRow = document.createElement("tr");

        for(const cell of cells) {
            const newCell = document.createElement("td");
            newCell.textContent = cell;
            newRow.appendChild(newCell);
        }

        if(this.removable)
            this.createRemoveButton(newRow);

        this.element.appendChild(newRow);
    }

    update() {
        this.element.innerHTML = "";

        this.removable ? this.createHeader() : document.querySelector("#removeHeader").remove();

        for(const data of this.dataArray)
            this.createRow(Object.values(data));
    }
}

//Data
const book1 = new Book (1, "The Selfish Gene", "Richard Dawkins", 740120, 12);
const book2 = new Book (2, "The God Delusion", "Richard Dawkins", 610120, 15);
const book3 = new Book (3, "La nueva mente del emperador", "Roger Penrose", 120000, 17);
const book4 = new Book (4, "Sapiens: A Brief History of Humankind", "Yuval Noah Harari", 910120, 16);
const book5 = new Book (5, "The Selfish Gene", "Richard Dawkins", 740120, 12);

const books = [book1, book2, book3, book4, book5];

// Programa
const miTabla = new Table(document.querySelector("tbody"), books, true);


document.querySelector("#makeRemovable").addEventListener("click",() => miTabla.toggleRemovable());