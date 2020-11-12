class Tree {
    constructor(x,y,width,height){
    var options={
        isStatic:true,
        restitution:0,
        friction:1,
        density:1.2
    }
  
    this.x=x
    this.y=y
    this.width=350
    this.height=550

    this.body=Bodies.rectangle(this.x,this.y,this.width,this.height)
    World.add(world, this.body);

    this.image = loadImage("images/tree.png");


    }
    display()
	{    
		var treepos=this.body.position;
			push()
			translate(treepos.x, treepos.y);
		   rectMode(CENTER)	
		   fill(255)
			imageMode(CENTER)		
			image(this.image,0,0,this.width,this.height);
		
			
			//ellipse(0,0,this.r, this.r);
			pop()
			
	}
}