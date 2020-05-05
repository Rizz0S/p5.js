
let img;
let colors;

function preload() {
  img = loadImage('test.jpg');
}

function setup() {
  // put setup code here
  image(img, 0, 0, width, height);
  img.loadPixels();
  createCanvas(500, 500);
}

function draw() {
  // put drawing code here
  const colors = img.colorQuantize(3);
  for (let i = 0; i < colors.length; i++) {
    fill(colors[i]);
    ellipse(i * 50 + 50, 250, 50);
  }
  colorObjTest = {r: 234, g: 22, b: 54};
  let {r, g, b} = colorObjTest;
  colorInst = color(r, g, b);
  console.log(colorInst)
}