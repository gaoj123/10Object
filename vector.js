var clearButton=document.getElementById("clear")
var slate=document.getElementById("screen");

var clear=function(e){
    while(slate.hasChildNodes()){
	slate.removeChild(slate.childNodes[0]);
    }
}

var createCircle=function(x,y){
    var c={
	cx:x,
	cy:y,
	r:10,
	fill:"red",
	circle: document.createElementNS("http://www.w3.org/2000/svg", "circle"),
	remove:function(){
	    slate.removeChild(this);  
	},
	action:function(e){
	    a=e.target;
	    if (a.getAttribute("fill")=="red"){
		a.setAttribute("fill","purple");
	    }
	    else{
		this.remove();
		ranX=Math.floor(Math.random()*481)+10; //generates random cors for new circle
		ranY=Math.floor(Math.random()*481)+10;
		b=createCircle(ranX, ranY);
		b.addToSlate();
	    }
	    e.stopPropagation();
	},
	addToSlate:function(){
	    cir=this.circle;
	    cir.setAttribute("cx",this.cx);
	    cir.setAttribute("cy",this.cy);
	    cir.setAttribute("r",10);
	    cir.setAttribute("fill","red");
	    slate.appendChild(cir);
	    cir.addEventListener("click",this.action);
	}
    };
    return c;
}

var circle=function(e){
    mouseX=e.offsetX;
    mouseY=e.offsetY;
    a=createCircle(mouseX,mouseY);
    a.addToSlate();
}

var draw=function(e){
    circle(e)
}

slate.addEventListener("click",draw);
clearButton.addEventListener("click",clear);
