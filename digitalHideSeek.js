function hide(hide) {
    let hideLocation = hide;
    return function seek(){
        return hideLocation;
    }
}

const startGame = hide("MtEvelest");
console.log(startGame());

console.log(hideLocation);
// The code above resuls in ReferenceError as hideLocation is a function scope.
// A function can call variables that are outside the function, but the rest of the code cannot call variables that are defined inside the function.