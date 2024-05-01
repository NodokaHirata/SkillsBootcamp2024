// Practical Task 2 display the current time

// Get current date
const getTime = () => {
  let currentTime = new Date();
  let day = String(currentTime.getDate()).padStart(2, "0"); // Use padStart method to add 0 if a number is single
  let month = String(currentTime.getMonth() + 1).padStart(2, "0"); // +1 as months start with 0
  let year = currentTime.getFullYear();
  let hour = String(currentTime.getHours()).padStart(2, "0");
  let min = String(currentTime.getMinutes()).padStart(2, "0");
  let sec = String(currentTime.getSeconds()).padStart(2, "0");
  let clock = `Current time: ${day}/${month}/${year} ${hour}:${min}:${sec}`;
  console.log("time", clock);
  document.getElementById("time").innerHTML = clock;
};

let timerId;

const startClock = () => {
  timerId = setInterval(getTime, 1000);
};

const stopClock = () => {
    clearInterval(timerId);
}

// Add event listner into the buttons
document.getElementById("stop").addEventListener("click", stopClock);
document.getElementById("restart").addEventListener("click", startClock);

startClock();