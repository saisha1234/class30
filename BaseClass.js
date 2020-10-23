class BaseClass {
    constructor(x, y,width,height,angle) {
      var options = {
        'density':1.0,
        'friction': 1.2,
        'restitution':0.8
      };
      this.body = Bodies.rectangle(x, y,width,height, options);
      this.width = width;
      this.height = height;
      World.add(world, this.body);
      this.image=loadImage("sprites/base.png");
    };
    display(){
      var pos = this.body.position;
      
      var angle = this.body.angle;
  
      push();
      translate(pos.x, pos.y);
      rotate(angle);
      
      imageMode(CENTER)
      image(this.image,0, 0, this.width, this.height);
      pop();
    };
  };   