
var breakingBadQuestions = [
	{
	 question: "What state does Breaking Bad take place in?",
	 choices: ["Phoenix", "Albequrque", "Denver", "Los Angeles" ],
	 validAnswer: 1
	}, 

	{
	 question:"What subject does Walt teach?",
	 choices: ["Chemistry", "Biology", "Physics", "Mathematics"],
	 validAnswer: 0
	}, 

	{
	 question:"What is Marie's favorite color?",
	 choices: ["Pink", "Red", "Purple", "Green"],
	 validAnswer: 2
	},

	{
	 question:"What drug does Jane introduce to Jesse?",
	 choices: ["Marijuana", "Heroin", "Meth", "Cocaine"],
	 validAnswer: 1
	},

	{
	 question:"How old is Walt when he is diagnosed with cancer?",
	 choices: ["50", "40", "60", "55"],
	 validAnswer: 0
	},

	{
	 question:"What drink does Gale try to perfect?	",
	 choices: ["Beer", "Tea", "Coffee", "Soda"],
	 validAnswer: 2
	},

	{
	 question:"What is Walt Jr.'s first alcoholic drink?",
	 choices: ["Vodka", "Wine", "Tequila", "Whiskey"],
	 validAnswer: 2
	},

	{
	 question:"What does Marie give Skyler at the baby shower?",
	 choices: ["Bracelet", "Clothes", "Stroller", "Tiara"],
	 validAnswer: 3
	}
];

var counter = 30;
var timer;

function countDownTimer(){
	console.log("here ");
	if (counter === 0) {
    	$("#quizAreaTimer").html("<h1>You are out of time!!</h1>");
    	evaluateAnswers();
    }
    else if (counter > 0) {
      counter--;
      $("#quizAreaTimer").html(counter);
    }

}



function playGame(){
	$("#startGame").empty();

	

	//console.log("USER CLICKED START BUTTON");

	for (i =0; i< breakingBadQuestions.length; i++){

		$("#quizArea").append(breakingBadQuestions[i].question);
		$("#quizArea").append("<br>");
		for (j=0; j<breakingBadQuestions[i].choices.length; j++){
	    	
	    	var questionAnswer = $("<input>");
	    	questionAnswer.attr("type", "radio");
	    	questionAnswer.attr("name", i);
	    	questionAnswer.attr("value", breakingBadQuestions[i].choices[j]);
	    	$("#quizArea").append(questionAnswer);
	    	$("#quizArea").append(breakingBadQuestions[i].choices[j]);
	    }
	    $("#quizArea").append("<br><br>");
	}

	var submitAnswers = $("<input>");
	submitAnswers.attr("type", "submit");
	submitAnswers.attr("value", "Submit");
	$("#quizArea").append(submitAnswers);

	$(submitAnswers).on("click" ,function() {
		clearInterval(timer);
		evaluateAnswers();
 		
	});

};

function evaluateAnswers(){
	console.log("USER SUBMITTED HIS ANSWERS");
	var correctAnswers = 0;
	var wrongAnswers = 0;
	var noAnswer = 0;

	for (i =0; i< breakingBadQuestions.length; i++){
		for (j=0; j<breakingBadQuestions[i].choices.length; j++){
			var value = $("input[name="+i+"]:checked").val();
			var location = breakingBadQuestions[i].choices.indexOf(value);
		}
		console.log("QUESTION " + i + " VALUE = " + value + " INDEX LOCATION = " + location);

		var correctAnswer = breakingBadQuestions[i].validAnswer;
		console.log("Correct answer is at " + correctAnswer);
		if (correctAnswer === location){
			correctAnswers++;
		}
		else if (location === -1){
			noAnswer++;
		}
		else {
			wrongAnswers++;
		}

	}

	$("#quizArea").empty();
	
	$("#quizArea").append("<h1>User correct Answers = " + correctAnswers + "</h1>");
	$("#quizArea").append("<h1>User wrong Answers = " + wrongAnswers + "</h1>");
	$("#quizArea").append("<h1> User no Answer = " + noAnswer + "</h1>");
	
	console.log("User correct Answers = " + correctAnswers);
	console.log("User wrong Answers = " + wrongAnswers);
	console.log("User no answer = " + noAnswer);

	var PlayAgain = $("<input>");
	PlayAgain.attr("type", "submit");
	PlayAgain.attr("value", "Play again!!");
	$("#quizArea").append(PlayAgain);

	$(PlayAgain).on("click" ,function() {
		$("#quizArea").empty();
		$("#quizAreaTimer").empty();
		counter = 30;
		timer = setInterval(countDownTimer, 1000);
 		playGame();



	});


};

