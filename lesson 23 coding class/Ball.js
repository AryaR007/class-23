class Ball
{
    constructor (x,y,radius)
    {
     var  BallOptions ={
         restitution:1
        }
        this.body=Bodies.circle(x,y,radius,BallOptions)
        World.add(world,this.body)
        radius=this.radius
    }
    display()
    {
        push () 
        ellipseMode(RADIUS)
        ellipse(this.body.position.x,this.body.position.y,radius,radius)
        pop ()
    }

}