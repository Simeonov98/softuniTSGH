class Course {
    title;
    duration;
    constructor(title, duration) {
        this.title = title;
        this.duration = duration;
    }
}
class ProgrammingCourse extends Course {
    language;
    constructor(language, title, duration) {
        super(title, duration);
        this.language = language;
    }
    getDescription() {
        return `Programming Course: ${this.title} in ${this.language} - ${this.duration} hours`;
    }
}
class DesignCourse extends Course {
    tools;
    constructor(tools, title, duration) {
        super(title, duration);
        this.tools = tools;
    }
    getDescription() {
        return `Design Course: ${this.title} in ${this.tools} - ${this.duration} hours`;
    }
}
const jsCourse = new ProgrammingCourse("JavaScript", "Intro to JavaScript", 40);
const uiCourse = new DesignCourse(["Figma ", "Sketch"], "UXFundamentals", 30);
console.log(jsCourse.getDescription());
console.log(uiCourse.getDescription());
export {};
//# sourceMappingURL=11th.js.map