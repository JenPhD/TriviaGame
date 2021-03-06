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
			img: '<img src="assets/images/durkheim.gif" alt="Emile Durkheim"/>'		
		},

		{
			quest: "Which sociologist once wrote: 'Religion is the opiate of the masses?'",
			answers: ["Karl Marx", "Max Weber", "Antonio Gramsci", "Auguste Comte", "W.E.B. DuBois"],
			correct: "Karl Marx",
			img: '<img src="assets/images/marx.gif" alt="Karl Marx"/>'
		},
		{
			quest: "Which sociologist wrote <i>Fighting Words</i>, arguing that the knowledge of 'outsiders within' is essential to understanding the power relations that makeup the matrix of domination?",
			answers: ["W.E.B. DuBois", "Karl Marx", "bell hooks", "Patricia Hill Collins", "Eduardo Bonilla Silva"],
			correct: "Patricia Hill Collins",
			img: '<img src="assets/images/collins.jpg" alt="Patricia Hill Collins"/>'
		},
		{
			quest: "Which sociologist coined the term 'culutral hegemony', arguing that one way that dominant groups retain their power is through the manipulation of ideas, beliefs, and pop culture?",
			answers: ["bell hooks", "Max Weber", "Karl Marx", "Eduardo Bonilla Silva", "Antonio Gramsci"],
			correct: "Antonio Gramsci",
			img: '<img src="assets/images/gramsci.jpg" alt="Antonio Gramsci"/>'
		}
	];

	var current = 0;//This is the index of the current question which begins at zero.
	var numCorrect = 0;//This is the count of the number of correct answers.
	var numIncorrect = 0;//This is the count of the numberof incorrect answers.
	var unanswered = 0;//This is the count of the number of questions unanswered when timer gets to zero.
	var seconds = 20;


	//Show the start button on page load or reload;
	window.onload = function () {
		$("#start").html('<button type="button" button class="btn btn-info">Start trivia game!</button>');
	}

	//Game process.
	//First thing that needs to happen is that the start button is hidden and the timer starts for the first question.
	//Run timer. The timer should be run when the current question and associated answers appear.
	
	function runTimer () {		
			clearInterval (timer);
			seconds = 20;
			timer = setInterval(function () {
				$('#timer').html('Timer: ' + seconds--);
				$('#timer').show();
				if (seconds === -1) {		
					console.log("inside" + seconds);
					$('#questions').hide();
					$('#answers').hide();
					unanswered++;				
					$('#check').html('The correct answer is: </b>' + questions[current].correct);
					$('#image').html(questions[current].img);
					$('#check').show();
					$('#image').show();
					current++;
					clearInterval(timer);
					setTimeout(showQuestion, 5000);
			} 

			} , 1000);
		//console.log("Please work");
		
	}
		
		function showQuestion () {
			$('#check').hide();
			$('#image').hide();
			if (current < questions.length) {
				//run timer
				runTimer();
				$('#questions').html(questions[current].quest);
				$('#questions').show();
				
			
				function showAnswers () {
					$('#answers').empty();
					for (i = 0; i < questions[current].answers.length; i++) {
						var newAnswers = $('<div/>')
						.addClass('answer col-sm-12')
						$(newAnswers).html('<span class="ans">' + questions[current].answers[i] + '</span>');
						$('#answers').append(newAnswers);
						$('#answers').show();
					}	
				}
				showAnswers();

		

				//display the next question after clicking on an answer
				$('.ans').on('click', function () {
					//after clicking on the answer, hide the timer.
					clearInterval(timer);
					$('#timer').hide();
					if(this.innerHTML === questions[current].correct) {
						//hide the question, timer, and answers.
						numCorrect++;
						$('#questions').hide();
						$('#answers').hide();	
						//display correct.
						$('#check').html('<b>Correct!</b>');
						$('#image').html(questions[current].img);
						$('#check').show();
						$('#image').show();
						current++;			
						  
					} else {
						numIncorrect++;
						//hide the question and answers.
						$('#questions').hide();
						$('#answers').hide();
						//display incorrect.
						$('#check').html('<b>Nope! The correct answer is: </b>' + questions[current].correct);
						$('#image').html(questions[current].img);
						$('#check').show();
						$('#image').show();
						current++;		
					}
					//console.log(numCorrect);
					//After clicking on an answer and seeing whether it is correct or not. 
				setTimeout(showQuestion, 5000);
				});	
			}

			else {
				$('#questions').hide();
				$('#answers').hide();
				$('#check').hide();
				$('#image').hide();
				$('#grade').show();
				$('#wrong').html('Correct: ' + numCorrect);
				$('#right').html('Incorrect: ' + numIncorrect);
				$('#noAnswer').html('Unanswered: ' + unanswered);
				
				setTimeout(reset, 5000);				
				
			}			
			
		}

		//reset game.
					function reset () {
						$('#start').show();
						$('#grade').hide ();
						$('#wrong').hide();
						$('#right').hide();
						$('#noAnswer').hide();
						current = 0;
						numCorrect = 0;
						numIncorrect = 0;
						unanswered = 0;				
					}		

		
			
			


	//start game with click on the start button	
	$('#start').on('click', function () {
		$('#start').hide();	
		//Start with the first question.	
		showQuestion();
	});//ends what happens when you click start
	
	

});//ending document ready.