// JavaScript Document
function Bullet(i_pos_x,i_pos_y,image){
	
	this.Init = function(){
		this.temp_Image = new Image();
		this.temp_Image.src =image;
		this.x =i_pos_x;
		this.y=i_pos_y;
	}
	this.update = function(){
	  if(keydown.space) 
	 {
		 
		 this.x = this.pos_x ;
    	 this.y = this.pos_y -1;
		 //this.temp_Image = new Image();
		 //this.temp_Image.src = 'arrow.png';
		 //this.temp_Image.onload=function(){
			 //console.log(5+6);
		// document.getElementById("c").getContext('2d').drawImage(this.temp_Image,this.x,this.y,100,100);
		 //};
	 }
	}
	this.draw = function(){
		context.drawImage(this.temp_Image,this.x,this.y,100,100);	
		//context.drawImage(this.base_Image,this.pos_x,this.pos_y,100,100);
	}
}