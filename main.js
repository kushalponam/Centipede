// JavaScript Document

var canvas,context;
var WIDTH = 1024; 
var HEIGHT = 800;
var FPS = 60;

function SetUpCanvas(){
canvas = document.getElementById("c");
context = canvas.getContext('2d');
canvas.height = HEIGHT;
canvas.width = WIDTH;
canvas.style.left = "500px";
canvas.style.top = "100px";
canvas.style.position = "absolute";
}

function InitGame(){
	SetUpCanvas();
   //Car.Init();	
   var myBody = new Body("Bad234","Ass",'unicorn.png');
   console.log(myBody.firstName);
   
}

setInterval(function(){
	Update();
	Draw();
},1000/FPS);

var textX=500,textY = 50;

function Update(){
    textX+=1;
	//textY+=1;
	
}
var xv = 0;
var yv = 0;
var xpos = 200;
var ypos = 200;

var keys = [];

var keyPressed = function() { 
  keys[keyCode] = true;
};
 
var keyReleased = function() { 
  keys[keyCode] = false; 
};

function Draw(){
	context.clearRect(0,0,WIDTH,HEIGHT);
	//context.fillStyle = "#500";
	//context.fillText(""+textX+" "+textY,textX,textY);
	 background(0, 0, 0);
	fill(255, 255, 255); //fill white
    ellipse(xpos, ypos, 30, 30); //moves the circle
    if (keyIsPressed && keys[UP]) { //this checks if up arrow is pressed
        yv = yv - 1;
    }
    if (keyIsPressed && keys[DOWN]) {
        yv = yv + 1;
    }
    if (keyIsPressed && keys[LEFT]) {
        xv = xv - 1;
    }
    if (keyIsPressed && keys[RIGHT]) {
        xv = xv + 1;
    }
    xv = xv * 0.9; //slowing it down
    yv = yv * 0.9;
    xpos += xv; //setting the positions to the positions + movement
    ypos += yv;
	
	
}

function DebugLog(debugtext){
	document.getElementById("debug").innerHTML = debugtext;
}

