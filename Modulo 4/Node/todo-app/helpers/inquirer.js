const inquirer = require("inquirer");

const menu = async() => {
    const { options } = await inquirer
        .prompt({
            type: "list",
            name: "options",
            message: "Please choose an option:",
            choices: [
                {
                    value: "1",
                    name: "1. Create task"
                },
                {
                    value: "2",
                    name: "2. Show tasks"
                },
                {
                    value: "0",
                    name: "0. Quit"
                }
            ]
        })
    return options;
}

const stop = async() => {
    await inquirer
                .prompt({
                    type: "input",
                    name: "selected option",
                    message: "Press Enter to continue"
                });
}

const confirm = async() => {
    const { ok } = await inquirer
                .prompt({
                    type: "confirm",
                    name: "ok",
                    message: "Are you sure?"
                })
                return ok;           
}

module.exports = {
    menu,
    stop,
    confirm
};