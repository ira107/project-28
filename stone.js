class Stone
{
	constructor(x,y)
	{
		var options={
            'density':1.5,
            'friction':1.0,
            'restitution':0.5
      }
        
      this.body=Bodies.rectangle(x, y,50,50, options)
        this.width=50;
		this.height=50;
        this.stoneIMG = loadImage("images/stone.png");
       
		World.add(world, this.body);
    }

	display()
	{    
        var pos=this.body.position;
        
        var angle = this.body.angle;
			push()
            translate(pos.x, pos.y);
            rotate(angle)
		  	imageMode(CENTER)		
            image(this.stoneIMG,0,0,this.width,this.height);
            
            
		
			pop()
			
	}

}