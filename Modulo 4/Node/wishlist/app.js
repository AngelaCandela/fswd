/*
* create --name=angela --desc=product1,product2,product3
* list --name=angela
*/

const yargs = require("./helpers/yargs");

const { createWishlist, readWishlist, deleteWishlist } = require("./helpers/file")

const main = () => {
    console.log(yargs.argv);    
    
    const command = yargs.argv._[0];
    const name = yargs.argv.name;
    const data = yargs.argv.desc;

    switch (command) {
        case "create":
            console.log("Comando create");
            createWishlist(name, data)
                .then(value => console.log(value))
                .catch(error => console.log(error));            
            break;
        case "list":
            console.log("Comando list");
            readWishlist(name)
                .then(data => console.log(data))
                .catch(error => console.log(error));  
            break;
        case "delete":
            console.log("Comando delete");
            deleteWishlist(name)
                .then(data => console.log(data))
                .catch(error => console.log(error));  
            break;
        default:
            console.log("No es un comando válido");
    };
}

main();