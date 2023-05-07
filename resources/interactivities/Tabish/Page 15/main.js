function check(){
	val2 = $('#2').val();
	val3 = $('#3').val();
	val4 = $('#4').val();
	val5 = $('#5').val();
	if(val2!='one'){
		$(".c_2").removeClass('hidden');
		$(".t_2").addClass('hidden');
	}
	if(val3!='many'){
		$(".c_3").removeClass('hidden');
		$(".t_3").addClass('hidden');
	}
	if(val4!='many'){
		$(".c_4").removeClass('hidden');
		$(".t_4").addClass('hidden');
	}
	if(val5!='one'){
		$(".c_5").removeClass('hidden');
		$(".t_5").addClass('hidden');
	}
	if(val2=='one' && val3=='many' && val4=='many' && val5=='one'){
		$(".t_2").removeClass('hidden');
		$(".c_2").addClass('hidden');
		$(".t_3").removeClass('hidden');
		$(".c_3").addClass('hidden');
		$(".t_4").removeClass('hidden');
		$(".c_4").addClass('hidden');
		$(".t_5").removeClass('hidden');
		$(".c_5").addClass('hidden');
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
	$('#2').val('one');
	$('#3').val('many');
	$('#4').val('many');
	$('#5').val('one');
	$('#blocks2').hide();
	$('#submit').css('pointer-events','none');
	$('#submit').css('opacity','0.5');
}
