console.log("I am at the top of my file");
var timerEl = document.getElementById("timer");
var timeLeft = 60;
// Helper Functions
function show(idToShow) {
    var element = document.getElementById(idToShow);
    element.classList.remove("hidden");
}

function hide(idToHide) {
    var element = document.getElementById(idToHide);
    element.classList.add("hidden"); 
}

function advance(idToHide, idToShow) {
    hide(idToHide);
    show(idToShow);
}

// Start Page
var startButton = document.querySelector("#button");


console.log("I am about to add an event listener to my button");
startButton.addEventListener("click", function() {
    var timeInterval = setInterval(function() {
        if (timeLeft > 1) {
            timerEl.textContent = timeLeft + " seconds remaining";
            timeLeft --;
        } else if (timeLeft === 1) {
            timerEl.textContent = timeLeft + " second remaining";
            timeLeft --;
        } else {
            timerEl.textContent = "";
            clearInterval(timeInterval);
        }
    }, 1000);

    console.log("I am inside my function");
    advance("start-page", "question1");
    console.log("I am at the end of my function");
});

// Setup Questions
function setupAdvanceNextQuestion(currentQuestionQuerySelector, currentPageId, nextPageId) {
    var answerItems = document.querySelectorAll(currentQuestionQuerySelector);
    for (var i=0; i < answerItems.length; i++) {
        var answer = answerItems[i];
        answer.addEventListener("click", function() {
            // Advance to next
            advance(currentPageId, nextPageId);
        });
    }    
};

setupAdvanceNextQuestion(".q1", "question1", "question2");
setupAdvanceNextQuestion(".q2", "question2", "question3");
setupAdvanceNextQuestion(".q3", "question3", "game-over");

var wrongItems = document.querySelectorAll(".wrong");
console.log(wrongItems);
for (var i=0; i < wrongItems.length; i++) {
    var wrongItem = wrongItems[i];
    console.log(wrongItem);
    wrongItem.addEventListener("click", function() {
        timeLeft -= 5;
        // TODO Need to deduct from timer for wrong answers
        // TODO Add wrong feedback
        alert('wrong');
    });
}

var rightItems = document.querySelectorAll(".right");
console.log(rightItems);
for (var i=0; i < rightItems.length; i++) {
    var rightItem = rightItems[i];
    console.log(rightItem);
    rightItem.addEventListener("click", function() {
        // TODO Add to score
        // TODO Add right feedback
        alert('right');
    });
}
