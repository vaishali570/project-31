class Thunder{
constructor(x,y,width,height){
    var options={
       'isStatic':true
    }
    this.body=Bodies.rectangle(x,y,width,height,options)
    this.width=350;
    this.height=350;
    this.image=loadImage("thunderbolt/1.png")
    this.image = loadImage("Walking Frame/walking_1.png"); 
}
}
display();{
   
     push()
     translate(this.body.position.x,this.body.position.y) 
     rotate(angle); 
     var pos = this.umbrella.position; 
    var angle=this.body.angle;
    function preload(){
        thunder1 = loadImage("thunderbolt/1.png"); 
        thunder2 = loadImage("thunderbolt/2.png"); 
        thunder3 = loadImage("thunderbolt/3.png"); 
        thunder4 = loadImage("thunderbolt/4.png");
}
}
