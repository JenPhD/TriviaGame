$(document).ready(function () {
	
	var questions = [
		{
			quest: "Which important social theorist coined the phrase 'survival of the fittest'?",
			answers: ["Charles Darwin", "Karl Marx", "Herbert Spencer", "Sigmund Freud", "Jane Addams"],
			correct: "Herbert Spencer",
			img: '<img src="assets/images/spencer.jpg" alt="Herbert Spencer"/>'
		},
		{
			quest: "Which sociologist used a study of suicide to show how every action, even a seemingly completely individualist act, can have social causes?",
			answers: ["Emile Durkheim", "Karl Marx", "Max Weber", "Harriet Martineau", "Sigmund Freud"],
			correct: "Emile Durkheim",			
		}
	];

	var current = 0;//This is the index of the current question which begins at zero.
	var numCorrect = 0;//This is the count of the number of correct answers.
	var numIncorrect = 0;//This is the count of the numberof incorrect answers.
	var unanswered = 0;//This is the count of the number of questions unanswered when timer gets to zero.
	var quizOver = false;//This is set to false, so when the quiz is over, I can reset the variables at the start of a new game.
	var seconds = 20;


//Show the start button on page load or reload;
	window.onload = function () {
		$("#start").html('<button type="button" button class="btn btn-info">Start trivia game!</button>');
	}

	function runTimer () {		
		clearInterval (timer);
		timer = setInterval(function () {
			$('#timer').html('Timer: ' + seconds--);
				if (seconds === -1) {
					clearInterval(timer);
				}	
		} , 1000);

function showBoth () {

function showQuestion () {
		//hide showCorrect
		$('#check').hide();
		//Empty the previous question
		$('#questions').empty();
		var question = questions[current].quest;
		//console.log(question);
		var newQuestion = $('<div/>')
			.html(question);
			$('#questions').append(newQuestion);
		}

function showAnswers () {
	for (i = 0; i < questions[current].answers.length; i++) {
	var newAnswers = $('<div/>')
		.addClass('answer col-sm-12')
		.html('<span class="ans">' + questions[current].answers[i] + '</span>');
			$('#answers').append(newAnswers);
		}					
	}

	runTimer();

}

//after the timer runs out show right answer and image
function showCorrect () {
	if seconds === -1 {
		$('#question').hide();
		$('#answers').hide();
		unanswered++;
		current++;
		$('#check').html('The correct answer is: </b>' + questions[current].correct);
		setTimeout(showBoth, 5000);
	}
}

if(current == questions.length) {
		quizOver = true;
		$('#question').hide();
		$('#answers').hide();
		$('#check').hide();
		$('#image').hide();

	var gradeCorrect = $('<div/>')
		.addClass('grades col-sm-12')
		.html('<span class="gradeCor">' + numCorrect + '</span>');
	$('#grade').append(gradeCorrect);

	var gradeIncorrect = $('<div/>')
		.addClass('grades col-sm-12')
		.html('<span class="gradeIncor">' + numIncorrect + '</span>');
	$('#grade').append(gradeIncorrect);

	var gradeUnanswered = $('<div/>')
		.addClass('grades col-sm-12')
		.html('<span class="unans">' + unanswered + '</span>');
	$('#grade').append(gradeUnanswered);

	$('#grade').show();

	}
}



//Function calls. The game begins when the user clicks start. The start button is hidden. The first question appears.
$('#start').on('click', function () {
		$('#start').hide();
		runTimer();
		showBoth ();
		
		//The first question should be displayed on click of the start button.	
		//showQuestion();
		//The first set of answers should be displayed on click of the start button.
		//showAnswers();
});//ends what happens when you click start.


});//ending document ready.