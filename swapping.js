// Method No.1: using a for loop
const inputedNum = prompt("Entre a number of at least 3 digits.");
// Convert into an array
const numArray = inputedNum.split("").map(Number);
// Make a copy
let swappedNum = [...numArray];
let secondNum;
let lastNum;

for (let i = 0; i < numArray.length; i++) {
  if (i === 1) {
    secondNum = numArray[i]; 
  } else if (i === numArray.length - 1) {
    lastNum = numArray[i];
  }
}

swappedNum[1] = lastNum;
swappedNum[swappedNum.length - 1] = secondNum;

console.log("The original number: ", inputedNum);
console.log("The new number: ", swappedNum.join(""));


// Method No.2 more efective way
// let inputedNum;
// do {
//     inputedNum = prompt("Entre a number of at least 3 digits.");
// } while (inputedNum.length < 3 || isNaN(Number(inputedNum)));

// // Convert into an array
// const numArray = inputedNum.split("").map(Number);
// // Make a copy
// let swappedNum = [...numArray];

// if (numArray.length >= 3){
//     let secondNum = numArray[1];
//     swappedNum[1] = numArray[numArray.length -1];
//     swappedNum[swappedNum.length -1] = secondNum;
// } 

// console.log("The original number: ", inputedNum);
// console.log("The new number: ", swappedNum.join(""));