//Creating global variables
var button1 = getRndInteger(1, 12);
var button2 = getRndInteger(1, 12);
var button3 = getRndInteger(1, 12);
var button4 = getRndInteger(1, 12);
var computerNumb = getRndInteger(19, 120);
var wins = 0;
var losses = 0;
var score = 0;
var buttonClicked = true;


function startGame() {
    var wins = 0;
    var losses = 0;
    var score = 0;
    var button1 = getRndInteger(1, 12);
    var button2 = getRndInteger(1, 12);
    var button3 = getRndInteger(1, 12);
    var button4 = getRndInteger(1, 12);
    var computerNumb = getRndInteger(19, 120);
    var buttonClicked = true;
}


function resetGame() {
    var button1 = getRndInteger(1, 12);
    var button2 = getRndInteger(1, 12);
    var button3 = getRndInteger(1, 12);
    var button4 = getRndInteger(1, 12);
    var computerNumb = getRndInteger(19, 120);
    var wins = 0;
    var losses = 0;
    var score = 0;
}

function getRndInteger(min, max) {
    return Math.floor(Math.random() * (max - min)) + min;
}
// console.log(getRndInteger(19,120));

$(document).ready(function (){


    $("#box1").on("click", function () {
        button1 += $(this).val();
        });


        if (score === computerNumb) {
            $("#youWin").text()
          }
      
          else if (score >= computerNumb) {
            
          }


});













//Pseudo Code 
// When the game is loaded there should be a random computer score
//At the same time all four buttons should generate a random hidden score
//When user clicks a button the random scoreshould apply to yourScore
//User continues to click buttons to try and match the score 