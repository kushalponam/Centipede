// JavaScript Document

var canvas,context;
var WIDTH = 1024; 
var HEIGHT = 720;
var FPS = 60;
var player;

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
	player = new MovableBody(0,0,'unicorn.png');
	player.Init();	  
}

setInterval(function(){
	Update();
	Draw();
},1000/FPS);

function Update(){
 player.update();
}
function Draw(){
	context.clearRect(0,0,WIDTH,HEIGHT);
	player.draw();
}

function DebugLog(debugtext){
	document.getElementById("debug").innerHTML = debugtext;
}
