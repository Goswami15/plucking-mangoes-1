class Character{
    constructor(x,y,width,height){
        
this.x=x;
this.y=y;
this.width=width;
this.height=height;


      
        this.image=loadImage("Plucking mangoes/boy.png");
    }
    display(){
        imageMode(CENTER);
        image(this.image,this.x,this.y,this.width,this.height);
    }
}