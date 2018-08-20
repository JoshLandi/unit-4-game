// variables
// ==============================================================================

var wins = 0;

var losses = 0;

var currentScore = 0;

var numberToReach = 0;

var crystal = {
    purple: {
        name: "purple",
        value: 0
    },
    blue: {
        name: "blue",
        value: 0
    },
    amber: {
        name: "amber",
        value: 0
    },
    clear: {
        name: "clear",
        value: 0
    },
};

    // Scores current/target
    
// ==============================================================================
//functions
// ==============================================================================
var getRandom = function(min, max) {
    return Math.floor(Math.random() * (max - min +1)) + min;
};

var numberToReach = getRandom(19, 120);
//Check for win
var checkWin = function() {

    if (currentScore === numberToReach) {
        alert("You Win! Good for you.");
        wins++
        $("#wins").html(wins);
        startGame();
    }
    
    else if (numberToReach < currentScore) {
        alert("You Lost! Try again.");
        losses++
        $("#losses").html(losses);
        startGame();
    };
};

var startGame = function() {
    // Resets
    currentScore = 0;
    numberToReach = getRandom(19, 120);

    crystal.purple.value = getRandom(1, 12);
    crystal.blue.value = getRandom(1, 12);
    crystal.amber.value = getRandom(1, 12);
    crystal.clear.value = getRandom(1, 12);
    //Change Html

    $("#scoreCount").html(currentScore);
    $("#numToReach").html(numberToReach);


    console.log("=========================");
    console.log("Target Score: " + numberToReach);
    console.log(currentScore);
    console.log(crystal.purple.value + " " + crystal.blue.value + " " + crystal.amber.value + " " + crystal.clear.value);
};

// Changing Scores
var addPoints = function (crystal) {

    currentScore = currentScore + crystal.value;

    $("#scoreCount").html(currentScore);

    checkWin();

    console.log("Score: " + currentScore);
};

// Reset game


// ==============================================================================
//main process
// ==============================================================================


startGame();


$("#purple").click(function() {
   addPoints(crystal.purple);
});

$("#blue").click(function() {
    addPoints(crystal.blue);
});

$("#amber").click(function() {
    addPoints(crystal.amber);
});

$("#clear").click(function() {
    addPoints(crystal.clear);
});


