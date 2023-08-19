const canvas = document.getElementById("canvas");
let context = canvas.getContext("2d");
canvas.addEventListener("touchstart", start, false);
canvas.addEventListener("touchmove", draw, false);
canvas.addEventListener("mousedown", start, false);
canvas.addEventListener("mousemove", draw, false);
canvas.addEventListener("touchend", stop, false);
canvas.addEventListener("mouseup", stop, false);
canvas.addEventListener("mouseout", stop, false);

const canvas2 = document.getElementById("canvas2");
let context2 = canvas2.getContext("2d");
canvas2.addEventListener("touchstart", start2, false);
canvas2.addEventListener("touchmove", draw2, false);
canvas2.addEventListener("mousedown", start2, false);
canvas2.addEventListener("mousemove", draw2, false);
canvas2.addEventListener("touchend", stop2, false);
canvas2.addEventListener("mouseup", stop2, false);
canvas2.addEventListener("mouseout", stop2, false);


let draw_color = "black";
let draw_width = "2";


let is_drawing = false;
let restore_array = [];
let index = -1;

let is_drawing2 = false;
let restore_array2 = [];
let index2 = -1;


window.onload = function() {
	a = localStorage.getItem("lastname");
	if(a=='' || a==null || a==undefined){
		localStorage.setItem("lastname", "Smith");
		location.reload();
	}else{
		localStorage.setItem("lastname", "");
	}
	var canvas = document.getElementById("canvas");
	canvas.width = 300;
	canvas.height = 188;
	var ctx = canvas.getContext("2d");
	var img = document.getElementById("scream");
	ctx.drawImage(img, 0, 0);
	
	var canvas2 = document.getElementById("canvas2");
	canvas2.width = 300;
	canvas2.height = 188;
	var ctx2 = canvas2.getContext("2d");
	var img2 = document.getElementById("scream2");
	ctx2.drawImage(img2, 0, 0);
	
};

function change_color(element){
	draw_color = element.style.background;
	rgb = draw_color;
	let sep = rgb.indexOf(",") > -1 ? "," : " ";
	rgb = rgb.substr(4).split(")")[0].split(sep);

	let r = (+rgb[0]).toString(16),
	 g = (+rgb[1]).toString(16),
	 b = (+rgb[2]).toString(16);

	if (r.length == 1)
		r = "0" + r;
	if (g.length == 1)
		g = "0" + g;
	if (b.length == 1)
		b = "0" + b;
	
	draw_color = "#" + r + g + b;
	$("#c_p").val(draw_color);
	var elementToChange = document.getElementsByClassName("canvas")[0];
	elementToChange.style.cursor = "url('img/pen.png'), auto";
}

function start(){
	is_drawing = true;
	context.beginPath();
	context.moveTo(event.clientX - canvas.offsetLeft,
					event.clientY - canvas.offsetTop);
	event.preventDefault();
}

function start2(){
	is_drawing2 = true;
	context2.beginPath();
	context2.moveTo(event.clientX - canvas2.offsetLeft,
					event.clientY - canvas2.offsetTop);
	event.preventDefault();
}

function start3(){
	is_drawing3 = true;
	context3.beginPath();
	context3.moveTo(event.clientX - canvas3.offsetLeft,
					event.clientY - canvas3.offsetTop);
	event.preventDefault();
}

function start4(){
	is_drawing4 = true;
	context4.beginPath();
	context4.moveTo(event.clientX - canvas4.offsetLeft,
					event.clientY - canvas4.offsetTop);
	event.preventDefault();
}

function start5(){
	is_drawing5 = true;
	context5.beginPath();
	context5.moveTo(event.clientX - canvas5.offsetLeft,
					event.clientY - canvas5.offsetTop);
	event.preventDefault();
}

function start6(){
	is_drawing6 = true;
	context6.beginPath();
	context6.moveTo(event.clientX - canvas6.offsetLeft,
					event.clientY - canvas6.offsetTop);
	event.preventDefault();
}

function draw(event) {	
	if(is_drawing){
		context.lineTo(event.clientX - canvas.offsetLeft,
					   event.clientY - canvas.offsetTop);
		context.strokeStyle = draw_color;
		context.lineWidth = draw_width;
		context.lineCap = "round";
		context.lineJoin = "round";
		context.stroke();
	}
	event.preventDefault();
}

function draw2(event) {	
	if(is_drawing2){
		context2.lineTo(event.clientX - canvas2.offsetLeft,
					   event.clientY - canvas2.offsetTop);
		context2.strokeStyle = draw_color;
		context2.lineWidth = draw_width;
		context2.lineCap = "round";
		context2.lineJoin = "round";
		context2.stroke();
	}
	event.preventDefault();
}

function stop(event) {
	if(is_drawing){
		context.stroke();
		context.closePath();
		is_drawing = false;
	}
	event.preventDefault();
	if(event.type != 'mouseout'){
		restore_array.push(context.getImageData(0, 0, canvas.width, canvas.height));
		index += 1;
	}
}
function stop2(event) {
	if(is_drawing2){
		context2.stroke();
		context2.closePath();
		is_drawing2 = false;
	}
	event.preventDefault();
	if(event.type != 'mouseout'){
		restore_array2.push(context2.getImageData(0, 0, canvas2.width, canvas2.height));
		index2 += 1;
	}
}

function clear_canvas() {
	var canvas = document.getElementById("canvas");
	var ctx = canvas.getContext("2d");
	var img = document.getElementById("scream");
	ctx.drawImage(img, 0, 0);
	restore_array=[];
	index=-1;
}


function clear_canvas2() {
	var canvas2 = document.getElementById("canvas2");
	var ctx2 = canvas2.getContext("2d");
	var img2 = document.getElementById("scream2");
	ctx2.drawImage(img2, 0, 0);
	restore_array2=[];
	index2=-1;
}


function undo_last() {
	if(index<=0){
		clear_canvas();
	}else{
		index -= 1;
		restore_array.pop();
		context.putImageData(restore_array[index],0,0);
	}
}

function undo_last2() {
	if(index2<=0){
		clear_canvas2();
	}else{
		index2 -= 1;
		restore_array2.pop();
		context2.putImageData(restore_array2[index2],0,0);
	}
}


function erase() {
	draw_color = 'white';
	draw_width = "20";
	var elementToChange = document.getElementsByClassName("canvas")[0];
	elementToChange.style.cursor = "url('img/eraser.png'), auto";
}

function pen() {
	draw_color = 'black';
	draw_width = "2";
	var elementToChange = document.getElementsByClassName("canvas")[0];
	elementToChange.style.cursor = "url('img/pen.png'), auto";
}
 
function play(){
	var audio = document.getElementById('audio3');
	audio.play();
}

function play2(){
	var audio = document.getElementById('audio4');
	audio.play();
}

