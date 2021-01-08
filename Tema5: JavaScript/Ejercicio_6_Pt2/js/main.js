const LOGIN_URL = "https://reqres.in/api/login";
const USERS_URL = "https://reqres.in/api/users";

const PAGE_SIZE = 6;
let currentPage = 1;
let users = [];

const credentials = {
    email: "",
    password: ""
}

const div = document.getElementById("my-div");
const emailInput = document.getElementById("email");
const passwordInput = document.getElementById("password");
const form = document.querySelector("form");

form.addEventListener("submit", (e) => {

    e.preventDefault();    
    checkCredentials()
});

document.getElementById("previousPage").addEventListener("click", changePage);
document.getElementById("nextPage").addEventListener("click", changePage);

function changePage(e) {
    if (e.target.id === "previousPage" && currentPage > 1) {
      currentPage--;
    } else if (e.target.id === "nextPage" && PAGE_SIZE * (currentPage + 1) <= users.length) {
      currentPage++;
    }
    showUsers();
}

function paginate(array, pageNumber) {
    return array.slice((pageNumber - 1) * PAGE_SIZE, pageNumber * PAGE_SIZE);
}

function showUsers() {
    div.innerHTML = "";
    const newPageUsers = paginate(users, currentPage);
    newPageUsers.forEach(fillPage);

    function fillPage(user) {
        const newPic = document.createElement("img");
        newPic.src = user.avatar;
        newPic.classList.add("mt-4");
        div.appendChild(newPic);
        const name = document.createElement("li");
        name.textContent = `First Name: ${user.first_name}`;
        div.appendChild(name);
        const lastName = document.createElement("li");
        lastName.textContent = `Last Name: ${user.last_name}`;
        div.appendChild(lastName);
        const email = document.createElement("li");
        email.textContent = `Email: ${user.email}`;
        div.appendChild(email);
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
        body: JSON.stringify(credentials),
    })
    .then(response => {
        if(!response.ok)
            throw new Error(`Algo ha ido mal: ${response.statusText}`);
        console.log(response.statusText);
        return response.json();        
    })
    .then(data => getAllUsers(USERS_URL))
    .catch(error => console.log("Invalid email or password"))
};

function getAllUsers(URL) {
    fetch(URL)
        .then(response => {
            if(!response.ok)
                throw new Error(`Algo ha ido mal: ${response.statusText}`);
            console.log(response.statusText);
            return response.json();
        })
        .then(json => {
            users = users.concat(json.data);

            if(json.page < json.total_pages) {
                getAllUsers(`${URL}?page=${json.page+1}`);
            }
            showUsers();
        }).catch(error => console.log(error));
};