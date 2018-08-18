// variables
// ==============================================================================
var counter = 0;

var playerNumber = 0;

var wins = 0;

var losses = 0;

var numberToReach = Math.floor(Math.random() * 100) + 20;



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
    var currentScore = 0
    var numberToReach = Math.floor(Math.random() * 100) + 20;
    
// ==============================================================================
//functions
// ==============================================================================


// ==============================================================================
//main process
// ==============================================================================

$("#numToReach").text(numberToReach);



$(".crystalImage").on("click"), function() {

}
