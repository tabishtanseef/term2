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

const canvas3 = document.getElementById("canvas3");
let context3 = canvas3.getContext("2d");
canvas3.addEventListener("touchstart", start3, false);
canvas3.addEventListener("touchmove", draw3, false);
canvas3.addEventListener("mousedown", start3, false);
canvas3.addEventListener("mousemove", draw3, false);
canvas3.addEventListener("touchend", stop3, false);
canvas3.addEventListener("mouseup", stop3, false);
canvas3.addEventListener("mouseout", stop3, false);

const canvas4 = document.getElementById("canvas4");
let context4 = canvas4.getContext("2d");
canvas4.addEventListener("touchstart", start4, false);
canvas4.addEventListener("touchmove", draw4, false);
canvas4.addEventListener("mousedown", start4, false);
canvas4.addEventListener("mousemove", draw4, false);
canvas4.addEventListener("touchend", stop4, false);
canvas4.addEventListener("mouseup", stop4, false);
canvas4.addEventListener("mouseout", stop4, false);

const canvas5 = document.getElementById("canvas5");
let context5 = canvas5.getContext("2d");
canvas5.addEventListener("touchstart", start5, false);
canvas5.addEventListener("touchmove", draw5, false);
canvas5.addEventListener("mousedown", start5, false);
canvas5.addEventListener("mousemove", draw5, false);
canvas5.addEventListener("touchend", stop5, false);
canvas5.addEventListener("mouseup", stop5, false);
canvas5.addEventListener("mouseout", stop5, false);

const canvas6 = document.getElementById("canvas6");
let context6 = canvas6.getContext("2d");
canvas6.addEventListener("touchstart", start6, false);
canvas6.addEventListener("touchmove", draw6, false);
canvas6.addEventListener("mousedown", start6, false);
canvas6.addEventListener("mousemove", draw6, false);
canvas6.addEventListener("touchend", stop6, false);
canvas6.addEventListener("mouseup", stop6, false);
canvas6.addEventListener("mouseout", stop6, false);

const canvas7 = document.getElementById("canvas7");
let context7 = canvas7.getContext("2d");
canvas7.addEventListener("touchstart", start7, false);
canvas7.addEventListener("touchmove", draw7, false);
canvas7.addEventListener("mousedown", start7, false);
canvas7.addEventListener("mousemove", draw7, false);
canvas7.addEventListener("touchend", stop7, false);
canvas7.addEventListener("mouseup", stop7, false);
canvas7.addEventListener("mouseout", stop7, false);

const canvas8 = document.getElementById("canvas8");
let context8 = canvas8.getContext("2d");
canvas8.addEventListener("touchstart", start8, false);
canvas8.addEventListener("touchmove", draw8, false);
canvas8.addEventListener("mousedown", start8, false);
canvas8.addEventListener("mousemove", draw8, false);
canvas8.addEventListener("touchend", stop8, false);
canvas8.addEventListener("mouseup", stop8, false);
canvas8.addEventListener("mouseout", stop8, false);

const canvas9 = document.getElementById("canvas9");
let context9 = canvas9.getContext("2d");
canvas9.addEventListener("touchstart", start9, false);
canvas9.addEventListener("touchmove", draw9, false);
canvas9.addEventListener("mousedown", start9, false);
canvas9.addEventListener("mousemove", draw9, false);
canvas9.addEventListener("touchend", stop9, false);
canvas9.addEventListener("mouseup", stop9, false);
canvas9.addEventListener("mouseout", stop9, false);

const canvas10 = document.getElementById("canvas10");
let context10 = canvas10.getContext("2d");
canvas10.addEventListener("touchstart", start10, false);
canvas10.addEventListener("touchmove", draw10, false);
canvas10.addEventListener("mousedown", start10, false);
canvas10.addEventListener("mousemove", draw10, false);
canvas10.addEventListener("touchend", stop10, false);
canvas10.addEventListener("mouseup", stop10, false);
canvas10.addEventListener("mouseout", stop10, false);

const canvas11 = document.getElementById("canvas11");
let context11 = canvas11.getContext("2d");
canvas11.addEventListener("touchstart", start11, false);
canvas11.addEventListener("touchmove", draw11, false);
canvas11.addEventListener("mousedown", start11, false);
canvas11.addEventListener("mousemove", draw11, false);
canvas11.addEventListener("touchend", stop11, false);
canvas11.addEventListener("mouseup", stop11, false);
canvas11.addEventListener("mouseout", stop11, false);

