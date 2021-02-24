class Rubber {
    constructor(x, y,r) {
      var options = {
          'restitution':0.3,
          'friction':5.0,
          'density':1.0
      }

      this.x=x;
      this.y=y;
      this.r=r;

      this.body=Bodies.circle(this.x, this.y,(this.r-20)/2, options)
      
      
      World.add(world, this.body);
    }
    display(){
      var rpos =this.body.position;
      push();
      translate(rpos.x, rpos.y);
      ellipseMode(CENTER);
      strokeWeight(3);
      stroke("purple");
      fill("darkBlue");
      ellipse(0,0,this.r,this.r)
      pop();
    }
  };
  