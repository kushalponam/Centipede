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
function Draw(){
	context.clearRect(0,0,WIDTH,HEIGHT);
	context.fillStyle = "#500";
	context.fillText(""+textX+" "+textY,textX,textY);
}

function DebugLog(debugtext){
	document.getElementById("debug").innerHTML = debugtext;
}

