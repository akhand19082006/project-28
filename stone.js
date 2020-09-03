class Stone
{
	constructor(x,y,r)
	{
		var options={
            isStatic:false,
            friction:1,
            density:1.2,
            restitution:0
			}
		this.x=x;
		this.y=y;
	this.r=r;
        this.body=Bodies.circle(x, y, r, options);
        this.image=loadImage("stone.png")
 		World.add(world, this.body);

	}
	display()
	{
			
			var treePos=this.body.position;		
			push()
			translate(treePos.x, treePos.y);
			ellipseMode(RADIUS)
			image(this.image,0,0,this.r, this.r);
			pop()
			
	}

}