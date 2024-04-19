// Constructor
function Shoes(name, productCode, quantity, valuePerItem) {
  this.name = name;
  this.productCode = productCode;
  this.quantity = quantity;
  this.valuePerItem = valuePerItem;
}

// Create instances
const nikeShoes = new Shoes("Nike", "0000", 3, 50);
const adidasShoes = new Shoes("Adidas", "0001", 5, 60);
const vansShoes = new Shoes("Vans", "0002", 6, 55);
const converseShoes = new Shoes("Converse", "0003", 2, 40);
const reebokShoes = new Shoes("Reebok", "0004", 8, 45);

// Push instances of the Shoes object into an array
let shoesArr = [nikeShoes, adidasShoes, vansShoes, converseShoes, reebokShoes];

// Search for any shoe within the shoesArr
const findShoesByname = (shoeName) => {
  return shoesArr.find((shoe) => shoeName === shoeName);
};

// Find the shoe with the lowest value per item
const findLowestValuedShoes = (shoesArr) => {
  // check if the arr is null
  if (shoesArr.length === 0) {
    return null;
  }

  // Put the first element in the result temporally
  let lowestValuedShoes = shoesArr[0];

  // Evaluate each shoe in the array
  shoesArr.forEach((shoe) => {
    if (lowestValuedShoes.valuePerItem > shoe.valuePerItem) {
      lowestValuedShoes = shoe;
    }
  });

  return lowestValuedShoes;
};

// Find the shoe with the highest value per item
const findHighestvaluedShoes = (shoesArr) => {
  // check if the array is empty
  if (shoesArr.length === 0) {
    return null;
  }

  return shoesArr.reduce((highestShoes, currentShoes) => {
    // Compare the valuePerItem of currentShoes with the valuePerItem of highestShoes
    if (currentShoes.valuePerItem > highestShoes.valuePerItem) {
      return currentShoes; // If currentShoes has higher valuePerItem, set it as highestShoes
    } else {
      return highestShoes; // Otherwise, keep highestShoes as it is
    }
  }, shoesArr[0]); // Start with the first element as the initial value for lowestShoes
};

// Edit all four properties for each of the five shoe
const editShoes = (shoesArr, newShoesArr) => {
  // Error handlings
  if (shoesArr.length !== newShoesArr.length) {
    throw new Error("Arrays must have the same length.");
  }
  if (!newShoesArr.every((shoe) => shoe instanceof Shoes)) {
    throw new Error("All elements in newShoesArr must be instances of Shoes.");
  }

  // Edit each value
  for (let i = 0; i < shoesArr.length; i++) {
    shoesArr[i].name = newShoesArr[i].name;
    shoesArr[i].productCode = newShoesArr[i].productCode;
    shoesArr[i].quantity = newShoesArr[i].quantity;
    shoesArr[i].valuePerItem = newShoesArr[i].valuePerItem;
  }

  return shoesArr;
};

// new shoes arr for editing
const newShoesArr = [
  new Shoes("shoe1", "1111", 10, 100),
  new Shoes("shoe2", "2222", 20, 200),
  new Shoes("shoe3", "3333", 30, 300),
  new Shoes("shoe4", "4444", 40, 400),
  new Shoes("shoe5", "5555", 50, 500),
];

// Sort by value per item
const sortByValue = (shoesArr) => {
  // the sort function compares each value and re-order
  shoesArr.sort((shoe1, shoe2) =>
    shoe2.valuePerItem < shoe1.valuePerItem ? -1 : 1
  );
  return shoesArr;
};

// console.table(findShoesByname("Nike"));
// console.table(findLowestValuedShoes(shoesArr));
console.table(findHighestvaluedShoes(shoesArr));
// console.table(editShoes(shoesArr, newShoesArr));
// console.table(sortByValue(shoesArr));
