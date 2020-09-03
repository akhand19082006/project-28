class Tree
{
	constructor(x,y,w,h)
	{
		var options={
			isStatic:true			
			}
		this.x=x;
		this.y=y;
		this.w=w
		this.h=h
        this.body=Bodies.rectangle(x, y, w, h , options);
        this.image=loadImage("tree.png")
 		World.add(world, this.body);

	}
	display()
	{
			
			var treePos=this.body.position;
			push()
			translate(treePos.x, treePos.y);
			imageMode(CENTER)
			image(this.image,0,0,this.w, this.h);
			pop()
			
	}

}