$(document).ready(function () {

	var question1 = {

	}

	var question2 = {

	}

var correctAnswers = 0;
var incorrectAnswers = 0
var unanswered = 0;
var seconds = 40;

//Show the start button on page load or reload;
	window.onload = function () {
		$("#start").html('<button type="button" button class=btn btn-danger">Start game!</button>');
	}

//On start button click, start the first timer at 30 seconds decrementing by 1 second
	$('#start').on('click', function runTimer () {
		counter = setInterval(decrement, 1000);
	});

	function decrement() {
		seconds--;

		//show the number in the #timer tag.
		$('#timer').html('Timer: ' + seconds);
		
		//Once number hits zero...
		if (seconds === 0){
			//...run the question hide function.
			//$("#question1").hide();
			stop();
			alert('Time is up!')
		}

	}

//Stopping the timer
function stop(){
	//clears the "counter" interval.
	clearInterval(counter);
}












});
