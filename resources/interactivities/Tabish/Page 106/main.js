ques=1;
function check() {
	v2 = $('#2').val();
	v4 = $('#4').val();
	v6 = $('#6').val();
	v7 = $('#7').val();
	v9 = $('#9').val();

	if(v2!='2'){
		$('#2').css('border','2px solid red');
	}
	if(v4!='4'){
		$('#4').css('border','2px solid red');
	}
	if(v6!='6'){
		$('#6').css('border','2px solid red');
	}
	if(v7!='7'){
		$('#7').css('border','2px solid red');
	}
	if(v9!='9'){
		$('#9').css('border','2px solid red');
	}
	
	if(v2=='2' && v4=='4' && v6=='6' && v7=='7' && v9=='9'){
		var audio = document.getElementById("audio1");
		audio.play();
		setInterval(function(){ 
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
	$('#2').val('2');
	$('#4').val('4');
	$('#6').val('6');
	$('#7').val('7');
	$('#9').val('9');
}
 
 
function play(){
	var audio = document.getElementById('audio3');
	audio.play();
}