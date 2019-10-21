//Creating global variables
var button1 = getRndInteger(1, 12);
var button2 = getRndInteger(1, 12);
var button3 = getRndInteger(1, 12);
var button4 = getRndInteger(1, 12);
var computerNumb = getRndInteger(19, 120);
var wins = 0;
var losses = 0;
var score = 0;

// function startGame() {
//     var wins = 0;
//     var losses = 0;
//     var score = 0;
//     var button1 = getRndInteger(1, 12);
//     var button2 = getRndInteger(1, 12);
//     var button3 = getRndInteger(1, 12);
//     var button4 = getRndInteger(1, 12);
//     var computerNumb = getRndInteger(19, 120);
// }

function clickButton() {
    $("#box1").on("click", function () {
        score = score + button1;
        $("#yourScore").text(score);

        if (score == computerNumb) {
            wins++;
            $("#wins").text(wins);
            resetGame();
        }
    
        else if (score > computerNumb) {
            losses++;
            $("#losses").text(losses);
            resetGame();
        }
    


    });

    $("#box2").on("click", function () {
        score = score + button2;
        $("#yourScore").text(score);

        if (score == computerNumb) {
            wins++;
            $("#wins").text(wins);
            resetGame();
        }
    
        else if (score > computerNumb) {
            losses++;
            $("#losses").text(losses);
            resetGame();
        }
    });

    $("#box3").on("click", function () {
        score = score + button3;
        $("#yourScore").text(score);
        if (score === computerNumb) {
            wins++;
            $("#wins").text(wins);
            resetGame();
        }
    
        else if (score > computerNumb) {
            losses++;
            $("#losses").text(losses);
            resetGame();
        }
    });

    $("#box4").on("click", function () {
        score = score + button4;
        $("#yourScore").text(score);
        if (score == computerNumb) {
            wins++;
            $("#wins").text(wins);
            resetGame();
        }
    
        else if (score > computerNumb) {
            losses++;
            $("#losses").text(losses);
            resetGame();
        }
    });
}


function resetGame() {
     button1 = getRndInteger(1, 12);
     button2 = getRndInteger(1, 12);
     button3 = getRndInteger(1, 12);
     button4 = getRndInteger(1, 12);
     computerNumb = getRndInteger(19, 120);
     wins = 0;
     losses = 0;
     score = 0;
    $("#yourScore").text(score);
    $("#randomNumb").text(computerNumb);
}

function youWon() {
    $("#youWin").text("GOOD JOB!");
    wins++;
    $("#youWin").text(wins);
}

function youLost() {
    $("#youLose").text("NOT A VERY GOOD JOB!");
    losses++;
    $("#youLose").text(losses);
}


function getRndInteger(min, max) {
    return Math.floor(Math.random() * (max - min)) + min;
}
// console.log(getRndInteger(19,120));

$(document).ready(function () {

    $("#randomNumb").text(computerNumb);

    clickButton();



});













//Pseudo Code 
// When the game is loaded there should be a random computer score
//At the same time all four buttons should generate a random hidden score
//When user clicks a button the random scoreshould apply to yourScore
//User continues to click buttons to try and match the score 