var leftCoordinate, rightCoordinate, left;
var leftBool = false;
var lineDraw = [];
var quesLength;
var curr_ques_screen;

var screenWidth = 0;
var screenHeight = 0;
var c_qurr = 0;
var flag = 0;
var ques = 1;
var c_ques = 0;
var random_arr = [];
var rand_No = [];
var R_rand_no = [];
var next_click = 0;
var l_clip;
var r_clip;
var Word_ans = [];
var temp_line_arr = [];
var temp_word_ans = [];
var submit_attampt = false;
var ans_attampt = false;
var classArr = [];

var columnASequence = "1234";
var columnBSequence = "3412";


function startAct() {
	$('#startDiv').css('opacity', '1').css('z-index', '').show();
}

$(document).ready(function () {
	if (language_code['1'] == 1) {
		$('body').addClass("font");
		$('#notification_Msg_Print').addClass("font");
		$('#submitAns').addClass("font");
		$('#showAns').addClass("font");
		$('.titleTop').addClass("font");
	}

	$('#submitAns').val(button_text['1']);
	$('#showAns').val(button_text['2']);
	screenWidth = $(window).width();
	screenHeight = $(window).height();
	$('.titleTop').text(information_text['1']);
	$("#btn-next").attr('disabled', 'disabled');

	quesLength = tempJsonObj['Left'].length;

	curr_ques_screen = MASTER_DB.CONFIG.MAX_QUES_SCRN;

	if (curr_ques_screen == quesLength) {
		$("#btn-next").hide();
	}

	for (var k = 1; k <= (tempJsonObj.Left.length); k++) {
		random_arr.push(k);
	}

	/* var qlen = 0;
	for(i=1;i<=quesLength; i += MASTER_DB.CONFIG.MAX_QUES_SCRN)
		{
			qlen++;
		}
	
	var slideStr = '';
	for(i=1;i<=qlen;i++){
		if(i == 1){
			slideStr+='<span class="slide_'+i+' active"></span>';
		}else{
			slideStr+='<span class="slide_'+i+'"></span>';
		}
	}
	
	if(qlen > 1) $('.slides').html(slideStr); */

	populateUI();
	setAllListHeight();
	$("#btn-next").click(function () {
		next_click++;
		var nn = 0;

		var slideShowC = parseInt(next_click) + 1;

		$('.slide_' + next_click).removeClass('active');
		$('.slide_' + slideShowC).addClass('active');

		for (i = 1; i <= quesLength; i += MASTER_DB.CONFIG.MAX_QUES_SCRN) {
			nn++;
		}

		if (nn == (next_click + 1)) {
			$("#btn-next").addClass('disable');
		}

		if (!(curr_ques_screen < random_arr.length)) {
			curr_ques_screen = random_arr.length;
			$("#showAns").attr('disabled', 'disabled')

		} else {
			curr_ques_screen = MASTER_DB.CONFIG.MAX_QUES_SCRN;
		}

		$("#btn-next").attr('disabled', 'disabled')

		for (i = 0; i < lineDraw.length; i++) {
			if (Word_ans.indexOf(lineDraw[i].lval.attr("id") + "_" + lineDraw[i].rval.attr("id")) != -1) {
				lineDraw.splice(i, 1);
			}
		}

		for (c_ques = ques; c_ques <= rand_No.length; c_ques++) {
			l_clip = $('#l' + rand_No[c_ques - 1]);
			r_clip = $('#r' + rand_No[c_ques - 1]);

			l_clip.remove();
			r_clip.remove();

			//l_clip.parent().remove();
			//r_clip.parent().remove();

			//console.log(val.className== r_clip.attr('id'))
		}

		$('.l_clsOption').remove();

		$('.r_clsOption').remove();
		Word_ans = [];
		lineDraw = [];
		$("#main_span span").remove();

		$('#mainWrapper').css('pointer-events', 'initial');

		$(".redPoint").remove();
		$(".blackPoint").remove();
		$(".wrong").removeClass('wrong');
		$(".tick").removeClass('tick');
		$("#btn-tryagain, #showAns").attr('disabled', 'disabled');

		populateUI();
	});

	$("#submitAns").click(function () {
		submit_attampt = true;
		flag = 0;
		$("#btn-tryagain").removeAttr('disabled');

		$('#mainWrapper').css('pointer-events', 'none');

		$('#showAns').removeAttr('disabled').show();
		$("#submitAns").attr('disabled', 'disabled');
		//this loop set the black color for all correct answers
		//temp_line_arr = [];
		temp_word_ans = [];

		for (c_ques = ques; c_ques <= rand_No.length; c_ques++) {
			l_clip = $('#l' + rand_No[c_ques - 1]);
			r_clip = $('#r' + rand_No[c_ques - 1]);

			Word_ans.push(l_clip.attr('id') + '_' + r_clip.attr('id'));
		}

		temp_word_ans = Word_ans.concat();
		classArr[0] = new Array();
		classArr[1] = new Array();

		$.each($('#main_span span'), function (i, val) {
			//console.log(Word_ans, Word_ans.indexOf(val.className), val.className)
			classArr[0].push(val.className);

			if (Word_ans.indexOf(val.className) != -1) {
				val.className = 'greenPoint';
				//$(val).parent().attr('data-sol', 'solved');
			}

			if (val.className != Word_ans && val.className != 'greenPoint') {
				val.className = 'redPoint';
				//$(val).parent().attr('data-sol', 'notsolved');
				flag = 1;
			}
			classArr[1].push(val.className);
			//classArr.push(val.className);

			//console.log(val, val.className)
		});
		console.log(classArr);
		if (flag == 0) {
			$("#feedback-box").html('').show();
			playAudio('well-done');
			$('#welldone').css('display', 'block').show();
			$("#btn-tryagain").attr('disabled', 'disabled');
			setTimeout(function(){
				window.location ="2.html";
			},2000);
		} else {
			$("#feedback-box").html('').show();
			playAudio('try-again');
			$(".tryagain").css('display', 'block').show();
			$("#btn-tryagain").removeAttr('disabled');

		}
		setTimeout(function () {
			$("#feedback-box").html('').show();
		}, 4500);

		$('#showAns').removeAttr('disabled');
		//$('#submitAns').hide();

		//$('#submitAns').unbind('click');
		$('#submitAns').removeAttr('disabled');

		var status = 0;

		for (i = 0; i < lineDraw.length; i++) {
			if (Word_ans.indexOf(lineDraw[i].lval.attr("id") + "_" + lineDraw[i].rval.attr("id")) != -1) {
				lineDraw[i].rval[0].parentElement.children[0].className = 'tick_circle';
				status++;
			}
			else if (Word_ans.indexOf((lineDraw[i].lval.attr("id") + "_" + lineDraw[i].rval.attr("id")) != -1) && (lineDraw[i].lval[0].parentElement.children[0].className != 'tick')) {
				lineDraw[i].rval[0].parentElement.children[0].className = 'wrong_circle';
			}
		}

		console.log(curr_ques_screen, random_arr.length, quesLength);

		if (!random_arr.length) {
			$("#btn-next").attr('disabled', 'disabled');
		}
		else $("#btn-next").removeAttr('disabled')

		$(this).attr("disabled", "disabled");
	});

	//--------------------------- Answer ---------------------------------//

	$("#showAns").click(function () {
		ans_attampt = true;
		$("#showAns").attr('disabled', 'disabled');
		$("#btn-tryagain").attr('disabled', 'disabled');
		temp_line_arr = lineDraw.concat();
		temp_word_ans = Word_ans.concat();

		//this loop removes all wrong and right tick marks before each option
		for (i = 0; i < lineDraw.length; i++) {
			lineDraw[i].lval[0].parentElement.children[0].className = '';

		}
		//this loop removes all correct answers from "lineDraw" array

		for (i = 0; i < lineDraw.length; i++) {
			if (Word_ans.indexOf(lineDraw[i].lval.attr("id") + "_" + lineDraw[i].rval.attr("id")) != -1) {
				//lineDraw.splice(i, 1);
			}
		}

		//this loop identify all the wrong answers from "lineDraw" array redraw them and remove them one by one
		var incorrectAns = 0;

		classArr[1] = new Array();
		classArr[2] = new Array();

		$.each($('#main_span span'), function (i, val) {
			classArr[2].push(val.className);
		});

		for (var k = 0; k < Word_ans.length; k++) {
			for (i = 0; i < lineDraw.length; i++) {
				if (((lineDraw[i].lval.attr("id")) == (Word_ans[k].substr(0, Word_ans[k].indexOf('_'))))) {
					incorrectAns++;
					rightCoordinate = getOffset($("#" + Word_ans[k].substr(Word_ans[k].indexOf('_') + 1, Word_ans[k].length))[0]);
					rightCoordinate[0] += 10;
					rightCoordinate[1] += 06;
					lineDraw[i].rx = rightCoordinate[0];
					lineDraw[i].ry = rightCoordinate[1];
					lineDraw[i].rval = $("#" + Word_ans[k].substr(Word_ans[k].indexOf('_') + 1, Word_ans[k].length));
					$(".redPoint").remove();
					console.log($('.rightSide li span'));

					line(lineDraw[i].lx, lineDraw[i].ly, lineDraw[i].rx, lineDraw[i].ry, lineDraw[i].lval, lineDraw[i].rval);
				}
			}
		};
		$('.rightSide li span').addClass('tick_circle');
		$.each($('#main_span span'), function (i, val) {
			classArr[1].push(val.className);
		});

		//$('.tick_circle').removeClass('tick_circle');
		//$('.wrong_circle').removeClass('wrong_circle');
	});

	$(window).resize(function () {
		screenWidthdiff = $(window).width() - screenWidth;
		screenHeightdiff = $(window).height() - screenHeight;

		screenWidth = $(window).width();
		screenHeight = $(window).height();

		$("#main_span span").remove();

		for (i = 0; i < lineDraw.length; i++) {
			lineDraw[i].lx += (screenWidthdiff / 2);
			lineDraw[i].rx += (screenWidthdiff / 2);

			lineDraw[i].ly += (screenHeightdiff / 2);
			lineDraw[i].ry += (screenHeightdiff / 2);

			line(lineDraw[i].lx, lineDraw[i].ly, lineDraw[i].rx, lineDraw[i].ry, lineDraw[i].lval, lineDraw[i].rval);
		}

		if (ans_attampt || submit_attampt) {
			for (i = 0; i < classArr[0].length; i++) {
				$('.' + classArr[0][i]).addClass(classArr[1][i]);
			}
		}

		setAllListHeight();
	});

	window.addEventListener("load", function () {
		setTimeout(function () {
			// Hide the address bar!
			window.scrollTo(0, 1);
		}, 0);
	});
	if ($(window).height() < 600) {
		$('.wrapper .content .leftSide li').css('margin', '1px');
		$('.wrapper .content .rightSide li').css('margin', '1px');
		$('.wrapper .content').css('padding', '5px 10px 5px 10px').css('margin', '2px auto');
		//$('#startDiv').height('600px');
		$('.notifiactinMsg').height('302px');
		$('#notification_Msg_Print').height('233px');
		$('.wrapper .buttonBar li').css('padding', '0px');
	}
});

