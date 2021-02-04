const inquirer = require("inquirer");
const { menu, stop, confirm } = require("./helpers/inquirer");
const Tasks = require("./models/tasks");

const main = async() => {

    let opt = "";
    const tasks = new Tasks();
    
    do {
        opt = await menu();

        console.log(opt);

        switch(opt) {
            case "1":
                console.log("Create task");
                const { description } = await inquirer.prompt({
                    type: "input",
                    name: "description",
                    message: "Describe the task:"
                });
                tasks.create(description);
                break;
            case "2":
                console.log("Show tasks");
                tasks.list.forEach(task => {
                    const completed = task.completed ? "Completed" : "Pending";
                    console.log(`${task.description} - ${completed}`);
                })
                break;
        }

        if (opt !== "0") {
            await stop();
        } else {
            const ok = await confirm();
            if (!ok) opt = "";
        }

    } while (opt!== "0")        
};

main();