//set up the playing space dimensions
var gameWidth = 600,
	gameHeight = 250,
	timePerFrame = 33, //this equals 30 fps... Not sure why.
	gameFont = "bold 20px sans-serif"; 

//set up preloading
var preloadingText = "Loading...",
	preloadingTextX = 250,
	preloadingTextY = 100;

//game over
var gameOverText = "Game Over"
	gameOverX = 250;
	gameOverY = 100;

//bike image variables
var bikeImage = "Bike.png";

var rockImage = "rock.png";
	
var floorImage = "floor.png";

var bikeImageWidth = 34,
	bikeImageHeight = 25,
	bikeImageStartX = 100,
	bikeImageStartY = 100;
	imgStartX = 100;
	imgStartY = 100;
	spriteWidth = 100;
	
var rockWidth = 20;
	rockHeight = 20;
	rockStartX = 600;
	rockStartY = bikeImageStartX + bikeImageHeight - rockHeight;

var floorWidth = 600;
	floorHeight = 8;
	floorStartX = 0;
	floorStartY = bikeImageStartX + bikeImageHeight - floorHeight;
