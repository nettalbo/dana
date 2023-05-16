let Darumad;
let face = "Dana&Netta \n Best friend forever \n+ \n";
function preload() {
 Darumad = loadFont("ClashDisplay.ttf");
}
function setup() {
 createCanvas(500, 500);
}
function draw() {
 background(255,85,90,60);
 fill(0);
 textFont(Darumad);
 textSize(40);
 textAlign(CENTER, CENTER);
 text(face, mouseX, mouseY);
}