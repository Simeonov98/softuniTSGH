import { textChangeRangeIsUnchanged } from "../node_modules/typescript/lib/typescript"

abstract class Shape {
  constructor(public color: string) {}
  public abstract getArea(): number;
}


class Circle extends Shape{
    public radius: number
    constructor(color: string, radius: number){
        super(color)
        this.radius = radius
    }
    public getArea(): number {
        return this.radius*this.radius*Math.PI;
    }
}

class Rectangle extends Shape{
    sideA: number;
    sideB: number;
    constructor(color:string, sideA: number, sideB: number){
        super(color)
        this.sideA = sideA
        this.sideB = sideB
    }
    public override getArea(): number{
        return this.sideA * this.sideB
    }
}
const circle = new Circle("red", 5);
console.log(circle.getArea());
const rectangle = new Rectangle("blue", 4, 6);
console.log(rectangle.getArea())