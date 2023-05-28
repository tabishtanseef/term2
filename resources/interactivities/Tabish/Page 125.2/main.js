ques=1;
function check() {
	v1 = $('#1').val();
	v2 = $('#2').val();
	v3 = $('#3').val();
	v4 = $('#4').val();

	if(v1.toLowerCase()!='goat'){
		$('#1').css('border','2px solid red');
	}
	if(v2.toLowerCase()!='horse'){
		$('#2').css('border','2px solid red');
	}
	if(v3.toLowerCase()!='cow'){
		$('#3').css('border','2px solid red');
	}
	if(v4.toLowerCase()!='duck'){
		$('#4').css('border','2px solid red');
	}
	
	if(v1.toLowerCase()=='goat' && v2.toLowerCase()=='horse' && v3.toLowerCase()=='cow' && v4.toLowerCase()=='duck'){
		var audio = document.getElementById("audio1");
		audio.play();
		i=1;
		while(i<5){
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
	$('#1').val('goat');
	$('#2').val('horse');
	$('#3').val('cow');
	$('#4').val('duck');
}
 
 
function play(){
	var audio = document.getElementById('audio3');
	audio.play();
}