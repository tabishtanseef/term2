ques=1;
function check() {
	v2 = $('#2').val();
	v3 = $('#3').val();
	v4 = $('#4').val();
	v6 = $('#6').val();
	v7 = $('#7').val();
	v8 = $('#8').val();
	v9 = $('#9').val();
	v12 = $('#12').val();
	v13 = $('#13').val();
	v14 = $('#14').val();
	v16 = $('#16').val();
	v17 = $('#17').val();
	v18 = $('#18').val();

	if(v2!='2'){
		$('#2').css('border','2px solid red');
	}
	if(v3!='3'){
		$('#3').css('border','2px solid red');
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
	if(v8!='8'){
		$('#8').css('border','2px solid red');
	}
	if(v9!='9'){
		$('#9').css('border','2px solid red');
	}
	if(v12!='12'){
		$('#12').css('border','2px solid red');
	}
	if(v13!='13'){
		$('#13').css('border','2px solid red');
	}
	if(v14!='14'){
		$('#14').css('border','2px solid red');
	}
	if(v16!='16'){
		$('#16').css('border','2px solid red');
	}
	if(v17!='17'){
		$('#17').css('border','2px solid red');
	}
	if(v18!='18'){
		$('#18').css('border','2px solid red');
	}
	
	if(v2=='2' && v3=='3' && v4=='4' && v6=='6' && v7=='7' && v8=='8' && v9=='9' && v12=='12' && v13=='13' && v14=='14' && v16=='16' && v17=='17' && v18=='18'){
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
	$('#3').val('3');
	$('#4').val('4');
	$('#6').val('6');
	$('#7').val('7');
	$('#8').val('8');
	$('#9').val('9');
	$('#12').val('12');
	$('#13').val('13');
	$('#14').val('14');
	$('#16').val('16');
	$('#17').val('17');
	$('#18').val('18');
}

function play(){
	var audio = document.getElementById('audio3');
	audio.play();
}