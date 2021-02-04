const Task = require("./task");

class Tasks {
    
    constructor() {
        this.list = [];
    }

    create(desc){
        const task = new Task(desc);
        this.list.push(task);
    };
};

module.exports = Tasks;