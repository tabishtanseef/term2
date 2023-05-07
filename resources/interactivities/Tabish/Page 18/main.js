
var big=0;
var ques=1;
var c_id =0;
x=[];
y=[];
function go(a){
	$('.t_'+a).removeClass('hidden');
	if(a<4){
		x.push(a);
	}else{
		y.push(a);
	}
	$('.t_'+a).css('pointer-events','none');
}
function check() {
	if(x.length==3 && y.length==0){
		var audio = document.getElementById("audio1");
		audio.play();
		setTimeout(function(){ 
			$('#blocks').show(); 
		},1000);
	}
	else{
		var audio = document.getElementById("audio2");
        audio.play();
		y.forEach(function(item,index){
			$('.t_'+item).addClass('hidden');
			$('.c_'+item).removeClass('hidden');	
		})
	}  
}
function solve(){
	$('#submit').attr('disabled',true);
	$('#submit').css('opacity','0.5');
	var i;
	for (i = 1; i <= 21; i++) { 
		$('.t_'+i).addClass('hidden');
	}
	for (i = 1; i <= 4; i++) { 
		$('.t_'+i).removeClass('hidden');
	}
}
 
function play(){
	var audio = document.getElementById('audio3');
	audio.play();
}