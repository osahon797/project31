class Umbrella{

constructor(x,y){
var options={
isStatic:true
}

this.image=loadImage("Walking Frame/walking_1.png")
this.body=Bodies.circle(X,Y,50,options)
this.r=50
World.add(world, this.body)
}

display(){

    var pos=this.body.position

    imageMode(CENTER)
    this.image(this.image,pos.x,pos.y+70,300,300)

}
}