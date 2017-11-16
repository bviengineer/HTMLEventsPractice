//LESSON INSTRUCTIONS:
	//1. Create a new HTMl event. 
	//2. Create a function that runs with this new HTML event.
	//3. Have the function execute any code that changes content in the DOM
	//4. Google other HTML events.
	//5. Try creating different events based on other event types, like onmouseover, or onload.


								//APP CODE

//Global Variables for accessiblity by all functions
var sentences = ["I am sentence one", "I am sentence two", "I am sentence three", "I am sentence four"];
var mainDiv = document.querySelector("#main");


//This function will add styling to the random sentence being displayed (created to follow DRY principles)
function styleSentence(){
	mainDiv.style.color = "red";
	mainDiv.style.fontSize = "x-large";
}

//This function will modify the innerHTML element and display it on the page
function changeContentDiv(){
	var randomSentence = sentences[Math.floor(Math.random() * sentences.length)];
	
	for(var k = 0; k < sentences.length; k++){
		if(mainDiv.innerHTML = randomSentence){ 
			// mainDiv.innerHTML = "";
			mainDiv.innerHTML = randomSentence;
			console.log(randomSentence);
			styleSentence();
			
		} else if(mainDiv.innerHTML = ""){
			mainDiv.innerHTML = randomSentence;
			console.log(randomSentence);			
			styleSentence();
		}	
	}
}	

