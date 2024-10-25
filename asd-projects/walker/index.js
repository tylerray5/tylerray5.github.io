/* global $, sessionStorage */

$(document).ready(runProgram); // wait for the HTML / CSS elements of the page to fully load, then execute runProgram()

function runProgram() {
  ////////////////////////////////////////////////////////////////////////////////
  //////////////////////////// SETUP /////////////////////////////////////////////
  ////////////////////////////////////////////////////////////////////////////////

  // Constant Variables
  var FRAME_RATE = 60;
  var FRAMES_PER_SECOND_INTERVAL = 1000 / FRAME_RATE;
  var KEY = {
    ENTER: 13,
    LEFT: 37,
    RIGHT: 39,
    UP: 38,
    DOWN: 40,
  };
  // Game Item Objects

  // one-time setup
  var interval = setInterval(newFrame, FRAMES_PER_SECOND_INTERVAL); // execute newFrame every 0.0166 seconds (60 Frames per second)
  $(document).on("keydown", handleKeyDown); // change 'eventType' to the type of event you want to handle
  $(document).on("keyup", handleKeyup);
  var walker = {
    positionX: 5,
    positionY: 5,
    speedX: 5,
    speedY: 5,
  };
  //var positionY =

  ////////////////////////////////////////////////////////////////////////////////
  ///////////////////////// CORE LOGIC ///////////////////////////////////////////
  ////////////////////////////////////////////////////////////////////////////////

  /* 
  On each "tick" of the timer, a new frame is dynamically drawn using JavaScript
  by calling this function and executing the code inside.
  */
  function newFrame(event) {
    if (Event.which === KEY.LEFT) {
      walker.speedX = 5;
    }
    if (Event.which === KEY.RIGHT) {
      walker.speedX = 5;
    }
    if (Event.which === KEY.DOWN) {
      walker.speedY = 5;
    }
    if (Event.which === KEY.UP) {
      walker.speedY = 5;
    }
  }

  /* 
  Called in response to events.
  */
  function handleKeyDown(event) {
    if (event.which === KEY.LEFT) {
      console.log("LEFT pressed");
    }
    if (event.which === KEY.RIGHT) {
      console.log("RIGHT pressed");
    }
    if (event.which === KEY.UP) {
      console.log("UP pressed");
    }
    if (event.which === KEY.DOWN) {
      console.log("DOWN pressed");
    }
  }
  function repositionGameItem() {
    walker.coordinateX = walker.coordinateX + walker.speedX;
    walker.coordinateY = walker.coordinateY + walker.speedY;
  }
  function redrawGameItem(newFrame) {
    $("#walker").css("left" , walker.speedX);
    $("#walker").css("up", walker.speedY)
  }
  ////////////////////////////////////////////////////////////////////////////////
  ////////////////////////// HELPER FUNCTIONS ////////////////////////////////////
  ////////////////////////////////////////////////////////////////////////////////

  function endGame() {
    // stop the interval timer
    clearInterval(interval);

    // turn off event handlers
    $(document).off();
  }
}
