

let draw_color = "#15B4F0";
let draw_width = "2";

let is_drawing = false;

let restore_array = [];
let index = -1;
i=1;
while(i<25){
	const canvas = document.getElementById("canvas"+i);
	canvas.width = 60;
	canvas.height = 60;

	let context = canvas.getContext("2d");
	let start_background_color = "white";
	context.fillStyle = start_background_color;
	context.fillRect(0,0,canvas.width,canvas.height);



	canvas.addEventListener("touchstart", start, false);
	canvas.addEventListener("touchmove", draw, false);
	canvas.addEventListener("mousedown", start, false);
	canvas.addEventListener("mousemove", draw, false);

	canvas.addEventListener("touchend", stop, false);
	canvas.addEventListener("mouseup", stop, false);
	canvas.addEventListener("mouseout", stop, false);

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

	function clear_canvas() {
		a=1;
		while(a<25){
			const canvas = document.getElementById("canvas"+a);
			context = canvas.getContext("2d");
			context.fillStyle = start_background_color;
			context.clearRect(0, 0, canvas.width, canvas.height);
			context.fillRect(0, 0, canvas.width, canvas.height);
			restore_array=[];
			index=-1;
			a++;
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


	function undo_last() {
		if(index<=0){
			clear_canvas();
		}else{
			index -= 1;
			restore_array.pop();
			context.putImageData(restore_array[index],0,0);
		}
	}

	i++;
}


function check(){
	$("#sol").css("pointer-events", "auto");
	var audio = document.getElementById('audio1');
	audio.play();
	setInterval(function(){ 
	 $('.field').hide(); 
	 $('#blocks').show(); 
	},500);
	setInterval(function(){ 
		window.location="index.html";
	},3000);
}

function play(){
	var audio = document.getElementById('audio3');
	audio.play();
}

function solve(){
	for(i=1; i<=50; i++){
		$('.'+i).addClass('hidden');
		$('#'+i).removeClass('hidden');
	}
}
