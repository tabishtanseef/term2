
var big=0;
var ques=1;
var c_id =0;
x=[];
y=[];
var c_blue = 0;
var c_yellow = 0;
function change_color(ele){
	console.log(ele);
	if(ele=='b'){
		c_blue = 1;
		c_yellow = 0;
	}else{
		c_blue = 0;
		c_yellow = 1;
	}
}

function go(a){
	if(a=='1'){
		if(c_blue==1){
			$('#1').css('background','#0166B3'); big++;
		}else if(c_yellow==1){
			$('#1').css('background','#E39F13');
		}
	}else{
		if(c_blue==1){
			$('#2').css('background','#0166B3');
		}else if(c_yellow==1){
			$('#2').css('background','#E39F13'); big++;
		}
	}
}
function check() {
	if(big>=2){
		var audio = document.getElementById("audio1");
		audio.play();
		setTimeout(function(){ 
			$('#blocks').show(); 
		},1000);
	}
	else{
		var audio = document.getElementById("audio2");
        audio.play();
	}  
}
function solve(){
	$('#submit').attr('disabled',true);
	$('#submit').css('opacity','0.5');
	$('#1').css('background','#0166B3');
	$('#2').css('background','#E39F13');
}
 
function play(){
	var audio = document.getElementById('audio3');
	audio.play();
}