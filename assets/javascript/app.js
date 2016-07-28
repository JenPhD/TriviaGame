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

	];

	index = 0;
	numCorrect = 0;
	numIncorrect = 0;
	unanswered = 0;
	
	//Show the start button on page load or reload;
	window.onload = function () {
		$("#start").html('<button type="button" button class="btn btn-danger">Start game!</button>');
	}

	//reset game stats;
	function stats () {
		var index = 0;
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
				beginQuiz(this.getAttribute('quest-id'))
			})
		}	
	}

		function showQuestion () {
			var $newQuestion = $('<div>')
				.addClass('question col-sm-12')
				.html(questions[index].quest);
			$('#questions').html($newQuestion);

		}

		//Add answers

	
		function showAnswers () {
			for (j = 0; j < questions[index].answers.length; j++) {
			var $newAnswers = $('<div/>')
				.addClass('answer col-sm-12')
				.attr('answer-id', j)
				.html('<span class="ans">' + questions[index].answers[j] + '</span>');
				$('#answers').append($newAnswers);

			}
			$('.ans').on('click', function() {
				console.log("answering");
				console.log(this.innerHTML);
				if(this.innerHTML === questions[index].correct) {
					numCorrect++;
				} else {
					numIncorrect++;
				}
				
				showQuestion();
			});		
		}	
	

	console.log(numCorrect);
	//On start button click, hide start button, the first timer at 40 seconds decrementing by 1 second

	$('#start').on('click', function () {
		$('#start').hide();
		runTimer();
		stats();
		beginQuiz();
		showQuestion (0);
		showAnswers ();
	})

});
	
