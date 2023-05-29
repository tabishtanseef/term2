
var big=0;
var ques=1;
var c_id =0;
x=[];
y=[];


function go(b){
	$('#h'+b).addClass('hidden');
	$('.'+b).removeClass('hidden');
	$('.'+b).css('pointer-events','none');
	big++;
}
function check() {
	if(big>=5){
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