$(document).ready(function () {

	var question1 = {

	}

	var question2 = {

	}

var correctAnswers = 0;
var incorrectAnswers = 0
var unanswered = 0;
var timer;

//Show the start button on page load or reload;
	window.onload = function () {
		$("#start").html('<button type="button" button class=btn btn-danger">Start game!</button>');
	}

//On start button click, start the first timer at 30 seconds decrementing by 1 second
	$('#start').on('click', runTimer);


	function runTimer () {
		var seconds = 40;
		clearInterval (timer);
		timer = setInterval(function () {
			$('#timer').html('Timer: ' + seconds--);
			if (seconds === -1) {
				clearInterval(timer);
				alert('Time is up!');
			}
		} , 1000);
	}

	$('#start').click(function() {
		runTimer();
	});
		












});