function setAllListHeight() {
	var max_height = 0;
	var max_height_arr = [];
	$('.l_clsOption, .r_clsOption').find('li').each(function (index, element) {
		max_height_arr.push($(this).height());
	})

	max_height = max_height_arr.reduce(function (a, b) {
		return Math.max(a, b);
	});

	$('.l_clsOption, .r_clsOption').find('li').each(function (index, element) {
		//$(this).css('height',max_height);

		$(this).find('strong').css('top', (($(this).height() / 2) - ($(this).find('strong').height() / 2)))
		//console.log($(this).find('strong').height(), $(this));
	})

	//$('.wrapper .content .leftSide li, .wrapper .content .rightSide li').css('height', max_height);
	console.log(max_height);
}

function fnLeftOptionClicked() {
	$('.selected').removeClass('selected');
	//remove previously selected left element
	$(this.firstChild).addClass('selected');

	leftCoordinate = getOffset(this.childNodes[0].childNodes[2]);
	leftCoordinate[0] += 05;
	leftCoordinate[1] += 06;
	leftBool = true;
	left = $(this.childNodes[0].childNodes[2]);
}

function fnRightOptionClicked() {
	playAudio('swipe');
	if (leftBool === true) {
		rightCoordinate = getOffset(this.childNodes[0].childNodes[0]);
		rightCoordinate[0] += 10;
		rightCoordinate[1] += 06;
		var obj = {
			lx: leftCoordinate[0],
			ly: leftCoordinate[1],
			rx: rightCoordinate[0],
			ry: rightCoordinate[1],
			lval: left,
			rval: $(this.childNodes[0].childNodes[0])
		};
		for (i = 0; i < lineDraw.length; i++) {
			if ((lineDraw[i].lx == obj.lx) && (lineDraw[i].ly == obj.ly))
				lineDraw.splice(i, 1);
		}
		for (i = 0; i < lineDraw.length; i++) {
			if ((lineDraw[i].rx == obj.rx) && (lineDraw[i].ry == obj.ry))
				lineDraw.splice(i, 1);
		}
		lineDraw.push(obj);
		$("#main_span span").remove()
		for (i = 0; i < lineDraw.length; i++) {
			line(lineDraw[i].lx, lineDraw[i].ly, lineDraw[i].rx, lineDraw[i].ry, lineDraw[i].lval, lineDraw[i].rval);
		}
		temp_line_arr = lineDraw.concat();
		left[0].parentElement.className = '';

		leftBool = false;
		//console.log(lineDraw.length, curr_ques_screen, lineDraw.length % curr_ques_screen == 0)

		if (lineDraw.length % curr_ques_screen == 0) {
			$('#submitAns').removeAttr("disabled");
			$("#btn-reset").removeAttr("disabled");
		}

		var getName = $(this).children().children().attr('id');

	}
	if (lineDraw.length % curr_ques_screen == 0) {
		$('#showAns').attr('disabled', 'disabled');
		$('#submitAns').removeAttr('disabled').show();

		$('#showAns').attr('disabled', 'disabled');
	} else {
		$('#showAns').attr('disabled', 'disabled');
		//$('#submitAns').attr('disabled').hide();
	}
}
//This function draws a line according to given x and y coordiantes
function line(x0, y0, x1, y1, left, right) {
	//console.log(x0, y0, x1, y1, left, right)
	var x = left.offset();
	_x0 = parseInt(x.left) + 6; _y0 = parseInt(x.top) + 6;
	var x = right.offset();
	_x1 = parseInt(x.left) + 6; _y1 = parseInt(x.top) + 6;

	x0 = _x0; y0 = _y0; x1 = _x1; y1 = _y1;

	var dx = x1 - x0;
	var dy = y1 - y0;
	putpixel(x0, y0, left, right);
	if (Math.abs(dx) > Math.abs(dy)) {
		// slope < 1
		var m = dy / dx;
		// compute slope
		var b = y0 - m * x0;
		dx = (dx < 0) ? -1 : 1;
		while (x0 != x1) {
			x0 += dx;
			putpixel(x0, Math.round(m * x0 + b), left, right);
		}
	} else if (dy != 0) {
		// slope >= 1
		var m = dx / dy;
		// compute slope
		var b = x0 - m * y0;
		dy = (dy < 0) ? -1 : 1;

		while (y0 != y1) {
			y0 += dy;
			putpixel(Math.round(m * y0 + b), y0, left, right);
		}
	}
}

