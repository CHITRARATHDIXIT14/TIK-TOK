
 var hr 
 var mn 
 var sc 
var hrang,manang,scang

function setup() {
  createCanvas(800,400);
  
}


function draw() {
  background(0);  


   hr = hour();
   mn = minute();
   sc = second();

   push();
   rotate(hrang)
   stroke(0,0,255)
   line(40,40,40,40)
  pop();


  drawSprites();
}