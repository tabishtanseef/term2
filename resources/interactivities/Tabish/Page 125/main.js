
function check() {
	v1 = $('#1').val();
	v2 = $('#2').val();
	v3 = $('#3').val();
	v4 = $('#4').val();
	v5 = $('#5').val();
	v6 = $('#6').val();
	
	if(v1!='a'){
		$('#1').css('border','2px solid red');
	}
	if(v2!='o'){
		$('#2').css('border','2px solid red');
	}
	if(v3!='t'){
		$('#3').css('border','2px solid red');
	}
	if(v4!='e'){
		$('#4').css('border','2px solid red');
	}
	if(v5!='a'){
		$('#5').css('border','2px solid red');
	}
	if(v6!='e'){
		$('#6').css('border','2px solid red');
	}
	if(v1=='a' && v2=='o' && v3=='t' && v4=='e' && v5=='a' && v6=='e'){
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
	$('#1').val('a');
	$('#2').val('o');
	$('#3').val('t');
	$('#4').val('e');
	$('#5').val('a');
	$('#6').val('e');
}

 
function play(){
	var audio = document.getElementById('audio3');
	audio.play();
}
 