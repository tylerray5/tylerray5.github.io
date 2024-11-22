// This is a small program. There are only two sections. This first section is what runs
// as soon as the page loads.
$(document).ready(function () {
  render($("#display"), image);
  $("#apply").on("click", applyAndRender);
  $("#reset").on("click", resetAndRender);
});

/////////////////////////////////////////////////////////
//////// event handler functions are below here /////////
/////////////////////////////////////////////////////////

// this function resets the image to its original value; do not change this function
function resetAndRender() {
  reset();
  render($("#display"), image);
}

// this function applies the filters to the image and is where you should call
// all of your apply functions
function applyAndRender() {
  // Multiple TODOs: Call your apply function(s) here
  applyFilter(reddify);

  // do not change the below line of code
  render($("#display"), image);
}

/////////////////////////////////////////////////////////
// "apply" and "filter" functions should go below here //
/////////////////////////////////////////////////////////

// TODO 1, 2 & 4: Create the applyFilter function here
function applyFilter(filterFunction) {
  for (var i = 0; i < image.length; i++) {
    for (var j = 0; j < image[i].length; j++) {
      var rgbString = image[i][j];
      var rgbNumbers = rgbStringToArray(rgbString);
      //console.log(rgbNumbers);
      filterFunction(rgbNumbers);
      //rgbNumbers[RED] = 255;
      rgbString = rgbArrayToString(rgbNumbers);
      image[i][j] = rgbString;
    }
  }
}

// TODO 7: Create the applyFilterNoBackground function

// TODO 5: Create the keepInBounds function
function keepInBounds(bound) {
  bound = Math.max(0, bound);
  bound = Math.min(255, bound);
  return bound;
}
//   if (bound < 0){
// return 0
//   }
//   if (bound > 255){
// return 255
//   }
//   if (bound > 0 < 255){
//    return  CSSNumericValue
//   }
// }

// TODO 3: Create reddify function
function reddify(array) {
  array[RED] = 200;
}
// TODO 6: Create more filter functions
function decreaseBlue(array) {
  array[BLUE] = keepInBounds(array[BLUE] - 50);
}
function increaseGreenByBlue(pit){

  pit [1] + keepInBounds (pit[2])
}
// CHALLENGE code goes below here
