/* // Apartado 1 - Opción 1
$('div').html(
    `
        <ul>
            <li>Shampoo</li>
            <li>Milk</li>
            <li>Meat</li>
            <li>Water</li>
            <li>Bread</li>
        </ul>
    
    `
);

// Apartado 1 - Opción 2
$('div').append(
    `
        <ul>
            <li>Shampoo</li>
            <li>Milk</li>
            <li>Meat</li>
            <li>Water</li>
            <li>Bread</li>
        </ul>
    
    `
);

// Apartado 1 - Opción 3
$('div').append(
    $("<ul>")
        .append($("<li>").text("Shampoo"))
        .append($("<li>").text("Milk"))
        .append($("<li>").text("Meat"))
        .append($("<li>").text("Water"))
        .append($("<li>").text("Bread"))
);
 */
// Apartado 1 - Opción 4
const items = ["Shampoo", "Milk", "Meat", "Water", "Bread"];

const list = $("<ul>").addClass("active");
for (const item of items) {
    list.append($("<li>").text(item));
}

$('div').append(list);

// Apartado 2
$('ul li:nth-child(3)').text("Fish");

// Apartado 3
$('ul li:first-child').css({
    "color": 'green',
    "background-color": "lightgrey",
    "font-weight": "bold"});

// Apartado 4
$('ul li:last-child').addClass("underlined");

// Apartado 5
$('div').append($("<input>").attr({
    placeholder: "Write something here",
    name: "input",
    value: "inputValue"}));

// Apartado 5.2
$('input').removeAttr("value");

// Apartado 6
$('div').append($("<button>"));
$('button').text("Button").addClass("btn btn-primary mx-4");
$('button').removeClass("btn-primary");

// Apartado 6.2
$('button').addClass("btn-secondary");

// Apartado 7
$("ul").prepend($("<h1>").text("Shoppig List"));
$("ul").after($("<hr>"));