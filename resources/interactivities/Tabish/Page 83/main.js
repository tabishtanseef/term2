function check(){
	val1 = $('#1').val();
	val2 = $('#2').val();
	val3 = $('#3').val();
	val4 = $('#4').val();
	val5 = $('#5').val();
	val6 = $('#6').val();
	
	if(val1.toLowerCase()!='second'){
		$("#1").css('border',"3px solid red");
	}
	if(val2.toLowerCase()!='first'){
		$("#2").css('border',"3px solid red");
	}
	if(val3.toLowerCase()!='fifth'){
		$("#3").css('border',"3px solid red");
	}
	if(val4.toLowerCase()!='fourth'){
		$("#4").css('border',"3px solid red");
	}
	if(val5.toLowerCase()!='third'){
		$("#5").css('border',"3px solid red");
	}
	if(val6.toLowerCase()!='first'){
		$("#6").css('border',"3px solid red");
	}
	
	if(val1.toLowerCase()=='second' && val2.toLowerCase()=='first' && val3.toLowerCase()=='fifth' && val4.toLowerCase()=='fourth' && val5.toLowerCase()=='third' && val6.toLowerCase()=='first'){
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
	$('#1').val('second');
	$('#2').val('first');
	$('#3').val('fifth');
	$('#4').val('fourth');
	$('#5').val('third');
	$('#6').val('first');
	$('#blocks2').hide();
	$('#submit').css('pointer-events','none');
	$('#submit').css('opacity','0.5');
}
