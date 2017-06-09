function gameDialogue(string) {
	alert(string);
}

function gameDescisionYN(question, yOutcome, nOutcome) {
	var userAnswer = prompt(question);
	
	if (userAnswer === "yes") {
		gameDialogue(yOutcome);
	} else {
		gameDialogue(nOutcome);
	}
}

