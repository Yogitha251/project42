var hr, mn, sc
var scAngle, hrAngle, mnAngle





function setup() {
  createCanvas(800,400);
 // createSprite(400, 200, 50, 50);
 //engine = Engine.create();
   // world = engine.world;
   angleMode(DEGREES)
}

function draw() {
  background(255,255,255);  
  //Engine.update(engine);

  

  var hr=hour();
  var mn= minute();
  var sc= second();

translate(400,400);
rotate(-90)

  scAngle = map( sc,0,60,0,360);
  hrAngle = map( hr%12,0,12,0,360);
  mnAngle = map( mn,0,60,0,360);

  push()
  rotate(hrAngle);
  stroke("green");
  line(0,0,100,0);
  strokeWeight(7);
  pop();

  push()
  rotate(mnAngle);
  stroke("yellow");
  line(0,0,150,0);
  strokeWeight(7);
  pop();

  push()
  rotate(scAngle);
  stroke("blue");
  line(0,0,200,0);
  strokeWeight(7);
  pop();

  strokeWeight(7)
  stroke("green")
  arc(0,0,605,605,0,scAngle);

  stroke("blue")
arc(0,0,630,630,0,mnAngle);

stroke("yellow")
arc(0,0,655,655,0,hrAngle);
  //drawSprites();
}