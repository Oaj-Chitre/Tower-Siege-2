class Box{
    constructor(x, y, width, height, angle) {
        var options = {
            'restitution':0.8,
            'friction':0.8,
            'density':0.8
            
        }
        this.body = Bodies.rectangle(x, y, width, height, options);
        this.width = width;
        this.height = height;
        World.add(world, this.body);
        this.Visiblity = 255;
      }
      display(){
        //console.log(this.body.speed);
        if(this.body.speed < 3){
          var pos =this.body.position;
          rectMode(CENTER);
          rect(pos.x, pos.y, this.width, this.height);
        }
        else{
          World.remove(world, this.body);
          
        }
      }
    }