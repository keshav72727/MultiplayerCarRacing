var background_image;
var gameState = 0;
var playerCount = 0;
var database;
var form,player,game;
var game;
var allPlayers;

function setup(){
  createCanvas(400,400);
  database = firebase.database();

  game = new Game();
  game.getState();
  game.start();
  
  
}

function draw(){
  background("white");
  
  if (playerCount === 4){
    game.update(1);
  }
  if (gameState === 1){
    clear();
    game.play()
  }
}


