/* const { mostrarConsola } = require("./mostrarConsola");
const colors = require("colors");
const fs = require("fs");

console.log(process.argv)

const iniciar = () => {
    console.log(colors.cyan("Inicio de la aplicación v3"));
    mostrarConsola();
    fs.writeFile("./template.txt", "Template\n Jose", () => console.log("Fichero creado"));
}

iniciar(); */

// Yargs

const colors = require("colors");
const argv = require("./config/yargs").argv;
const fs = require("fs");

/* 
 * node app.js create --name=nombre --desc=[producto1, producto2, producto3];
 * node app.js list --name=nombre
 */

const main = () => {
    const command = argv._[0];

    switch (command) {
        case "create":
            console.log("Creando wishlist".blue);
            let wishlist = ''
            for (let i = 0; i < argv.desc.length; i++) {
                wishlist += `- ${argv.desc[i]}\n`;
            }
            fs.writeFile(`wishlists/${argv.name}-wishlist.txt`, wishlist, (err) => {
                if (err) console.log(colors.red(err));
                console.log("The file has been saved!");
            })
            break;
        case "list":
            console.log("Listing wishlist".blue);
            fs.readFile(`wishlists/${argv.name}-wishlist.txt`, "utf8", (err, data) => {
                if (err) console.log(colors.red(err));
                console.log(data);

            })
            break;
        default:
            console.log("Command doesn't exist");
    }
}

main();