class Score{
constructor(x,y,width,height) {
    var options = {
        isStatic: true
    }
    this.image = loadImage("sprites/score.png");
    this.body = Bodies.rectangle(x,y,width,height,options);
    this.width = width;
    this.height = height;

    World.add(world, this.body);
  }
  display(){
    var pos =this.body.position;
    image(this.image,pos.x,pos.y, 80, 30);
  }
};
