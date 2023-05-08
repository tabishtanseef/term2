ques=1;
function check() {
	v1 = $('#1').val();
	v2 = $('#2').val();
	v3 = $('#3').val();
	v4 = $('#4').val();

	if(v1!='2'){
		$('#1').css('border','2px solid red');
	}
	if(v2!='2'){
		$('#2').css('border','2px solid red');
	}
	if(v3!='2'){
		$('#3').css('border','2px solid red');
	}
	if(v4!='2'){
		$('#4').css('border','2px solid red');
	}
	
	if(v1=='2' && v2=='2' && v3=='2' && v4=='2'){
		var audio = document.getElementById("audio1");
		audio.play();
		setTimeout(function(){ 
			$('#blocks').show();
		},1000);
	} 
	else{
		var audio = document.getElementById("audio2");
		audio.play();
		setInterval(function(){ 
			$('#blocks2').show();
		},1000);
	}
}
function solve(){
	$('#submit').css('pointer-events','none');
	$('#submit').css('opacity','0.5');
	$('#1').val('2');
	$('#2').val('2');
	$('#3').val('2');
	$('#4').val('2');
}
 
 
function play(){
	var audio = document.getElementById('audio3');
	audio.play();
}