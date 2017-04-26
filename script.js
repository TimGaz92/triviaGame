var userScore = 1;
	var correct = 0;
	var questionRoll = 1;
	var asked = [0];
	var i = 0;
	var timerNumber = 60;
  	var timerId;
  	var displayNumber;

			var interval = setInterval(function() {
   				timerNumber--;
   					$("#clock").html("seconds left: " + timerNumber);
    			if (timerNumber == 0) {
        		alert("time's up i'm afraid, you've gotten  " + correct + "question right");
        		clearInterval(interval);
    			}//end of it 
			}, 1000);// end of timer
$("#startBTN").on("click", function(){
		 // questionRoll = Math.floor((Math.random() * 5) + 1);	
		 $("#scoreText").text("Score = " + userScore);
//for loop to see if the question has already been asked
// for (var i = asked.length - 1; i >= 0; i--) 

 if (questionRoll === 1) {
 	console.log(" question roll: " + questionRoll);
 	$("#questionText").text("this is the new text for question ONE, written via JS");
 		$("#answerOneText").text("answer** changed by JS will go here");
 		 	$("#AnswerOneBTN").on("click", function(){
 				console.log("correct answer one -  question 1" );
 				 $("#scoreText").text("Score = 1");
 				questionRoll++;
 				asked.push(1);
 				// console.log(asked);

 			});//end of correct answer function
 		$("#answerTwoText").text("answer changed by JS will go here");
 			$("#answerTwoBTN").on("click", function(){
 				console.log("wrong answer 2 - question 1");
 				// questionRoll = Math.floor((Math.random() * 4) + 1);
 				// $("#scoreText").text("Score = " + userScore);
 				 asked.push(1);
 				// console.log(asked);
 			});
 		$("#answerThreeText").text("answer changed by JS will go here");
 			$("#answerThreeBTN").on("click", function(){
 				console.log("wrong answer 3 - question 1 ");
 				// questionRoll = Math.floor((Math.random() * 4) + 1);
 				// $("#scoreText").text("Score = " + userScore); 	
 				asked.push(1);
 				userScore = 0;				
 				// console.log(asked); 							
 			});
 		$("#answerFourText").text("answer changed by JS will go here");
 			$("#answerFourBTN").on("click", function(){
 				console.log("wrong answer 4 - question 1 ");
 				// questionRoll = Math.floor((Math.random() * 4) + 1);
 				// $("#scoreText").text("Score = " + userScore); 
 				asked.push(1);		
 				// console.log(asked); 								
 			});
 }//end of if statement
 else{

 }//end of question 1 

 if (questionRoll === 2) {
 	console.log(" question roll: " + questionRoll); 	
 	$("#questionText").text("this is the new text for question TWO, written via JS");
 		$("#answerOneText").text("answer changed by JS will go here");
 		 	$("#AnswerOneBTN").on("click", function(){
 				console.log("wrong answer 1 - question 2 ");
 				// userScore--;
 				// questionRoll = Math.floor((Math.random() * 4) + 1);
 				// console.log("new question question number "+ questionRoll);
 				// $("#scoreText").text("Score = " + userScore);
 				asked.push(2);		
 				// console.log(asked); 				
 			});//end of  answer function
 		$("#answerTwoText").text("answer changed by JS will go here");
 			$("#answerTwoBTN").on("click", function(){
 				console.log("wrong answer 2 - question 2 ");
 				 // userScore--;
 				 // questionRoll = Math.floor((Math.random() * 4) + 1);
 				 // console.log("new question question number "+ questionRoll);
 				 // $("#scoreText").text("Score = " + userScore); 	
 				asked.push(2);				
 				// console.log(asked);  				 
 			});
 		$("#answerThreeText").text("answer changed by JS will go here");
 			$("#answerThreeBTN").on("click", function(){
 				console.log("wrong answer 3 - question 2 ");
 				// userScore--;
 				// questionRoll = Math.floor((Math.random() * 4) + 1);
 				// console.log("new question question number "+ questionRoll);
 				// $("#scoreText").text("Score = " + userScore); 	
 				asked.push(2);			
 				// console.log(asked);  							
 			});
 		$("#answerFourText").text("answer** changed by JS will go here");
 			$("#answerFourBTN").on("click", function(){
 				console.log("correct answer 4 - question 2 ");
 				 $("#scoreText").text("Score = 2");
 				questionRoll++;
 				// questionRoll = Math.floor((Math.random() * 4) + 1);
 				// console.log("new question question number "+ questionRoll);
 				// $("#scoreText").text("Score = " + userScore); 
 				asked.push(2);
 				$("#scoreText").text("Score = 2");		
 				// console.log(asked);  								
 			});
 }//end of if statement
 else{

 }//end of question 2 

if (questionRoll === 3) {
	console.log(" question roll: " + questionRoll);
 	$("#questionText").text("this is the new text for question THREE, written via JS");
 		$("#answerOneText").text("answer changed by JS will go here");
 		 	$("#AnswerOneBTN").on("click", function(){
 				console.log("wrong answer 1 - question 3 ");
 				// questionRoll = Math.floor((Math.random() * 4) + 1);
 				// $("#scoreText").text("Score = " + userScore);
 				asked.push(3);
 				// console.log(asked);  				
 			});//end of  answer function
 		$("#answerTwoText").text("answer** changed by JS will go here");
 			$("#answerTwoBTN").on("click", function(){
 				console.log("correct answer 2 - question 3 ");
 				 $("#scoreText").text("Score = 3");
 				questionRoll++;
 				// questionRoll = Math.floor((Math.random() * 4) + 1);
 				// $("#scoreText").text("Score = " + userScore);
 				asked.push(3);
 				// console.log(asked);  				
 			});
 		$("#answerThreeText").text("answer changed by JS will go here");
 			$("#answerThreeBTN").on("click", function(){
 				console.log("wrong answer 3 - question 3"); 				
 				// userScore--;
 				// questionRoll = Math.floor((Math.random() * 4) + 1);
 				// $("#scoreText").text("Score = " + userScore); 	
 				asked.push(3);
 				// console.log(asked);  							
 			});
 		$("#answerFourText").text("answer changed by JS will go here");
 			$("#answerFourBTN").on("click", function(){
 				console.log("wrong answer 4 - question 3 ");		
 				// userScore--;
 				// questionRoll = Math.floor((Math.random() * 4) + 1);
 				// console.log("new question question number "+ questionRoll);
 				// $("#scoreText").text("Score = " + userScore); 
 				asked.push(3);
 				// console.log(asked);  								
 			});
 }//end of if statement
else{

}//end of question 3 
if (questionRoll === 4) {
	console.log(" question roll: " + questionRoll);
 	$("#questionText").text("this is the new text for question FOUR, written via JS");
 		$("#answerOneText").text("answer changed by JS will go here");
 		 	$("#AnswerOneBTN").on("click", function(){
 				console.log("wrong answer 1 - question 4 ");
 				// userScore--;
 				// questionRoll = Math.floor((Math.random() * 4) + 1);
 				// $("#scoreText").text("Score = " + userScore);
 				asked.push(4);
 				// console.log(asked);  				
 			});//end of  answer function
 		$("#answerTwoText").text("answer changed by JS will go here");
 			$("#answerTwoBTN").on("click", function(){
 				console.log("wrong answer 2 - question 4 ");
 				// userScore--;
 				// questionRoll = Math.floor((Math.random() * 4) + 1);
 				// console.log("new question question number "+ questionRoll);
 				// $("#scoreText").text("Score = " + userScore); 
 				asked.push(4);
 				// console.log(asked);  					
 			});
 		$("#answerThreeText").text("answer changed by JS will go here");
 			$("#answerThreeBTN").on("click", function(){
 				console.log("wrong answer 3 - question 4 ");
 				// userScore--;
 				// questionRoll = Math.floor((Math.random() * 4) + 1); 	
 				asked.push(4);
 				// console.log(asked);  							
 			});
 		$("#answerFourText").text("answer** changed by JS will go here");
 			$("#answerFourBTN").on("click", function(){
 				console.log("correct answer 4 - question 4 ");
 				$("#scoreText").text("Score = 4");
 				correct++;
 				// questionRoll = Math.floor((Math.random() * 4) + 1);
 				// $("#scoreText").text("Score = " + userScore); 		
 				asked.push(4);
 				// console.log(asked);  									
 			});
 }//end of if statement
 else{

 }// end of question 4 
if (questionRoll === 5) {
	console.log(" question roll: " + questionRoll);
 	$("#questionText").text("this is the new text for question FIVE, written via JS");
 		$("#answerOneText").text("answer** changed by JS will go here");
 		 	$("#AnswerOneBTN").on("click", function(){
 				console.log("correct answer one -  question 5" );
 				 $("#scoreText").text("Score = 5");
 				questionRoll = 6;
 				asked.push(5);
 			});//end of correct answer function
 		$("#answerTwoText").text("answer changed by JS will go here");
 			$("#answerTwoBTN").on("click", function(){
 				console.log("wrong answer 2 - question 5");
 				 asked.push(5);
 			});
 		$("#answerThreeText").text("answer changed by JS will go here");
 			$("#answerThreeBTN").on("click", function(){
 				console.log("wrong answer 3 - question 5 ");	
 				asked.push(5);							
 			});
 		$("#answerFourText").text("answer changed by JS will go here");
 			$("#answerFourBTN").on("click", function(){
 				console.log("wrong answer 4 - question 5 ");
 				asked.push(5);								
 			})
 }//end of if statement
else{
}// end of question 5 

if (questionRoll === 6) {
 	console.log(" question roll: " + questionRoll);	
 	$("#questionText").text("this is the new text for question SIX, written via JS");
 		$("#answerOneText").text("answer changed by JS will go here");
 		 	$("#AnswerOneBTN").on("click", function(){
 				console.log("wrong answer 1 - question 6 ");
 				asked.push(6);				
 			});//end of  answer function
 		$("#answerTwoText").text("answer changed by JS will go here");
 			$("#answerTwoBTN").on("click", function(){
 				console.log("wrong answer 2 - question 6 ");
 				asked.push(6);				 				 
 			});
 		$("#answerThreeText").text("answer changed by JS will go here");
 			$("#answerThreeBTN").on("click", function(){
 				console.log("wrong answer 3 - question 6 ");	
 				asked.push(6);			 							
 			});
 		$("#answerFourText").text("answer** changed by JS will go here");
 			$("#answerFourBTN").on("click", function(){
 				console.log("correct answer 4 - question 6 ");
 				 $("#scoreText").text("Score = 6");
 				questionRoll = 7;
 				asked.push(6);
 				$("#scoreText").text("Score = 6");									
 			});
} //end of if statement
else{
}// end of question 6 
if (questionRoll === 7) {
 	console.log(" question roll: " + questionRoll);	
 	$("#questionText").text("this is the new text for question SEVEN, written via JS");
 		$("#answerOneText").text("answer changed by JS will go here");
 		 	$("#AnswerOneBTN").on("click", function(){
 				console.log("wrong answer 1 - question 7 ");
 				asked.push(7);				
 			});//end of  answer function
 		$("#answerTwoText").text("answer** changed by JS will go here");
 			$("#answerTwoBTN").on("click", function(){
 				console.log("correct answer 2 - question 7 ");
 				 $("#scoreText").text("Score = 7");
 				questionRoll++;
 				asked.push(7);			
 			});
 		$("#answerThreeText").text("answer changed by JS will go here");
 			$("#answerThreeBTN").on("click", function(){
 				console.log("wrong answer 3 - question 3"); 					
 				asked.push(7);
						
 			});
 		$("#answerFourText").text("answer changed by JS will go here");
 			$("#answerFourBTN").on("click", function(){
 				console.log("wrong answer 4 - question 7 ");		
 				asked.push(7);								
 			});
 }//end of if statement
else{
}//end of question 7
if (questionRoll === 8) {
 	console.log(" question roll: " + questionRoll);	
 	$("#questionText").text("this is the new text for question EIGHT, written via JS");
 		$("#answerOneText").text("answer changed by JS will go here");
 		 	$("#AnswerOneBTN").on("click", function(){
 				console.log("wrong answer 1 - question 8 ");
 				asked.push(8);				
 			});//end of  answer function
 		$("#answerTwoText").text("answer changed by JS will go here");
 			$("#answerTwoBTN").on("click", function(){
 				console.log("wrong answer 2 - question 8 ");
 				asked.push(8);					
 			});
 		$("#answerThreeText").text("answer changed by JS will go here");
 			$("#answerThreeBTN").on("click", function(){
 				console.log("wrong answer 3 - question 8 ");
 				asked.push(8);							
 			});
 		$("#answerFourText").text("answer** changed by JS will go here");
 			$("#answerFourBTN").on("click", function(){
 				console.log("correct answer 4 - question 8 ");
 				$("#scoreText").text("Score = 8");
 				correct++;		
 				questionRoll ++;
 				asked.push(8);									
 			});
 }//end of if statement
 else{
 }// end of question 8

if (questionRoll === 9) {
 	console.log(" question roll: " + questionRoll);	
 	$("#questionText").text("this is the new text for question NINE, written via JS");
 		$("#answerOneText").text("answer changed by JS will go here");
 		 	$("#AnswerOneBTN").on("click", function(){
 				console.log("wrong answer 1 - question 9 ");
 				asked.push(9);				
 			});//end of  answer function
 		$("#answerTwoText").text("answer changed by JS will go here");
 			$("#answerTwoBTN").on("click", function(){
 				console.log("wrong answer 2 - question 9 ");
 				asked.push(9);				 				 
 			});
 		$("#answerThreeText").text("answer changed by JS will go here");
 			$("#answerThreeBTN").on("click", function(){
 				console.log("wrong answer 3 - question 9 ");	
 				asked.push(9);			 							
 			});
 		$("#answerFourText").text("answer** changed by JS will go here");
 			$("#answerFourBTN").on("click", function(){
 				console.log("correct answer 4 - question 9 ");
 				 $("#scoreText").text("Score = 9");
 				questionRoll++;
 				asked.push(9);								
 			});
} //end of if statement
else{
}// end of question 9
if (questionRoll >= 10) {
 	console.log(" question roll: " + questionRoll);	
 	$("#questionText").text("this is the new text for question TEN, written via JS");
 		$("#answerOneText").text("answer** changed by JS will go here");
 		 	$("#AnswerOneBTN").on("click", function(){
 				console.log("correct answer one -  question 10" );
 				 $("#scoreText").text("Score = 10");
 				asked.push(10);
 						$("#questionText").text("you got 10/10 right, congratulations");
						$("#answerFourText").text("");
						$("#answerThreeText").text("");
						$("#answerTwoText").text("");
						$("#answerOneText").text("");
 			});//end of correct answer function
 		$("#answerTwoText").text("answer changed by JS will go here");
 			$("#answerTwoBTN").on("click", function(){
 				console.log("wrong answer 2 - question 10");
 				 asked.push(10);
 			});
 		$("#answerThreeText").text("answer changed by JS will go here");
 			$("#answerThreeBTN").on("click", function(){
 				console.log("wrong answer 3 - question 10 ");	
 				asked.push(10);							
 			});
 		$("#answerFourText").text("answer changed by JS will go here");
 			$("#answerFourBTN").on("click", function(){
 				console.log("wrong answer 4 - question 10 ");
 				asked.push(10);								
 			})
 }//end of if statement
else{
}// end of question 10 


 }); 

//problem with this is thay it's running every possible iteration of itself at the same time. 
//ie it's asked questions 1-4 all at once. 
