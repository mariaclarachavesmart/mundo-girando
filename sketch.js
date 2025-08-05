function setup() {
  createCanvas(1920, 1080, WEBGL); //plano 3D
  terra=loadImage('terra.jpg')
}

function draw() {
  background(05, 90, 15); //cor de fundo
  rotateY(millis()/2000); // rotação da terra
  texture(terra); //textura da terra, imagem.
  sphere(190, 900); //esfera 3D
  
  
}
