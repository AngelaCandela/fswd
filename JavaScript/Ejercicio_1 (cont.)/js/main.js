const buttons = document.getElementsByClassName("btn");

Array.from(buttons).forEach(button => button.addEventListener("click", (click) => {
    click.target.style.backgroundColor = "red";
})); 

/* function myFunction(click) {
    click.target.style.backgroundColor = "red";
} */