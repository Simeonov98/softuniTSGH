import { TemplateLiteralLikeNode } from "../node_modules/typescript/lib/typescript";

abstract class Course{
    public title:string;
    public duration: number;
    constructor (title:string,duration: number){
        this.title = title;
        this.duration = duration
    }
    public abstract getDescription(): string

}

class ProgrammingCourse extends Course{
    language: string
    constructor(language: string, title:string, duration:number){
        super(title,duration)
        this.language  =language
    }
    override getDescription(): string {
        return `Programming Course: ${this.title} in ${this.language} - ${this.duration} hours`
    }
}
class DesignCourse extends Course{
    tools: string[]
    constructor(tools: string[], title:string, duration:number){
        super(title,duration)
        this.tools  =tools
    }
    override getDescription(): string {
        return `Design Course: ${this.title} in ${this.tools} - ${this.duration} hours`
    }
}

const jsCourse = new ProgrammingCourse("JavaScript", "Intro to JavaScript", 40);

const uiCourse = new DesignCourse(["Figma ", "Sketch"], "UXFundamentals", 30);
console.log(jsCourse.getDescription());
console.log(uiCourse.getDescription());