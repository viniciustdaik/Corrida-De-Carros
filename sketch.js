var canvas;
var backgroundImage, car1_img, car2_img, track;
var fuelImage, powerCoinImage, lifeImage;
var obstacle1Image, obstacle2Image;
var database, gameState;
var form, player, playerCount;
var allPlayers, car1, car2, fuels, powerCoins, obstacles;
//declarar uma var para a imagem de explosão
var boomimg;

var cars = [];

function preload() {
  backgroundImage = loadImage("./assets/planodefundo.png");
  car1_img = loadImage("../Corrida-De-Carros/assets/car1.png");
  car2_img = loadImage("../Corrida-De-Carros/assets/car2.png");
  track = loadImage("../Corrida-De-Carros/assets/track.jpg");
  fuelImage = loadImage("./assets/fuel.png");
  powerCoinImage = loadImage("./assets/goldCoin.png");
  obstacle1Image = loadImage("./assets/obstacle1.png");
  obstacle2Image = loadImage("./assets/obstacle2.png");
  lifeImage = loadImage("./assets/life.png");
  //carregar a imagem de explosão
  boomimg = loadImage("./assets/boom.png");
}

function setup() {
  canvas = createCanvas(windowWidth, windowHeight);
  database = firebase.database();
  game = new Game();
  game.getState();
  game.start();
}

function draw() {
  background(backgroundImage);
  if (playerCount === 2) {
    game.update(1);
  }

  if (gameState === 1) {
    game.play();
  }

  if (gameState === 2) {
    game.showLeaderboard();
    //Final
    game.end();
  }
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}
