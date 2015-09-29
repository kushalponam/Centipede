// JavaScript Document
var canvas,context;
var WIDTH = 1024; 
var HEIGHT = 720;
var FPS = 30;
var player;

var obj1;
var obj2;

function SetUpCanvas(){
canvas = document.getElementById("c");
context = canvas.getContext('2d');
canvas.height = HEIGHT;
canvas.width = WIDTH;
canvas.style.left = "0px";
canvas.style.top = "0px";
canvas.style.position = "absolute";
canvas.background= "transparent";
}

function InitGame(){
	SetUpCanvas();
	player = new Centipede(500,500,'unicorn.png','unicorn.png');
	
	obj1 = new MovableBody(100,100,'unicorn1.png');
	obj2 = new MovableBody(500,100,'unicorn1.png');
	
	obj1.Init();
	obj2.Init();
	player.Init();
}

setInterval(function(){
	Update();
	Draw();
},1000/FPS);



function Update(){

obj1.update();
//obj2.update();

if(obj1.getBody().Collide(obj2.getBody()))
{
	DebugLog("Hit!");
}else
{
	DebugLog("No Hit!");
}


 player.update();
}

function Draw(){
	context.clearRect(0,0,WIDTH,HEIGHT);

    obj1.draw();
	obj2.draw();
	player.draw();

}

function DebugLog(debugtext){
	document.getElementById("debug").innerHTML = debugtext;
}
