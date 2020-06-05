
//game space variables
var space = document.getElementById("gameSpace");
	space.width = gameWidth;
	space.height = gameHeight;
	var ctx = space.getContext ("2d");
	ctx.fillStyle = "black";
	ctx.font = gameFont;

//preloading mechanics
var bike =new Image();
bike.ready = false;
bike.onload = setAssetReady;
bike.src = bikeImage;

var rock =new Image();
rock.ready = false;
rock.onload = setAssetReady;
rock.src = rockImage;

var firstFloor = new Image();
firstFloor.ready = false;
firstFloor.onload = setAssetReady;
firstFloor.src = floorImage;

var secondFloor = new Image();
secondFloor.ready = false;
secondFloor.onload = setAssetReady;
secondFloor.src = floorImage


function setAssetReady() {
	this.ready=true;
}

//loading page

	ctx.fillRect (0, 0, space.width, space.height);
	ctx.fillStyle = "#d9d9d9";
	ctx.fillText (preloadingText, preloadingTextX, preloadingTextY);
	var preloader = setInterval(preloading, timePerFrame);
	var gameloop, currX, currY;

function preloading()
{
	if (bike.ready) {
		clearInterval(preloader);
		
		gameloop = setInterval(update, timePerFrame);
	}
}


//Game Loop
var currX = imgStartX;
var currY = imgStartY;
var gravitySpeed = 0;
var gameSpeed = 2;
var rockX = rockStartX;
var rockY = rockStartY-rockHeight;
var firstFloorX = floorStartX;
var secondFloorX = floorStartX + floorWidth;



var gameloop = setInterval(update, timePerFrame);
var gameOver = false;


function update(){

	//clear board
	ctx.fillRect (0, 0, space.width, space.height);
	ctx.fillStyle = "#d9d9d9";
	
	//draw bike
	ctx.drawImage(bike, currX, currY, bikeImageWidth, bikeImageHeight);
	
	//draw Rock
	ctx.drawImage(rock, rockX, rockStartY, rockWidth, rockHeight);
	
	//draw Floor
	ctx.drawImage(firstFloor, firstFloorX, floorStartY, floorWidth, floorHeight);
	ctx.drawImage(secondFloor, secondFloorX, floorStartY, floorWidth, floorHeight);
	
	mechanics();
	
	
	//death
	if (gameOver == true){
		ctx.fillRect(0, 0, space.width, space.height);
		ctx.fillStyle = "black";
		ctx.fillText(gameOverText, gameOverX, gameOverY);
	}
}


//Game Mechanics
function mechanics(){
	this.gravity = 0.02;
	if (currY < imgStartY){
		gravitySpeed += this.gravity;
		currY = currY + gravitySpeed;
	}
	if (currY > imgStartY){
		currY = imgStartY;
	}
	if (currY == imgStartY){
		gravitySpeed = 0;
	}
	/*if (currX <= 0){
		currX = 0;
	}
	if (currX >= gameWidth - bikeImageWidth){
		currX = gameWidth - bikeImageWidth;
	}*/
	rockX = rockX - gameSpeed;
	if (rockX <= 0 - rockWidth){
		rockX = gameWidth
	}
	firstFloorX = firstFloorX - gameSpeed;
	if (firstFloorX <= 0 - floorWidth){
		firstFloorX = gameWidth;
	}
	secondFloorX = secondFloorX - gameSpeed;
	if (secondFloorX <= 0 - floorWidth){
		secondFloorX = gameWidth;
	}
	if(currY >= 80 && currX+bikeImageWidth>rockX){
		gameOver=true;
	}
	else{
		return;
	}
}
function checkKey(){
	this.jump = 32;
	this.right = 39;
	this.left = 37;
	this.hop = 38;
	var i = 0; 
	
	function onJump(){
		setTimeout(function(){
			currY=currY - 1;
			i++;
			if(i<30){
				onJump();
			}
		}, 1)
	}
	if(event.keyCode == this.jump && currY == 100){
		onJump();
	} else{
		return;
	}
	/*if (event.keyCode == this.right){
		currX = currX + 10;
		return;
		
	}
	if (event.keyCode == this.left){
		currX = currX - 10;
		return;
	}
	if(event.keyCode == this.hop){
		if (currY == imgStartY) {
		currY = currY - 15;
		}
		else{
			return;
		}
	}*/
	update(); 
}
document.onkeydown = checkKey;

