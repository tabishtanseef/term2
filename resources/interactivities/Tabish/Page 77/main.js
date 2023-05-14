function check(){
	val1 = $('#1').val();
	val2 = $('#2').val();
	val3 = $('#3').val();
	val4 = $('#4').val();
	val5 = $('#5').val();
	val6 = $('#6').val();
	val7 = $('#7').val();
	val8 = $('#8').val();
	
	if(val1.toLowerCase()!='one'){
		$("#1").css('border',"3px solid red");
	}
	if(val2.toLowerCase()!='three'){
		$("#2").css('border',"3px solid red");
	}
	if(val3.toLowerCase()!='six'){
		$("#3").css('border',"3px solid red");
	}
	if(val4.toLowerCase()!='nine'){
		$("#4").css('border',"3px solid red");
	}
	if(val5.toLowerCase()!='ten'){
		$("#5").css('border',"3px solid red");
	}
	if(val6.toLowerCase()!='twelve'){
		$("#6").css('border',"3px solid red");
	}
	if(val7.toLowerCase()!='fifteen'){
		$("#7").css('border',"3px solid red");
	}
	if(val8.toLowerCase()!='twenty'){
		$("#8").css('border',"3px solid red");
	}
	
	if(val1.toLowerCase()=='one' && val2.toLowerCase()=='three' && val3.toLowerCase()=='six' && val4.toLowerCase()=='nine' && val5.toLowerCase()=='ten' && val6.toLowerCase()=='twelve' && val7.toLowerCase()=='fifteen' && val8.toLowerCase()=='twenty'){
		i=1;
		while(i<9){
			$("#"+i).css('border',"3px solid green");
			i++;
		}
		$("#sol").css("pointer-events", "auto");
		var audio = document.getElementById('audio1');
		audio.play();
		setTimeout(function(){ 
		 $('#blocks').show(); 
		},500);
	}else{
		var audio = document.getElementById('audio2');
		audio.play();
		setTimeout(function(){ 
			$('#blocks2').show();
		},1000);
	}
}

function play(){
	var audio = document.getElementById('audio3');
	audio.play();
}
function solve(){
	$('#1').val('one');
	$('#2').val('three');
	$('#3').val('six');
	$('#4').val('nine');
	$('#5').val('ten');
	$('#6').val('twelve');
	$('#7').val('fifteen');
	$('#8').val('twenty');
	$('#blocks2').hide();
	$('#submit').css('pointer-events','none');
	$('#submit').css('opacity','0.5');
}
