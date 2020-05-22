const { Engine, World, Bodies, Body, Mouse, MouseConstraint, Constraint, Composite, Detector } = Matter;

var engine;
var matrix = [];
var a1, b1, d1;

function setup() {
  createCanvas(800,400);
  
  engine = Engine.create();
  world = engine.world;

}

function draw() {
  Engine.update(engine);

  background(0);  

  a1 = random(0, 800);
  b1 = random(0, 400);
  d1 = random(10, 15);

  matrix.push(new RainDropLetters(a1, b1, d1, d1));
  matrix.push(new RainDropNumbers(a1, b1, d1, d1));
  matrix.push(new RainDropSymbols(a1, b1, d1, d1));

  for(var i = 0; i < matrix.length; i++){
    matrix[i].display();
  }
  
  drawSprites();
}