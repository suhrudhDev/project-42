var Hour,Minute,Seconds
var scAngle,hrAngle,minAngle


function setup() {
  createCanvas(400,400);

  
  angleMode(DEGREES);
}

function draw() {
  background(0,0,0);
  translate(200,200);
  rotate(-90);
  Hour=hour();
  Minute=minute();
  Seconds=second();

  scAngle=map(Seconds,0,60,0,360);
  minAngle=map(Minute,0,60,0,360);
  hrAngle=map(Hour%12,0,12,0,360);

  push(); 
  rotate(scAngle);
  stroke("blue");
  strokeWeight(7);
  line(0,0,120,0)
  pop();
  push();
  rotate(minAngle);
  stroke("red");
  strokeWeight(7);
  line(0,0,90,0)
  pop();
  push();
  rotate(hrAngle);
  stroke("cyan");
  strokeWeight(7);
  line(0,0,70,0)
  pop();


  strokeWeight(10);
  noFill();
  stroke("blue")
  arc(0,0,300,300,0,scAngle)

  stroke("red")
  arc(0,0,280,280,0,minAngle)

  stroke("cyan")
  arc(0,0,260,260,0,hrAngle)
}