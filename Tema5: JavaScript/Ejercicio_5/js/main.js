class Book {
    constructor(title, author, sales, price) {
        this.title = title;
        this.author = author;
        this.sales = sales;
        this.price = price;
    }
}

class Table {
    constructor(element, dataArray, lowerPriceFirst) {
        this.element = element;
        this.dataArray = dataArray;
        this.lowerPriceFirst = lowerPriceFirst;
        this.generate();
        this.updateFooter();
    }

    filter() {
        this.element.innerHTML = "";
        const search = input.value.toUpperCase();
        for(const data of this.dataArray) {
            if(data.title.toUpperCase().indexOf(search) >= 0) {                
                this.createRow(Object.values(data));
            }                     
        }
        this.updateFooter();                 
    }

    toggleLowerPriceFirst () {
        this.lowerPriceFirst = !this.lowerPriceFirst;

        if(this.lowerPriceFirst) {
            this.dataArray.sort((a,b) => a.price - b.price);
        } else if(!this.lowerPriceFirst) {
            this.dataArray.sort((a,b) => b.price - a.price);
        }
        this.filter();
    }

    createRow (cells) {
        const newRow = document.createElement("tr");

        for(const cell of cells) {
            const newCell = document.createElement("td");
            newCell.textContent = cell;
            newRow.appendChild(newCell);
        }

        this.element.appendChild(newRow);
    }

    generate() {
        this.element.innerHTML = "";

        for(const data of this.dataArray) {
            this.createRow(Object.values(data));         
        }
    }

    updateFooter() {
        const rows = document.querySelectorAll("tbody tr");
        let totalPrice = 0;
        rows.forEach(sumPrice);
        function sumPrice(row) {
            totalPrice += parseFloat(row.lastElementChild.textContent);
        }
        document.querySelector("tbody").nextElementSibling.textContent = `Total price: ${totalPrice}`;              
    }
}

const book1 = new Book ("The Selfish Gene", "Richard Dawkins", 740120, 12);
const book2 = new Book ("The God Delusion", "Richard Dawkins", 610120, 15);
const book3 = new Book ("La nueva mente del emperador", "Roger Penrose", 120000, 7);
const book4 = new Book ("Sapiens: A Brief History of Humankind", "Yuval Noah Harari", 910120, 16);
const book5 = new Book ("The Great Gatsby", "F. Scott Fitzgerald", 740120, 22);
const book6 = new Book ("On the Road", "Jack Kerouac", 610120, 14);
const book7 = new Book ("The Catcher in the Rye", "JD Salinger", 120000, 19);
const book8 = new Book ("1984", "George Orwell", 910120, 21);
const book9 = new Book ("Cien años de soledad", "Gabriel García Márquez", 740120, 11);
const book10 = new Book ("Pride and Prejudice", "Jane Austen", 610120, 10); 

const books = [book1, book2, book3, book4, book5, book6, book7, book8, book9, book10];

const myTable = new Table(document.querySelector("tbody"), books, false);

const input = document.getElementById("filter");
input.addEventListener("keyup",() => myTable.filter());
document.querySelector("#sortByPrice").addEventListener("click",() => myTable.toggleLowerPriceFirst());