const canvas12 = document.getElementById("canvas12");
let context12 = canvas12.getContext("2d");
canvas12.addEventListener("touchstart", start12, false);
canvas12.addEventListener("touchmove", draw12, false);
canvas12.addEventListener("mousedown", start12, false);
canvas12.addEventListener("mousemove", draw12, false);
canvas12.addEventListener("touchend", stop12, false);
canvas12.addEventListener("mouseup", stop12, false);
canvas12.addEventListener("mouseout", stop12, false);


let draw_color = "black";
let draw_width = "2";


let is_drawing = false;
let restore_array = [];
let index = -1;

let is_drawing2 = false;
let restore_array2 = [];
let index2 = -1;

let is_drawing3 = false;
let restore_array3 = [];
let index3 = -1;

let is_drawing4 = false;
let restore_array4 = [];
let index4 = -1;

let is_drawing5 = false;
let restore_array5 = [];
let index5 = -1;

let is_drawing6 = false;
let restore_array6 = [];
let index6 = -1;

let is_drawing7 = false;
let restore_array7 = [];
let index7 = -1;

let is_drawing8 = false;
let restore_array8 = [];
let index8 = -1;

let is_drawing9 = false;
let restore_array9 = [];
let index9 = -1;

let is_drawing10 = false;
let restore_array10 = [];
let index10 = -1;

let is_drawing11 = false;
let restore_array11 = [];
let index11 = -1;

let is_drawing12 = false;
let restore_array12 = [];
let index12 = -1;


