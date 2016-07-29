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
	var seconds = 40;


//Show the start button on page load or reload;
	window.onload = function () {
		$("#start").html('<button type="button" button class="btn btn-info">Start trivia game!</button>');
	}

//Game process. Trying now as an object.
//First thing that needs to happen is that the start button is hidden and the timer starts for the first question.
//Run timer. The timer should be run when the current question and associated answers appear.
	
	function runTimer () {		
		clearInterval (timer);
		timer = setInterval(function () {
			$('#timer').html('Timer: ' + seconds--);
				if (seconds === -1) {
					clearInterval(timer);
				}	
		} , 1000);
		//console.log("Please work");
	}

	function showQuestion () {
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
		
		//display the next question after clicking on an answer
			$('.ans').on('click', function () {
				//after clicking on the answer, reset the timer and hide it.
				seconds = 40;
				$('#timer').hide();
				if(quizOver == false) {
					if(this.innerHTML === questions[current].correct) {
						numCorrect++;
						//After getting a correct answer, hide the question and answers.
						$('#questions').hide();
						$('#answers').hide();
						//display a page with a gif or image
						$('#check').append('<b>Correct!</b>');
						$('#check').show();
						$('#image').append(questions[current].img);
						$('#image').show();
					} else {
						numIncorrect++;
						//hide the question and answers.
						$('#questions').hide();
						$('#answers').hide();
						//display a page with a gif or image
						$('#check').append('<b>Nope! The correct answer is: </b>' + questions[current].correct);
						$('#check').show();
						$('#image').append(questions[current].img);
						$('#image').show();
					}
				} //else() display grade
				console.log(numCorrect);
				//After clicking on an answer and seeing whether it is correct or not. 
				//
			});
		}
		console.log(numCorrect);
		


//Function calls. The game begins when the user clicks start. The start button is hidden. The first question appears.
$('#start').on('click', function () {
		$('#start').hide();
		runTimer();
		//The first question should be displayed on click of the start button.	
		showQuestion();
		//The first set of answers should be displayed on click of the start button.
		showAnswers();
});//ends what happens when you click start.


});//ending document ready.