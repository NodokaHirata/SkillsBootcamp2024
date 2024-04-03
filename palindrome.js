// Method No.1 Using a while loop
const input = prompt("Enter a word");

let length = input.length;
let reversed = '';

while(length > 0){
    length--;
    reversed += input[length];
}

if (input === reversed) {
    console.log(`${input} is a palindrome.`);
} else {
    console.log(`${input} is not a palindrome.`);
}

// Method No.2 more effective way
// const input = prompt("Enter a word");

// // Reverse function
// const reverseString = (str) => str.split('').reverse().join('');

// if (input === reverseString(input)) {
//     console.log(`${input} is a palindrome.`);
// } else {
//     console.log(`${input} is not a palindrome.`);
// }

