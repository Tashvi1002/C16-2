var box, box1

function setup() 
{
  createCanvas(400, 400);
  box= new Box()
  box1= new Box()
}

function draw() 
{
  background(220);
  box.display()
  box.setSpeed(2)

  box1.display()
  box1.setWidth()
}

