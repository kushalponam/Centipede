// JavaScript Document
var Car = {
	name:"Toyota",
	Init: function(){
		base_Image = new Image();
		base_Image.src = 'unicorn.png';
		base_Image.onload = function(){
			context.drawImage(base_Image,100,100);
			console.log(Car.model);
		}
	}
};

function Body(first,last,image){
	this.firstName = first;
	this.lastName = last;
	base_Image = new Image();
	base_Image.src = image;
	base_Image.onload = function(){
		context.drawImage(base_Image,0,0,100,100);
	}
	
}