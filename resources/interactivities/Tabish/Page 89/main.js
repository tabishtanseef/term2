
var big=0;
var ques=1;
var c_id =0;
x=[];
y=[];
var c_red = 0;
var c_yellow = 0;
var c_purple = 0;
var c_orange = 0;
var c_blue = 0;
var c_black = 0;
var c_green = 0;

function choose_color(ele,i){
    c_red = 0;
    c_yellow = 0;
    c_purple = 0;
    c_orange = 0;
    c_blue = 0;
    c_black = 0;
    c_green = 0;

	if(i=='1'){
		c_red = 1;
	}else if(i=='2'){
		c_yellow = 1;
	}else if(i=='3'){
		c_purple = 1;
	}else if(i=='4'){
		c_orange = 1;
	}else if(i=='5'){
		c_blue = 1;
	}else if(i=='6'){
		c_black = 1;
	}else if(i=='7'){
		c_green = 1;
	}
}
function fill_color(a,b){
	if((a=='T' && c_purple==1) || (a=='C' && c_red==1) || (a=='S' && c_yellow==1) || (a=='SR' && c_orange==1) || (a=='R' && c_blue==1) || (a=='O' && c_black==1) || (a=='SC' && c_green==1) ){
		$('#'+b).addClass('hidden');
		$('#'+b+'0').removeClass('hidden');
		$('#'+b+'0').css('pointer-events','none');
		big++;
	}
}

function check() {
	console.log(big);
	if(big>=22){
		var audio = document.getElementById("audio1");
		audio.play();
		setTimeout(function(){ 
			$('#blocks').show(); 
		},1000);
	}
	else{
		var audio = document.getElementById("audio2");
        audio.play();
		setTimeout(function(){ 
			$('#blocks2').show(); 
		},1000);
	}  
}
function solve(){
	$('#submit').attr('disabled',true);
	$('#submit').css('opacity','0.5');
	$('.ques_images').addClass('hidden');
	$('.ques_image').removeClass('hidden');
}
 
function play(){
	var audio = document.getElementById('audio3');
	audio.play();
}