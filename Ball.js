class Ball{
    constructor(x,y,r){
        var options={
            
            frictionAir:0.005,
            density:1.0

        }
       this.body=Bodies.circle(x,y,r,options)
       this.r=r
      
       World.add(world,this.body)


    }
  display(){
    var pos=this.body.position
    var angle=this.body.angle
    push()
    translate(pos.x,pos.y)
    rotate(angle)
    ellipseMode(RADIUS)
   strokeWeight(3)
   stroke("green")
   fill("brown")
    ellipse(0,0,this.r,this.r)
    pop()

  }


}