//This function create new span for each pixel
function putpixel(x, y, left, right) {
	var point = document.createElement("span");
	point.style.position = "absolute";
	point.style.left = x + "px";
	point.style.width = "3px";
	point.style.height = "3px";
	point.style.background = "black";
	point.style.top = y + "px";
	point.className = left.attr("id") + "_" + right.attr("id");
	bdy = document.getElementById("main_span");
	bdy.insertBefore(point, null);
}

//This function calculate coorinates of each pixel to be drawn
function getOffset(el) {
	var _x = 0;
	var _y = 0;

	while (el && !isNaN(el.offsetLeft) && !isNaN(el.offsetTop)) {
		_x += el.offsetLeft - el.scrollLeft;
		_y += el.offsetTop - el.scrollTop;
		el = el.offsetParent;
	}
	return [_x, _y];
}

function fn_InformationClicked() {
	// if($("#dv_information").css('display') == 'block')
	// $("#dv_information").hide();
	// else
	// {
	$("#dv_information").show();
	$("#notification_Msg_Print").html(tempJsonObj.text);
	//}
}
function closePopup() {
	$("#dv_information").hide();
}

function getRandom(arr, n) {
	var result = new Array(n),
		len = arr.length,
		taken = new Array(len);
	if (n > len)
		throw new RangeError("getRandom: more elements taken than available");
	while (n--) {
		var x = Math.floor(Math.random() * len);
		result[n] = arr[x in taken ? taken[x] : x];
		taken[x] = --len in taken ? taken[len] : len;
	}

	return result;
}

