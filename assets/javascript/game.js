//Creating global variables
var button1 = getRndInteger(1, 12);
var button2 = getRndInteger(1, 12);
var button3 = getRndInteger(1, 12);
var button4 = getRndInteger(1, 12);
var computerNumb = getRndInteger(19, 120);
var wins = 0;
var losses = 0;
var score = 0;

//This function contains all four button clicks.
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
    score = 0;
    $("#yourScore").text(score);
    $("#randomNumb").text(computerNumb);
}

function getRndInteger(min, max) {
    return Math.floor(Math.random() * (max - min)) + min;
}
// console.log(getRndInteger(19,120));

$(document).ready(function () {

    $("#randomNumb").text(computerNumb);

    $("#losses").text(losses);
    $("#wins").text(wins);

    clickButton();

});






