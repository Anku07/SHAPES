class Shape {
    area(){
        console.log("calcualte area")
    }
}
class Circle extends Shape{
    constructor(radius){
        super();
        this.radius = radius
    }
    area(){
       
        return Math.PI * this.radius*this.radius
    }
}
class Triangle extends Shape{
    constructor(base ,height){
        super();
        this.base =base,
        this.height= height
    }
    area(){
        
       return (0.5 * this.base *this.height)
    }
}
export {Shape, Circle, Triangle}