function shuffle(array) {
	var currentIndex = array.length, temporaryValue, randomIndex;

	// While there remain elements to shuffle...
	while (0 !== currentIndex) {

		// Pick a remaining element...
		randomIndex = Math.floor(Math.random() * currentIndex);
		currentIndex -= 1;

		// And swap it with the current element.
		temporaryValue = array[currentIndex];
		array[currentIndex] = array[randomIndex];
		array[randomIndex] = temporaryValue;
	}

	return array;
}

function populateUI() {
	updateRendomArr();

	$('#dvLeft').html(LIcreatorLeft(tempJsonObj.Left));
	$('#dvRight').html(LIcreatorRight(tempJsonObj.Right));

	$('.l_clsOption').on("click", fnLeftOptionClicked);
	$('.r_clsOption').on("click", fnRightOptionClicked);
}

function updateRendomArr() {
	rand_No = getRandom(random_arr, curr_ques_screen);

	for (var k = 0; k < rand_No.length; k++) {
		random_arr.splice(random_arr.indexOf(rand_No[k]), 1);
	}

	c_qurr = c_qurr + rand_No.length;
	//console.log(c_qurr);
	return rand_No;
}

function LIcreatorLeft(ObjectLeft) {
	var liHtml = '<h1>' + tempJsonObj.LeftHeading + '</h1>';

	for (c_ques = ques; c_ques <= rand_No.length; c_ques++) {
		liHtml += '<div class="l_clsOption"><li><b></b><strong>' + ObjectLeft[(columnASequence[c_ques - 1]) - 1] + '</strong><span id = "l' + Number(columnASequence[c_ques - 1]) + '" class="liLeft"></span></li></div>';

		//console.log(rand_No);
	};

	//console.log(ques);
	//c_qurr = c_ques;
	/*$.each(ObjectLeft, function(i, val) {
		
		liHtml += '<div class="l_clsOption"><li><b></b><strong>' + val + '</strong><span id = "l' + Number(i + 1) + '" class="liLeft"></span></li></div>';
		console.log(i, " ques", val);
	    
	})*/
	return liHtml;
}

