function check(){
	val1 = $('#1').val();
	val2 = $('#2').val();
	val3 = $('#3').val();
	val4 = $('#4').val();
	val5 = $('#5').val();
	
	if(val1.toLowerCase()!='fifth'){
		$("#1").css('border',"3px solid red");
	}
	if(val2.toLowerCase()!='eighth'){
		$("#2").css('border',"3px solid red");
	}
	if(val3.toLowerCase()!='ninth'){
		$("#3").css('border',"3px solid red");
	}
	if(val4.toLowerCase()!='third'){
		$("#4").css('border',"3px solid red");
	}
	if(val5.toLowerCase()!='sixth'){
		$("#5").css('border',"3px solid red");
	}
	
	if(val1.toLowerCase()=='fifth' && val2.toLowerCase()=='eighth' && val3.toLowerCase()=='ninth' && val4.toLowerCase()=='third' && val5.toLowerCase()=='sixth'){
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
	$('#1').val('fifth');
	$('#2').val('eighth');
	$('#3').val('ninth');
	$('#4').val('third');
	$('#5').val('sixth');
	$('#blocks2').hide();
	$('#submit').css('pointer-events','none');
	$('#submit').css('opacity','0.5');
}
