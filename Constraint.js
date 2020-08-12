class Cons{
    constructor(bodyA,pointB){
        var options={
            bodyA:bodyA,
            pointB:pointB,
        }
      this.cons=Matter.Constraint.create(options);
      
    }
    display(){
        strokeWeight(5);
        stroke("red");
        var pointA = this.cons.bodyA.position;
        var pointB = this.cons.pointB;
        line(pointA.x,point,pointB.x,pointB.y);
    }
}