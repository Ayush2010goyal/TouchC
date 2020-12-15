var mouse_event ="empty";
var last_position_of_x , last_position_of_y;

var canvas= document.getElementById("my_canvas");
ctx=canvas.getContext("2d");
color="black";
Width_Of_Line=1;

 var width =  screen.width;
 new_width=screen.width-70;
 new_height=screen.height-300;

 if (width<992){
     document.getElementById("my_canvas").width=new_width;
     document.getElementById("my_canvas").height=new_height;
    document.body.style.overflow= "hidden";

 }

canvas.addEventListener("touchstart",my_touchstart);

function my_touchstart(e){
    color=document.getElementById("color").value;
    console.log("my_touchstart");
    Width_Of_Line=document.getElementById("widthline").value;

    last_position_of_x=e.touches[0].clientX-canvas.offsetLeft;
    last_position_of_y=e.touches[0].clientY-canvas.offsetTop;

}

canvas.addEventListener("touchmove",my_touchmove);

function my_touchmove(e){
    current_x=e.touches[0].clientX-canvas.offsetLeft;
    current_y=e.touches[0].clientY-canvas.offsetTop;
    console.log("my_touchmove")

    ctx.beginPath();
    ctx.strokeStyle=color;
    ctx.lineWidth=Width_Of_Line;
    console.log("Last position of x and y coordinates = ");
    console.log("x = " + last_position_of_x + "y = " + last_position_of_y);

    ctx.moveTo(last_position_of_x,last_position_of_y);
    console.log("Current position of x and y coordinates = ");
    console.log("x = " + current_x + "y = " + current_y);
    
    ctx.lineTo(current_x,current_y);
    ctx.stroke();

last_position_of_x=current_x
last_position_of_y=current_y
}

canvas.addEventListener("mousedown",my_mousedown);

function my_mousedown(e){
    color=document.getElementById("color").value;
    console.log(color);
    Width_Of_Line=document.getElementById("widthline").value;
    
    mouse_event="mousedown";
}

canvas.addEventListener("mousemove",my_mousemove);

function my_mousemove(e){
current_x=e.clientX-canvas.offsetLeft;
current_y=e.clientY-canvas.offsetTop;

if (mouse_event=="mousedown"){
    ctx.beginPath();
    ctx.strokeStyle=color;
    ctx.lineWidth=Width_Of_Line;
    console.log("Last position of x and y coordinates = ");
    console.log("x = " + last_position_of_x + "y = " + last_position_of_y);

    ctx.moveTo(last_position_of_x,last_position_of_y);
    console.log("Current position of x and y coordinates = ");
    console.log("x = " + current_x + "y = " + current_y);
    
    ctx.lineTo(current_x,current_y);
    ctx.stroke();
}
last_position_of_x=current_x
last_position_of_y=current_y
}

canvas.addEventListener("mouseleave",my_mouseleave);

function my_mouseleave(e){
    mouse_event="mouseleave";
}

canvas.addEventListener("mouseup",my_mouseup);

function my_mouseup(e){
    mouse_event="mouseup";
}

function ClearArea(){
    ctx.clearRect(0,0,canvas.width,canvas.height);
}