window.onload = function() {
	a = localStorage.getItem("lastname");
	if(a=='' || a==null || a==undefined){
		localStorage.setItem("lastname", "Smith");
		location.reload();
	}else{
		localStorage.setItem("lastname", "");
	}
	var canvas = document.getElementById("canvas");
	canvas.width = 250;
	canvas.height = 52;
	var ctx = canvas.getContext("2d");
	var img = document.getElementById("scream");
	ctx.drawImage(img, 0, 0);
	
	var canvas2 = document.getElementById("canvas2");
	canvas2.width = 250;
	canvas2.height = 52;
	var ctx2 = canvas2.getContext("2d");
	var img2 = document.getElementById("scream2");
	ctx2.drawImage(img2, 0, 0);
	
	var canvas3 = document.getElementById("canvas3");
	canvas3.width = 250;
	canvas3.height = 52;
	var ctx3 = canvas3.getContext("2d");
	var img3 = document.getElementById("scream3");
	ctx3.drawImage(img3, 0, 0);
	
	var canvas4 = document.getElementById("canvas4");
	canvas4.width = 250;
	canvas4.height = 52;
	var ctx4 = canvas4.getContext("2d");
	var img4 = document.getElementById("scream4");
	ctx4.drawImage(img4, 0, 0);
	
	var canvas5 = document.getElementById("canvas5");
	canvas5.width = 250;
	canvas5.height = 52;
	var ctx5 = canvas5.getContext("2d");
	var img5 = document.getElementById("scream5");
	ctx5.drawImage(img5, 0, 0);
	
	var canvas6 = document.getElementById("canvas6");
	canvas6.width = 250;
	canvas6.height = 52;
	var ctx6 = canvas6.getContext("2d");
	var img6 = document.getElementById("scream6");
	ctx6.drawImage(img6, 0, 0);
	
	var canvas7 = document.getElementById("canvas7");
	canvas7.width = 250;
	canvas7.height = 52;
	var ctx7 = canvas7.getContext("2d");
	var img7 = document.getElementById("scream7");
	ctx7.drawImage(img7, 0, 0);
	
	var canvas8 = document.getElementById("canvas8");
	canvas8.width = 250;
	canvas8.height = 52;
	var ctx8 = canvas8.getContext("2d");
	var img8 = document.getElementById("scream8");
	ctx8.drawImage(img8, 0, 0);
	
	var canvas9 = document.getElementById("canvas9");
	canvas9.width = 250;
	canvas9.height = 52;
	var ctx9 = canvas9.getContext("2d");
	var img9 = document.getElementById("scream9");
	ctx9.drawImage(img9, 0, 0);
	
	var canvas10 = document.getElementById("canvas10");
	canvas10.width = 250;
	canvas10.height = 52;
	var ctx10 = canvas10.getContext("2d");
	var img10 = document.getElementById("scream10");
	ctx10.drawImage(img10, 0, 0);
	
	var canvas11 = document.getElementById("canvas11");
	canvas11.width = 250;
	canvas11.height = 52;
	var ctx11 = canvas11.getContext("2d");
	var img11 = document.getElementById("scream11");
	ctx11.drawImage(img11, 0, 0);
	
	var canvas12 = document.getElementById("canvas12");
	canvas12.width = 250;
	canvas12.height = 52;
	var ctx12 = canvas12.getContext("2d");
	var img12 = document.getElementById("scream12");
	ctx12.drawImage(img12, 0, 0);
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

function start7(){
	is_drawing7 = true;
	context7.beginPath();
	context7.moveTo(event.clientX - canvas7.offsetLeft,
					event.clientY - canvas7.offsetTop);
	event.preventDefault();
}

function start8(){
	is_drawing8 = true;
	context8.beginPath();
	context8.moveTo(event.clientX - canvas8.offsetLeft,
					event.clientY - canvas8.offsetTop);
	event.preventDefault();
}

function start9(){
	is_drawing9 = true;
	context9.beginPath();
	context9.moveTo(event.clientX - canvas9.offsetLeft,
					event.clientY - canvas9.offsetTop);
	event.preventDefault();
}

function start10(){
	is_drawing10 = true;
	context10.beginPath();
	context10.moveTo(event.clientX - canvas10.offsetLeft,
					event.clientY - canvas10.offsetTop);
	event.preventDefault();
}

function start11(){
	is_drawing11 = true;
	context11.beginPath();
	context11.moveTo(event.clientX - canvas11.offsetLeft,
					event.clientY - canvas11.offsetTop);
	event.preventDefault();
}

function start12(){
	is_drawing12 = true;
	context12.beginPath();
	context12.moveTo(event.clientX - canvas12.offsetLeft,
					event.clientY - canvas12.offsetTop);
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

function draw3(event) {	
	if(is_drawing3){
		context3.lineTo(event.clientX - canvas3.offsetLeft,
					   event.clientY - canvas3.offsetTop);
		context3.strokeStyle = draw_color;
		context3.lineWidth = draw_width;
		context3.lineCap = "round";
		context3.lineJoin = "round";
		context3.stroke();
	}
	event.preventDefault();
}

function draw4(event) {	
	if(is_drawing4){
		context4.lineTo(event.clientX - canvas4.offsetLeft,
					   event.clientY - canvas4.offsetTop);
		context4.strokeStyle = draw_color;
		context4.lineWidth = draw_width;
		context4.lineCap = "round";
		context4.lineJoin = "round";
		context4.stroke();
	}
	event.preventDefault();
}

function draw5(event) {	
	if(is_drawing5){
		context5.lineTo(event.clientX - canvas5.offsetLeft,
					   event.clientY - canvas5.offsetTop);
		context5.strokeStyle = draw_color;
		context5.lineWidth = draw_width;
		context5.lineCap = "round";
		context5.lineJoin = "round";
		context5.stroke();
	}
	event.preventDefault();
}

function draw6(event) {	
	if(is_drawing6){
		context6.lineTo(event.clientX - canvas6.offsetLeft,
					   event.clientY - canvas6.offsetTop);
		context6.strokeStyle = draw_color;
		context6.lineWidth = draw_width;
		context6.lineCap = "round";
		context6.lineJoin = "round";
		context6.stroke();
	}
	event.preventDefault();
}

function draw7(event) {	
	if(is_drawing7){
		context7.lineTo(event.clientX - canvas7.offsetLeft,
					   event.clientY - canvas7.offsetTop);
		context7.strokeStyle = draw_color;
		context7.lineWidth = draw_width;
		context7.lineCap = "round";
		context7.lineJoin = "round";
		context7.stroke();
	}
	event.preventDefault();
}

function draw8(event) {	
	if(is_drawing8){
		context8.lineTo(event.clientX - canvas8.offsetLeft,
					   event.clientY - canvas8.offsetTop);
		context8.strokeStyle = draw_color;
		context8.lineWidth = draw_width;
		context8.lineCap = "round";
		context8.lineJoin = "round";
		context8.stroke();
	}
	event.preventDefault();
}

function draw9(event) {	
	if(is_drawing9){
		context9.lineTo(event.clientX - canvas9.offsetLeft,
					   event.clientY - canvas9.offsetTop);
		context9.strokeStyle = draw_color;
		context9.lineWidth = draw_width;
		context9.lineCap = "round";
		context9.lineJoin = "round";
		context9.stroke();
	}
	event.preventDefault();
}

function draw10(event) {	
	if(is_drawing10){
		context10.lineTo(event.clientX - canvas10.offsetLeft,
					   event.clientY - canvas10.offsetTop);
		context10.strokeStyle = draw_color;
		context10.lineWidth = draw_width;
		context10.lineCap = "round";
		context10.lineJoin = "round";
		context10.stroke();
	}
	event.preventDefault();
}

function draw11(event) {	
	if(is_drawing11){
		context11.lineTo(event.clientX - canvas11.offsetLeft,
					   event.clientY - canvas11.offsetTop);
		context11.strokeStyle = draw_color;
		context11.lineWidth = draw_width;
		context11.lineCap = "round";
		context11.lineJoin = "round";
		context11.stroke();
	}
	event.preventDefault();
}

function draw12(event) {	
	if(is_drawing12){
		context12.lineTo(event.clientX - canvas12.offsetLeft,
					   event.clientY - canvas12.offsetTop);
		context12.strokeStyle = draw_color;
		context12.lineWidth = draw_width;
		context12.lineCap = "round";
		context12.lineJoin = "round";
		context12.stroke();
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
function stop3(event) {
	if(is_drawing3){
		context3.stroke();
		context3.closePath();
		is_drawing3 = false;
	}
	event.preventDefault();
	if(event.type != 'mouseout'){
		restore_array3.push(context3.getImageData(0, 0, canvas3.width, canvas3.height));
		index3 += 1;
	}
}
function stop4(event) {
	if(is_drawing4){
		context4.stroke();
		context4.closePath();
		is_drawing4 = false;
	}
	event.preventDefault();
	if(event.type != 'mouseout'){
		restore_array4.push(context4.getImageData(0, 0, canvas4.width, canvas4.height));
		index4 += 1;
	}
}
function stop5(event) {
	if(is_drawing5){
		context5.stroke();
		context5.closePath();
		is_drawing5 = false;
	}
	event.preventDefault();
	if(event.type != 'mouseout'){
		restore_array5.push(context5.getImageData(0, 0, canvas5.width, canvas5.height));
		index5 += 1;
	}
}
function stop6(event) {
	if(is_drawing6){
		context6.stroke();
		context6.closePath();
		is_drawing6 = false;
	}
	event.preventDefault();
	if(event.type != 'mouseout'){
		restore_array6.push(context6.getImageData(0, 0, canvas6.width, canvas6.height));
		index6 += 1;
	}
}
function stop7(event) {
	if(is_drawing7){
		context7.stroke();
		context7.closePath();
		is_drawing7 = false;
	}
	event.preventDefault();
	if(event.type != 'mouseout'){
		restore_array7.push(context7.getImageData(0, 0, canvas7.width, canvas7.height));
		index7 += 1;
	}
}
function stop8(event) {
	if(is_drawing8){
		context8.stroke();
		context8.closePath();
		is_drawing8 = false;
	}
	event.preventDefault();
	if(event.type != 'mouseout'){
		restore_array8.push(context8.getImageData(0, 0, canvas8.width, canvas8.height));
		index8 += 1;
	}
}
function stop9(event) {
	if(is_drawing9){
		context9.stroke();
		context9.closePath();
		is_drawing9 = false;
	}
	event.preventDefault();
	if(event.type != 'mouseout'){
		restore_array9.push(context9.getImageData(0, 0, canvas9.width, canvas9.height));
		index9 += 1;
	}
}
function stop10(event) {
	if(is_drawing10){
		context10.stroke();
		context10.closePath();
		is_drawing10 = false;
	}
	event.preventDefault();
	if(event.type != 'mouseout'){
		restore_array10.push(context10.getImageData(0, 0, canvas10.width, canvas10.height));
		index10 += 1;
	}
}
function stop11(event) {
	if(is_drawing11){
		context11.stroke();
		context11.closePath();
		is_drawing11 = false;
	}
	event.preventDefault();
	if(event.type != 'mouseout'){
		restore_array11.push(context11.getImageData(0, 0, canvas11.width, canvas11.height));
		index11 += 1;
	}
}
function stop12(event) {
	if(is_drawing12){
		context12.stroke();
		context12.closePath();
		is_drawing12 = false;
	}
	event.preventDefault();
	if(event.type != 'mouseout'){
		restore_array12.push(context12.getImageData(0, 0, canvas12.width, canvas12.height));
		index12 += 1;
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


function clear_canvas3() {
	var canvas3 = document.getElementById("canvas3");
	var ctx3 = canvas3.getContext("2d");
	var img3 = document.getElementById("scream3");
	ctx3.drawImage(img3, 0, 0);
	restore_array3=[];
	index3=-1;
}


function clear_canvas4() {
	var canvas4 = document.getElementById("canvas4");
	var ctx4 = canvas4.getContext("2d");
	var img4 = document.getElementById("scream4");
	ctx4.drawImage(img4, 0, 0);
	restore_array4=[];
	index4=-1;
}

function clear_canvas5() {
	var canvas5 = document.getElementById("canvas5");
	var ctx5 = canvas5.getContext("2d");
	var img5 = document.getElementById("scream5");
	ctx5.drawImage(img5, 0, 0);
	restore_array5=[];
	index5=-1;
}

function clear_canvas6() {
	var canvas6 = document.getElementById("canvas6");
	var ctx6 = canvas6.getContext("2d");
	var img6 = document.getElementById("scream6");
	ctx6.drawImage(img6, 0, 0);
	restore_array6=[];
	index6=-1;
}

function clear_canvas7() {
	var canvas7 = document.getElementById("canvas7");
	var ctx7 = canvas7.getContext("2d");
	var img7 = document.getElementById("scream7");
	ctx7.drawImage(img7, 0, 0);
	restore_array7=[];
	index7=-1;
}

function clear_canvas8() {
	var canvas8 = document.getElementById("canvas8");
	var ctx8 = canvas8.getContext("2d");
	var img8 = document.getElementById("scream8");
	ctx8.drawImage(img8, 0, 0);
	restore_array8=[];
	index8=-1;
}

function clear_canvas9() {
	var canvas9 = document.getElementById("canvas9");
	var ctx9 = canvas9.getContext("2d");
	var img9 = document.getElementById("scream9");
	ctx9.drawImage(img9, 0, 0);
	restore_array9=[];
	index9=-1;
}

function clear_canvas10() {
	var canvas10 = document.getElementById("canvas10");
	var ctx10 = canvas10.getContext("2d");
	var img10 = document.getElementById("scream10");
	ctx10.drawImage(img10, 0, 0);
	restore_array10=[];
	index10=-1;
}

function clear_canvas11() {
	var canvas11 = document.getElementById("canvas11");
	var ctx11 = canvas11.getContext("2d");
	var img11 = document.getElementById("scream11");
	ctx11.drawImage(img11, 0, 0);
	restore_array11=[];
	index11=-1;
}

function clear_canvas12() {
	var canvas12 = document.getElementById("canvas12");
	var ctx12 = canvas12.getContext("2d");
	var img12 = document.getElementById("scream12");
	ctx12.drawImage(img12, 0, 0);
	restore_array12=[];
	index12=-1;
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

function undo_last3() {
	if(index3<=0){
		clear_canvas3();
	}else{
		index3 -= 1;
		restore_array3.pop();
		context3.putImageData(restore_array3[index3],0,0);
	}
}

function undo_last4() {
	if(index4<=0){
		clear_canvas4();
	}else{
		index4 -= 1;
		restore_array4.pop();
		context4.putImageData(restore_array4[index4],0,0);
	}
}

function undo_last5() {
	if(index5<=0){
		clear_canvas5();
	}else{
		index5 -= 1;
		restore_array5.pop();
		context5.putImageData(restore_array5[index5],0,0);
	}
}

function undo_last6() {
	if(index6<=0){
		clear_canvas6();
	}else{
		index6 -= 1;
		restore_array6.pop();
		context6.putImageData(restore_array6[index6],0,0);
	}
}

function undo_last7() {
	if(index7<=0){
		clear_canvas7();
	}else{
		index7 -= 1;
		restore_array7.pop();
		context7.putImageData(restore_array7[index7],0,0);
	}
}

function undo_last8() {
	if(index8<=0){
		clear_canvas8();
	}else{
		index8 -= 1;
		restore_array8.pop();
		context8.putImageData(restore_array8[index8],0,0);
	}
}

function undo_last9() {
	if(index9<=0){
		clear_canvas9();
	}else{
		index9 -= 1;
		restore_array9.pop();
		context9.putImageData(restore_array9[index9],0,0);
	}
}

function undo_last10() {
	if(index10<=0){
		clear_canvas10();
	}else{
		index10 -= 1;
		restore_array10.pop();
		context10.putImageData(restore_array10[index10],0,0);
	}
}

function undo_last11() {
	if(index11<=0){
		clear_canvas11();
	}else{
		index11 -= 1;
		restore_array11.pop();
		context11.putImageData(restore_array11[index11],0,0);
	}
}

function undo_last12() {
	if(index12<=0){
		clear_canvas12();
	}else{
		index12 -= 1;
		restore_array12.pop();
		context12.putImageData(restore_array12[index12],0,0);
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

