const argv = require("yargs")
    .command(
        "create",
        "Create a wishlist", {
            name: { demand: true, alias: "n" },
            desc: { demand: true, alias: "d", type: "array" }
        }
    )
    .command(
        "list",
        "List the products of the wishlist", {
            name: { demand: true, alias: "n" }
        }
    ).argv;

module.exports = { argv };