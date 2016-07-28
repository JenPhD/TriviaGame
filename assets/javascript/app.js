$(document).ready(function () {
	
	var questions = [
		{
			quest: "Which important social theorist coined the phrase 'survival of the fittest'?",
			answers: ["Charles Darwin", "Karl Marx", "Herbert Spencer", "Sigmund Freud", "Jane Addams"],
			correct: "Herbert Spencer",
			currentQuestion: false

		},
		{
			quest: "Which sociologist used a study of suicide to show how every action, even a seemingly completely individualist act, can have social causes?",
			answers: ["Emile Durkheim", "Karl Marx", "Max Weber", "Harriet Martineau", "Sigmund Freud"],
			correct: "Emile Durkheim",
			currentQuestion: false
		}

	]
	
	//Show the start button on page load or reload;
	window.onload = function () {
		$("#start").html('<button type="button" button class="btn btn-danger">Start game!</button>');
	}

	//reset game stats;
	function stats () {
		var numCorrect = 0;
		var numIncorrect = 0;
		var unanswered = 0;
		var timer;
		}
		
		//set the timer to 40 seconds to answer questions
	function runTimer () {
		var seconds = 40;
		clearInterval (timer);
		timer = setInterval(function () {
			$('#timer').html('Timer: ' + seconds--);
				if (seconds === -1) {
					clearInterval(timer);
				}	
		} , 1000);
	}

	function beginQuiz () {
		$('#questions').empty();
		for (i = 0; i < questions.length; i++) {
			if(questions[i].currentQuestion === true) {
				var $newQuiz = $('<div>')
					.addClass = ('current col-sm-12')
					.attr('quest-id', i)
					.html(questions[i].quest);
				$('#questions').append($newQuiz);			
			} 
			$('.current').on('click', function() {
				firstQuestion(this.getAttribute('quest-id'))
			})
		}	
	}
	
	//Not sure how to go back to the for loop after an answer has been clicked;
		//$('#answers').on('click', function() {
			//beginQuestions(this.getAttribute('quest-id'))
			//});
			
		//}

		function showQuestion (index) {
			var $newQuestion = $('<div>')
				.addClass('question col-sm-12')
				.html(questions[0].quest);
			$('#questions').html($newQuestion);

		}

		//Add answers

	
		function showAnswers (index) {
			for (i = 0; i < questions[0].answers.length; i++) {
			var $newAnswers = $('<div/>')
				.addClass('answer col-sm-12')
				.attr('answer-id', i)
				.html('<span>' + questions[0].answers[i] + '</span>');
				$('#answers').append($newAnswers);
			}
			// $('.current').on('click', function() {
			// 	firstAnswer(this.getAttribute('answer-id'))
			// })
		}
	
	//On start button click, hide start button, the first timer at 40 seconds decrementing by 1 second

	$('#start').on('click', function () {
		$('#start').hide();
		runTimer();
		stats();
		beginQuiz();
		showQuestion ();
		showAnswers ();
	});

});
	
