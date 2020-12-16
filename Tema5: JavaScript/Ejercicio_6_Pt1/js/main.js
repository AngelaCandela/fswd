const POSTS_URL = "https://jsonplaceholder.typicode.com/posts";
const PAGE_SIZE = 20;

let currentPage = 1;
let posts = [];

const div = document.querySelector("#my-div");
document.querySelector("#previousPage").addEventListener("click", changePage);
document.querySelector("#nextPage").addEventListener("click", changePage);

function changePage(e) {
    if (e.target.id === "previousPage" && currentPage > 1) {
      currentPage--;
    } else if (e.target.id === "nextPage" && PAGE_SIZE * (currentPage + 1) <= posts.length) {
      currentPage++;
    }
    createPage();
}

function paginate(array, pageNumber) {
    return array.slice((pageNumber - 1) * PAGE_SIZE, pageNumber * PAGE_SIZE);
}

function fillMyArray(array) {
    array.forEach(post => posts.push(post));
    createPage();    
}

function createPage() {
    div.innerHTML = "";
    const newPagePosts = paginate(posts, currentPage);
    newPagePosts.forEach(fillPage);

    function fillPage(element) {        
        const newTitle = document.createElement("h4");
        const newParagraph = document.createElement("p");
        div.appendChild(newTitle);
        div.appendChild(newParagraph);
        newTitle.textContent = `${element.id}: ${element.title}`;
        newParagraph.textContent = element.body;
    }
}

fetch(POSTS_URL)
    .then(response => {
        if(!response.ok)
            throw new Error(response.status);
        
        return response.json();
    })
    .then(data => fillMyArray(data))
    .catch(error => console.log(error))