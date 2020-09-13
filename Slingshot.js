class SlingShot{
    constructor(bodyA, pointB){
        this.sling1=loadImage("sprites/sling1.png");//loads the image
        this.sling2=loadImage("sprites/sling2.png");
        this.sling3=loadImage("sprites/sling3.png");
        var options = {//creates the stiffness and length for the slingshot
            bodyA: bodyA,
            pointB: pointB,
            stiffness: 0.04,
            length: 10
        }
        this.pointB = pointB
        this.sling = Constraint.create(options);//creates a Constraint to hold the bird in a certain area
        World.add(world, this.sling);
    }

    fly(){
        this.sling.bodyA = null;
    }

    display(){
        image(this.sling1,200,20);//creates image for the Catapult 1 in the right side
        image(this.sling2,170,20);//creates image for the catapult 2 in the left side
        if(this.sling.bodyA){
            var pointA = this.sling.bodyA.position;
            push();
            var pointB = this.pointB;
            stroke("#301708");//gives the same brownish color to the rubber band
            if(pointA.x<220){
                strokeWeight(7);//Increases the thickness of the rubber band 
                line(pointA.x-20, pointA.y, pointB.x-10, pointB.y);
                line(pointA.x-20,pointA.y,pointB.x+30,pointB.y);
                image(this.sling3,pointA.x-30,pointA.y-10,15,30);
            }
            else {
                strokeWeight(4);//decreases the thicness of the rubber band
                line(pointA.x+25, pointA.y, pointB.x-10, pointB.y);
                line(pointA.x+25,pointA.y,pointB.x+30,pointB.y);
                image(this.sling3,pointA.x+25,pointA.y-10,15,30);//creates the rubber band ande places the seat for the bird in the front and back of the bird
            }
            pop();
        }
    }
    
}