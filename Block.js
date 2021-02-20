class Block{
  constructor(x,y,height,width,angle){
      var options ={
        //isStatic: false,
        restitution: 0.1,
        friction: 0.01,
        //density:0.02
      }
      this.visibility=225;
      this.body=Bodies.rectangle(x,y,height,width,options);
      this.width=width;
      this.height=height;
      World.add(world,this.body);
  }
  display(){
      var pos= this.body.position;

      if(this.body.speed<3){
        //super.display();
        var angle=this.body.angle;
        var pos=this.body.position;
        push();
        translate(pos.x,pos.y);
        rotate(angle);
        rectMode(CENTER);
        rect(0,0,this.width,this.height);
        fill("blue");
        pop();
      }
      else{
        World.remove(world,this.body);
        push();
        this.Visibility = this.Visibility-5;
        pop();
      }
  }
}