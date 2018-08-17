// variables
// ==============================================================================
var counter = 0;

var playerNumber = 0;

var wins = 0;

var losses = 0;

var numberToReach = Math.floor(Math.random() * 100) + 20;

var numberOptions = Math.floor(Math.random() * 12) + 1;



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
}

// ==============================================================================
//functions
// ==============================================================================


// ==============================================================================
//main process
// ==============================================================================

$("#numToReach").text(numberToReach);



$(".crystalImage").on("click"), function() {

}
