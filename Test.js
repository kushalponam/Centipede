// JavaScript Document
function MovableBody(i_pos_x,i_pos_y,image){
	
	this.Init = function(){
		console.log(this.firstName+"Init");
		this.pos_x = i_pos_x;
		this.pos_y = i_pos_y;
		base_Image = new Image();
		base_Image.src = image;
	}
	
	this.update = function(){
	  
	  if(keydown.right) this.pos_x += 1;
	  if(keydown.left) this.pos_x -= 1;
	  if(keydown.up) this.pos_y += 1;
	  if(keydown.down) this.pos_y -= 1;
	  	
	}
	
	this.draw = function(){
		context.drawImage(base_Image,this.pos_x,this.pos_y,100,100);
	}
	
}