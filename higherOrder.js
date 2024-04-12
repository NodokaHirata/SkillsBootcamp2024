const arr = [
  "jetblack",
  "green",
  "lightblue",
  "red",
  "emerald",
  "blue",
  "goldenyellow",
  "skyblue",
  "stategreen",
  "caramelbrown",
];

let myFillterFunction = (arr) => (fn) => {
  const newArr = [];
  for (let i = 0; i < arr.length; i++) {
    if (fn(arr[i])) {
      newArr.push(arr[i]);
    }
  }
  return newArr;
};
const executeFillerFunc = myFillterFunction(arr)((value) => value.length >= 6);
console.log("result", executeFillerFunc);
