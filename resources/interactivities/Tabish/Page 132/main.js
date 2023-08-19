function check(){
	val1 = $('#1').val();
	val2 = $('#2').val();
	val3 = $('#3').val();
	val4 = $('#4').val();
	val5 = $('#5').val();
	val6 = $('#6').val();
	val7 = $('#7').val();
	val8 = $('#8').val();
	val9 = $('#9').val();
	val10 = $('#10').val();
	val11 = $('#11').val();
	val12 = $('#12').val();
	val13 = $('#13').val();
	
	if(val1.toLowerCase()!='o'){
		$("#1").css('border-bottom',"3px solid red");
	}
	if(val2.toLowerCase()!='e'){
		$("#2").css('border-bottom',"3px solid red");
	}
	if(val3.toLowerCase()!='u'){
		$("#3").css('border-bottom',"3px solid red");
	}
	if(val4.toLowerCase()!='e'){
		$("#4").css('border-bottom',"3px solid red");
	}
	if(val5.toLowerCase()!='k'){
		$("#5").css('border-bottom',"3px solid red");
	}
	if(val6.toLowerCase()!='h'){
		$("#6").css('border-bottom',"3px solid red");
	}
	if(val7.toLowerCase()!='e'){
		$("#7").css('border-bottom',"3px solid red");
	}
	if(val8.toLowerCase()!='c'){
		$("#8").css('border-bottom',"3px solid red");
	}
	if(val9.toLowerCase()!='i'){
		$("#9").css('border-bottom',"3px solid red");
	}
	if(val10.toLowerCase()!='e'){
		$("#10").css('border-bottom',"3px solid red");
	}
	if(val11.toLowerCase()!='a'){
		$("#11").css('border-bottom',"3px solid red");
	}
	if(val12.toLowerCase()!='b'){
		$("#12").css('border-bottom',"3px solid red");
	}
	if(val13.toLowerCase()!='d'){
		$("#13").css('border-bottom',"3px solid red");
	}
	
	if(val1.toLowerCase()=='o' && val2.toLowerCase()=='e' && val3.toLowerCase()=='u' && val4.toLowerCase()=='e' && val5.toLowerCase()=='k' && val6.toLowerCase()=='h' && val7.toLowerCase()=='e' && val8.toLowerCase()=='c' && val9.toLowerCase()=='i' && val10.toLowerCase()=='e' && val11.toLowerCase()=='a' && val12.toLowerCase()=='b' && val13.toLowerCase()=='d'){
		i=1;
		while(i<12){
			$("#"+i).css('border-bottom',"3px solid green");
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
	$('#1').val('o');
	$('#2').val('e');
	$('#3').val('u');
	$('#4').val('e');
	$('#5').val('k');
	$('#6').val('h');
	$('#7').val('e');
	$('#8').val('c');
	$('#9').val('i');
	$('#10').val('e');
	$('#11').val('a');
	$('#12').val('b');
	$('#13').val('d');
	$('#blocks2').hide();
	//$('#submit').css('pointer-events','none');
	$('#submit').css('opacity','0.5');
}
