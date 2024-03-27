const mother = prompt("What is your mother's first name?");
const street = prompt("Tell us the name of the street you grew up on?");
const colour = prompt("What colour was your favourtie colour as a child?");
const age = prompt("How old are you?");
const num = prompt("Input a number between 1 and 10");

console.log(`In ${num} years you are going to meet your best friend named ${
  mother + street
}.
You will get married in ${Number(age) + Number(num)} and have ${Number(
  age % num
)} children.
In ${Math.round(age / num)} years you are going to dye your hair ${colour}.`);
