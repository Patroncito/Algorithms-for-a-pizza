var partes = 2;
let input;
let button;
let circPuntoPendiente;
let circBresenham;
let circDDA;

function setup() {
  createCanvas(windowWidth, windowHeight);
  
  input = createInput();
  input.position(20, 20);
  button = createButton('press');
  button.position(input.x + input.width, 20);
  button.mousePressed(updateSlices);

  circPuntoPendiente = new PuntoPendiente(200,200,100);
  circBresenham = new Bresenham(500,200,100);
  circDDA = new Daa(800,200,100);
}

function draw() {
  background(252);

  circPuntoPendiente.draw();
  circBresenham.draw();
  circDDA.draw();
 
}

function updateSlices(){
  partes = int(input.value());
}
