const yargs = require("yargs")
.command(
    "create",
    "Creating a wishlist",
    {
        name: {
            alias: "n",
            demandOption: true
        },
        desc: {
            alias: "d",
            demandOption: true,
            type: "array"
        },
    }
)   
.command(
    "list",
    "Listing a wishlist",
    {
        name: {
            alias: "n",
            demandOption: true
        }
    }
)
.command(
    "delete",
    "Deleting a wishlist",
    {
        name: {
            alias: "n",
            demandOption: true
        }
    }
);

module.exports = yargs;
