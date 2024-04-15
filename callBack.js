// Setting variables to hold the intervalID
let intervalID;
// counter
let counter = 1;

// intervalID will be stored when this is executed
let startCounter = function () {
  intervalID = setInterval(function () {
    console.log(counter++);
  }, 1000);
};

// Use intervalID to clear intervals
function stopCounter() {
  clearInterval(intervalID);
}

let startButton = document.getElementById("start");
let stopButton = document.getElementById("stop");

// Execute the startCounter function when the start button is clicked
startButton.addEventListener("click", startCounter);

// Execute the stopCounter function when the stop button is clicked
stopButton.addEventListener("click", stopCounter);
