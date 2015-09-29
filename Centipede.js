// JavaScript Document

Node = function(){
	
	this.pos_x = 0;
	this.pos_y = 0;
	this.lastpos_x = 0;
	this.lastpos_y = 0;
	this.base_Image=new Image();
	
	
}

function Centipede(i_posx,i_posy,headimage,tailimage){
	var width = 50;
	var height = 50;
	var Nodes = [];
	this.Init = function(){
		
		for(i=0; i<5 ;i++)
		{
			Nodes[i] = new Node();
		}
		Nodes[0].base_Image.src=headimage;
		Nodes[0].pos_x = i_posx;
		Nodes[0].pos_y = i_posy;
		for(i=1;i<5;i++)
		{
			Nodes[i].base_Image.src=tailimage;
			Nodes[i].pos_x = Nodes[i-1].pos_x + 20;
			Nodes[i].pos_y = Nodes[i-1].pos_y;
			
		}
		
	}
	
	this.update = function(){

		 if(keydown.d) {
			 Nodes[0].lastpos_x =  Nodes[0].pos_x;
			 Nodes[0].lastpos_y =  Nodes[0].pos_y;
			 
			 Nodes[0].pos_x += (1*(1000/30));
			 for(i=1;i<5;i++)
			  {
				Nodes[i].lastpos_x = Nodes[i].pos_x;
				Nodes[i].lastpos_y = Nodes[i].pos_y;
				Nodes[i].pos_x = Nodes[i-1].lastpos_x;
				Nodes[i].pos_y = Nodes[i-1].lastpos_y;
			  }

		 }else if(keydown.w) {
			 Nodes[0].lastpos_x =  Nodes[0].pos_x;
			 Nodes[0].lastpos_y =  Nodes[0].pos_y;
		
			 Nodes[0].pos_y -= (1*(1000/30));
			  for(i=1;i<5;i++)
				{
				Nodes[i].lastpos_x = Nodes[i].pos_x;
				Nodes[i].lastpos_y = Nodes[i].pos_y;
				Nodes[i].pos_x = Nodes[i-1].lastpos_x;
				Nodes[i].pos_y = Nodes[i-1].lastpos_y ;
				}
		 }else if(keydown.s){
			  Nodes[0].lastpos_x =  Nodes[0].pos_x;
			  Nodes[0].lastpos_y =  Nodes[0].pos_y;
			  
			  Nodes[0].pos_y += (1*(1000/30));
			  for(i=1;i<5;i++)
				{
				Nodes[i].lastpos_x = Nodes[i].pos_x;
				Nodes[i].lastpos_y = Nodes[i].pos_y;
				Nodes[i].pos_x = Nodes[i-1].lastpos_x;
				Nodes[i].pos_y = Nodes[i-1].lastpos_y ;
				}
		 }else if(keydown.a)
		 {
			 Nodes[0].lastpos_x =  Nodes[0].pos_x;
			 Nodes[0].lastpos_y =  Nodes[0].pos_y;
			 
			 Nodes[0].pos_x -= (1*(1000/30));
			 for(i=1;i<5;i++)
			  {
				Nodes[i].lastpos_x = Nodes[i].pos_x;
				Nodes[i].lastpos_y = Nodes[i].pos_y;
				Nodes[i].pos_x = Nodes[i-1].lastpos_x;
				Nodes[i].pos_y = Nodes[i-1].lastpos_y;
			  }
			 
			 
			 
		 }
		
		
	}
	
	this.draw = function(){
		
		for(i=0;i<5;i++)
		{
			context.drawImage(Nodes[i].base_Image,Nodes[i].pos_x,Nodes[i].pos_y,width,height);
		}
		
	}
	
	
	
}