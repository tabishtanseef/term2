ques=1;
function check() {
	v1 = $('#1').val();
	v2 = $('#2').val();
	v3 = $('#3').val();
	v4 = $('#4').val();
	v5 = $('#5').val();
	v6 = $('#6').val();

	if(v1.toLowerCase()!='rose'){
		$('#1').css('border','2px solid red');
	}
	if(v2.toLowerCase()!='lotus'){
		$('#2').css('border','2px solid red');
	}
	if(v3.toLowerCase()!='sunflower'){
		$('#3').css('border','2px solid red');
	}
	if(v4.toLowerCase()!='marigold'){
		$('#4').css('border','2px solid red');
	}
	if(v5.toLowerCase()!='lily'){
		$('#5').css('border','2px solid red');
	}
	if(v6.toLowerCase()!='pansy'){
		$('#6').css('border','2px solid red');
	}
	
	if(v1.toLowerCase()=='rose' && v2.toLowerCase()=='lotus' && v3.toLowerCase()=='sunflower' && v4.toLowerCase()=='marigold' && v5.toLowerCase()=='lily' && v6.toLowerCase()=='pansy'){
		var audio = document.getElementById("audio1");
		audio.play();
		i=1;
		while(i<7){
			$("#"+i).css('border',"2px dashed green");
			i++;
		}
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
	$('#1').val('rose');
	$('#2').val('lotus');
	$('#3').val('sunflower');
	$('#4').val('marigold');
	$('#5').val('lily');
	$('#6').val('pansy');
}
 
 
function play(){
	var audio = document.getElementById('audio3');
	audio.play();
}