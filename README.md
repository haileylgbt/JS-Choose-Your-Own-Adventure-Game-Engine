# JS-Choose-Your-Own-Adventure-Game-Engine
Easily make a CYOA game to put up on the web!
# Introduction
So, you want to make a choose-your-own-adventure game, eh? Not to mention you want to publish it to the world-wide web (WWW) so your family, friends and Justin Beiber fans (like yourself) can play it, eh? Well you're in luck! Today, I will walk you through this documentation as if it was a tutorial. We will be covering:
* Storytelling
* Desicion making (actually making what people have to make a descision on)
* Displaying stats (HP, Cool points, etc.)
* Publising your game
* And much more!
# First steps
Now that you're all hyped up about this, where do you start? Well, there are many methods of getting started as a matter of fact. Saying that there is a lot of ways, I'll just tell you the best, most efficient and bug-free way of getting started.
## Installation
1. Go to the main page of this repo and click on the big green button saying [Clone or download v].
2. You will be presented with 2 options. For now, click on 'Download ZIP'.
3. Wait for the download to finish............still going.........ding! It's done!
4. Unzip the zip file with your favourite archive manager. Personally, I prefer 7-Zip.
5. And you're done! All the files you need are ready to go!
## What's inside a .zip?
At this point you should have 3 files:
* README.md (This)
* LICENSE (A file saying you can make a game with this, just don't profit from it)
* blank game.html (The most important part!)
We will be doing everything in blank game.html as it contains the code that simplifies making this game and will save you a LOT of time! So without further a-do, lets get started!
# Stop, coding time!
In this section we will be looking at how to make the game itself, so pay attention!
## Meet the functions
In JavaScript, functions are a single line of code that contains a lot of other code to simplify your life a lot. When making your game, there really should be a reason in which you should define more functions as there are functions defined for you. Let me show you them now!
### Game Dialogue
```js
// Behind the scenes:
function gameDialogue(string) {
	alert(string);
}

// Usage:
gameDialogue("You wake up, knowing it was all a dream!");
```
This is probably the most important and mostly used function in the engine as it displays dialouge that you progress through by pressing 'Ok'.

### Game Decision (Yes or No)
```js
// Behind the scenes:
function gameDecisionYN(question, yOutcome, nOutcome) {
	var userAnswer = prompt(question);
	
	if (userAnswer === "yes") {
		gameDialogue(yOutcome);
	} else {
		gameDialogue(nOutcome);
	}
}

// Usage:
gameDecisionYN("Wanna hang?", "Sweet!", "Bummer...")
```
