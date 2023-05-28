
function check() {
	v1 = $('#1').val();
	v2 = $('#2').val();
	v3 = $('#3').val();
	v4 = $('#4').val();
	v5 = $('#5').val();
	v6 = $('#6').val();
	
	if(v1!='c'){
		$('#1').css('border','2px solid red');
	}
	if(v2!='a'){
		$('#2').css('border','2px solid red');
	}
	if(v3!='i'){
		$('#3').css('border','2px solid red');
	}
	if(v4!='r'){
		$('#4').css('border','2px solid red');
	}
	if(v5!='r'){
		$('#5').css('border','2px solid red');
	}
	if(v6!='n'){
		$('#6').css('border','2px solid red');
	}
	if(v1=='c' && v2=='a' && v3=='i' && v4=='r' && v5=='r' && v6=='n'){
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
	$('#1').val('c');
	$('#2').val('a');
	$('#3').val('i');
	$('#4').val('r');
	$('#5').val('r');
	$('#6').val('n');
}

 
function play(){
	var audio = document.getElementById('audio3');
	audio.play();
}
 