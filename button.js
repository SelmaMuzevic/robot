var five = require("johnny-five");

var board = new five.Board();

board.on("ready", function() {

    // Create a new `button` hardware instance.
    // This example allows the button module to
    // create a completely default instance
    console.log("Board ready");

    var button = new five.Button({
        pin: "A7",
        controller: "TINKERKIT",
        invert: true
    });

    button.on("press", function() {
        console.log("pressed");
    });

    button.on("release", function() {
        console.log("released");
    });

    button.on("hold", function() {
        console.log("held");
    });

});