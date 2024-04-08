// findSum
function findSum(arr) {
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    sum += arr[i];
  }
  return sum;
}

function findSum2(arr) {
  return arr.reduce((x, y) => x + y, 0);
}

// subtractNumbers
const subtractNumbers = (firstNum, secondNum) => firstNum - secondNum;

// multiplyNumbers
const multiplyNumbers = (x, y) => x * y;

// devideNumbers
function devideNumbers(x, y) {
  if (y != 0) {
    return x / y;
  } else {
    throw new Error("Do not input 0");
  }
}

const arr = [2, 3, 4];

// findSum
const sumNum = findSum(arr);
console.log(sumNum);
console.log(findSum2(arr));

// subtractNumbers
console.log(subtractNumbers(arr[0], arr[1]));

// multiplyNumbers
console.log(multiplyNumbers(arr[2], arr[0]));

// devideNumbers
try {
  console.log(devideNumbers(sumNum, arr[2]));
} catch (error) {
  console.log(error.message);
}
