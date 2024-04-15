// Colour array
const arr = [
  "jetblack",
  "green",
  "lightblue",
  "red",
  "emerald",
  "blue",
  "orange",
  "skyblue",
  "indigo",
  "caramelbrown",
];

// Return a new array after executing a callback function to each value of the arr
let myFilterFunction = (arr) => (fn) => {
  const newArr = [];
  for (let i = 0; i < arr.length; i++) {
    if (fn(arr[i])) {
      newArr.push(arr[i]);
    }
  }
  return newArr;
};

// A callback function returns true when a length of a value in the array equals to 6
const executeFillerFunc = myFilterFunction(arr)((value) => value.length === 6);

console.log("result", executeFillerFunc);
