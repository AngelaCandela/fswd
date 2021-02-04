const {v4: uuidv4} =require("uuid");

class Task {
    
    constructor(desc) {
        this.id = uuidv4();
        this.description = desc;
        this.completed = false;
    }
}

module.exports = Task;