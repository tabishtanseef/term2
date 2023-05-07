var ques=1;
lefty = 0;
righty = 0;
left = false;
right = false;

function check(){
	if(lefty>0 && righty>0 && left==true && right==true){
		if(ques<4){
			var audio = document.getElementById('audio1');
			audio.play();
			setTimeout(function(){ 
				$('#blocks').show();
				$('.t_l').removeClass('hidden');
				$('.t_r').removeClass('hidden');
			},500);
			console.log(ques);
			if(ques!=3){
			setTimeout(function(){ 
			 $('#blocks').hide(); 
			 $('.left_pair'+ques).addClass('hidden');
			 $('.right_pair'+ques).addClass('hidden');
			 $('.t_l').addClass('hidden');
			 $('.t_r').addClass('hidden');
			 ques++;
			 $('.left_pair'+ques).removeClass('hidden');
			 $('.right_pair'+ques).removeClass('hidden');
			 lefty = 0;
				righty = 0;
				left = false;
				right = false;
			},3000);
			}
		}
	}
	else{
		if(lefty>0 && left==true){
			$('.t_l').removeClass('hidden');
		}else if(lefty>0){
			$('.c_l').removeClass('hidden');
		}
		if(righty>0 && right==true){
			$('.t_r').removeClass('hidden');
		}else if(righty>0){
			$('.c_r').removeClass('hidden');
		}
		var audio = document.getElementById('audio2');
		audio.play();
		setInterval(function(){ 
			$('#blocks2').show();
		},1000);
	}
}

function play(){
	var audio = document.getElementById('audio3');
	audio.play();
}

function solve(){
	a=1;
	while(a<7){
		$('#'+a).addClass('hidden');
		$('#lp'+a).removeClass('hidden');
		$('.t_l').removeClass('hidden');
		$('.t_r').removeClass('hidden');
		a++;
	}
	a=10;
	while(a<16){
		$('#'+a).removeClass('hidden');
		$('#lp'+a).addClass('hidden');
		$('.c_l').addClass('hidden');
		$('.c_r').addClass('hidden');
		a++;
	}
	$('#submit').css('pointer-events','none');
	$('#submit').css('opacity','0.5');
}
function go(a){
	if(a==1 || a==2 || a==3  || a==10  || a==11 || a==12 ){
		lefty++;
		if(a==1 || a==2 || a==3 ){
			left = true;
		}
	}else{
		righty++;
		if(a==4 || a==5 || a==6 ){
			right = true;
		}
	}
	$('#'+a).addClass('hidden');
	$('#lp'+a).removeClass('hidden');
	if(a==1 || a==2 || a==3  || a==4  || a==5 || a==6 ){
		b=parseFloat(a)+parseFloat(9);
	}else{
		b=parseFloat(a)-parseFloat(9);
	}
	$('#'+b).css('pointer-events','none');
}