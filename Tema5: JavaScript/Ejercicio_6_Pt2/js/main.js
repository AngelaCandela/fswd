const LOGIN_URL = "https://reqres.in/api/login";
const USERS_URL = "https://reqres.in/api/users";

const credentials = {
    email: "",
    password: ""
}

const PAGE_SIZE = 6;
let currentPage = 1;
let users = [];

const div = document.querySelector("#my-div");
document.querySelector("#previousPage").addEventListener("click", changePage);
document.querySelector("#nextPage").addEventListener("click", changePage);
const emailInput = document.querySelector("#email");
const passwordInput = document.querySelector("#password");
document.querySelector("#sendCredentials").addEventListener("click", checkCredentials);

function changePage(e) {
    if (e.target.id === "previousPage" && currentPage > 1) {
      currentPage--;
    } else if (e.target.id === "nextPage" && PAGE_SIZE * (currentPage + 1) <= users.length) {
      currentPage++;
    }
    createPage();
}

function paginate(array, pageNumber) {
    return array.slice((pageNumber - 1) * PAGE_SIZE, pageNumber * PAGE_SIZE);
}

function createPage() {
    div.innerHTML = "";
    const newPageUsers = paginate(users, currentPage);
    newPageUsers.forEach(fillPage);

    function fillPage(user) {        
        const newList = document.createElement("ul");
        newList.textContent = `User: ${user.id}`;
        div.appendChild(newList);

        const keys = Object.keys(user);
        keys.forEach(function(key) {
            const newListItem = document.createElement("li");
            newList.appendChild(newListItem);
            newListItem.textContent = `${key}: ${user[key]}`;      
        })
    }
}

function checkCredentials() {

    credentials.email = emailInput.value;
    credentials.password = passwordInput.value;

    fetch(LOGIN_URL, {
        method: "POST",
        headers: {
            "Content-type": "application/json"
        },
        body: JSON.stringify(credentials)
    })
    .then(response => {
        if(!response.ok)
            throw new Error(`Algo ha ido mal: ${response.statusText}`);
        
        return response.json();
    })
    .then(getAllUsers)
    .catch(error => console.log(error))
};

function getAllUsers(USERS_URL) {
    fetch(USERS_URL)
        .then(response => {
            if(!response.ok)
                throw new Error(`Algo ha ido mal: ${response.statusText}`);
        
            return response.json();
        })
        .then(json => {
            users = users.concat(json.data);

            if(json.page < json.total_pages) {
                getAllUsers(`${USERS_URL}?page=${json.page+1}`);
            }
            createPage();
        }).catch(error => console.log(error));
};