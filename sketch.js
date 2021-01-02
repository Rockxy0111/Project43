
var scAngle;
function setup() {
  createCanvas(600,600);
  

 

}

function draw() {
  background(0);  
  angleMode(DEGREES);


 
 
  sc = second();
  mn = minute();
  hr = hour()


  scAngle=map(sc,0,60,0,360)
  mnAngle=map(mn,0,60,0,360)
  hrAngle=map(hr,0,24,0,360)


  push();
  translate(300,300);
  rotate(scAngle);
  stroke(255,0,0); 
  strokeWeight(7);
  line(0,0,100,0);
  pop();

  push();
  translate(300,300);
  rotate(mnAngle);
  stroke("green"); 
  strokeWeight(7);
  line(0,0,80,0);
  pop();

  push();
  translate(300,300);
  rotate(hrAngle);
  stroke("blue"); 
  strokeWeight(7);
  line(0,0,60,0);
  pop();
  drawSprites();
}