function LIcreatorRight(ObjectRight) {
	var liHtml = '<h1>' + tempJsonObj.RightHeading + '</h1>';
	//console.log(getRandom(rand_No, 7), " Right");
	R_rand_no = columnBSequence//getRandom(rand_No, curr_ques_screen);
	for (c_ques = ques; c_ques <= rand_No.length; c_ques++) {
		liHtml += '<div class="r_clsOption"><li><span id = "r' + R_rand_no[c_ques - 1] + '" class="liRight"></span><strong>' + ObjectRight[(R_rand_no[c_ques - 1]) - 1] + '</strong></li></div>';
	};

	return liHtml;
}

function fnShowAudioPlayer() {
	var x = "<div id='dvAudioControl' class='audioPlayer'>" + "<object id='auTest' type='application/x-shockwave-flash' data='audio/mp3_player.swf' width='200' height='20'>" + "<param name='wmode' value='transparent' />" + "<param name='movie' value='audio/mp3_player.swf' />" + "<param name='FlashVars' value='mp3=audio/blanks.mp3&amp;showvolume=1&amp;autoplay=1' />" + "</object>" + "<T src='images/icon_close.png' class='btnCloseAudio' onclick='fnHideAudioControl()'></img>" + "</div>";
	$("#audioContainerDiv").html(x);
	//$('#dvAudioControl').show();
	//var audioElement = document.getElementById('auTest');
	//audioElement.play();
}

