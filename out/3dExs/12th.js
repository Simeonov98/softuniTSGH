"use strict";
class Task {
    title;
    description;
    completed = false;
    _createdBy;
    constructor(title, description, createdBy) {
        this.title = title;
        this.description = description;
        this._createdBy = createdBy;
    }
    get createdBy() {
        return this._createdBy;
    }
    toggleStatus() {
        this.completed = !this.completed;
    }
    getDetails() {
        return `"Task: ${this.title} - ${this.description} - ${this.completed ? 'Completed' : 'Pending'}`;
    }
    static createSampleTask() {
        return [
            new Task('Do calc homework', 'complete all 200 problems', 'created by Simo'),
            new Task('Clean room', 'complete problems', 'created by Onq')
        ];
    }
}
const task1 = new Task('Do excersises', 'all muscles', 'created by Simo');
const task2 = new Task('Do run', 'go running', 'created by pencho');
const tasks = Task.createSampleTask();
console.log(task1.getDetails());
console.log(task2.getDetails());
tasks.forEach(task => console.log(task.getDetails()));
//# sourceMappingURL=12th.js.map