function fnHideAudioControl() {
	$("#audioContainerDiv").html('');
	//var audioElement = document.getElementById('auTest');
	//audioElement.pause();
	//audioElement.currentTime=0;
	//$('#dvAudioControl').hide();
}
function resetActivity() {

	//$('#mainWrapper').load();
	/*$("#main_span span").remove();
	lineDraw = [];
	$('.l_clsOption').each(function() {
		$(this).find('b').removeClass('wrong');
		$(this).find('b').removeClass('tick');
	});
	$('#showAns').attr('disabled', 'disabled');*/
	window.location.reload();
}

$(document).ready(function (e) {

	var blinkHolder;
	$('.l_clsOption').click(function (e) {
		e.stopPropagation();
		clearInt();
		$jThis = $(this).find('.liLeft');
		var blinks = function () {
			$jThis.toggleClass('tog');

		}
		blinkHolder = setInterval(blinks, 500);

	});

	$('.rightSide').click(function (e) {
		clearInt();
		e.stopPropagation();

	});

	$('html').click(function (e) {
		clearInt();

	});

	function clearInt() {
		clearInterval(blinkHolder);
		$('.liLeft').removeClass('tog');
	}
})

function showLineBlocker() {
	var objComputed = $("#mainWrapper").offset();
	objComputed.width = $("#mainWrapper").width();
	objComputed.height = $("#mainWrapper").height();
	//console.log(objComputed.height);

	$("#myblocker").css({
		width: objComputed.width + 'px',
		height: objComputed.height + 'px',
		top: objComputed.top + 'px',
		left: objComputed.left + 'px'
	}).show();
}

function tryAgainAct() {

	//$("#myblocker").hide();
	$('#mainWrapper').css('pointer-events', 'initial');

	for (var i = lineDraw.length - 1; i >= 0; i--) {
		if (lineDraw[i].lval.parents('.l_clsOption').find('b').attr('class') == "wrong") {
			lineDraw.splice(i, 1)
		}
	}

	$(".redPoint").remove();
	$(".wrong").removeClass('wrong')
	$("#btn-tryagain, #showAns").attr('disabled', 'disabled');


}

function playAudio(file_name) {
	var _audio = new Audio('assets/audio/' + file_name + '.ogg');
	$(_audio).attr('type', 'audio/ogg');
	_audio.play();
}

function startIA() {
	$('#cont1, #blogo').hide();
	$('#cont2, .copyrigth').show();

	setAllListHeight();
}

function playHead(){
	var _audio = new Audio('assets/audio/Page-32-01.mp3');
	_audio.play();
}