// Practical Task 1

// Income object constructor
function Income(name, amount, isRecurring) {
  this.name = name;
  this.amount = amount;
  this.isRecurring = isRecurring;
}

// Expense object constructor
function Expense(name, amount, isRecurring) {
  this.name = name;
  this.amount = amount;
  this.isRecurring = isRecurring;
}

// Create income instances and put it into an array
let incomes = [
  new Income("Salary0", 4000, true),
  new Income("Salary1", 3000, false),
  new Income("Salary2", 2000, true),
  new Income("Salary3", 6000, false),
  new Income("Salary4", 5000, true),
];

// Create expense instances and an array
let expenses = [
  new Expense("Expense0", 200, true),
  new Expense("Expense1", 500, false),
  new Expense("Expense2", 600, false),
  new Expense("Expense3", 700, true),
  new Expense("Expense4", 800, false),
];

// Display items function
const createDisplay = (items, itemName) => {
  // Create a string to display incomes
  const stringItems = items.map((item) => {
    return `Name: ${item.name}, Amount: ${item.amount}, Recurring: ${
      item.isRecurring === true ? "Yes" : "No"
    }`;
  });
  // Join the string with line breaks
  const displayItem = stringItems.join("\n");
  // Using a prompt box, display the items
  return prompt(
    `Your current ${itemName}: \n${displayItem}\nClick "OK" to add new entry`
  );
};

// Add new entry function
const addNewEntry = (entryName, instanceName, arrayName) => {
  // Get user inputs
  const name = prompt(`Entre name of ${entryName}`);
  let amount;
  // Repeat it untill the user puts a number
  do {
    amount = prompt(`Entre amount of ${entryName}`);
    if (isNaN(parseInt(amount))) {
      alert("The amount must be a number");
    }
  } while (isNaN(parseInt(amount)));

  const isRecurring = JSON.parse(
    confirm("Is it recurring? OK for Yes, Cancel for No")
  );

  // Create a new instance
  const newItem = new instanceName(
    name,
    parseInt(amount),
    JSON.parse(isRecurring)
  );
  // put new entry into the array
  arrayName.push(newItem);
};

// Add items into session storage
const addSession = (items) => {
  items.forEach((item) => {
    sessionStorage.setItem("name", item.name);
    sessionStorage.setItem("amount", item.amount);
    sessionStorage.setItem("isRecurring", item.isRecurring);
  });
};

// Calculate disposable income function
const getDisposableIncome = (incomes, expenses) => {
  let totalIncome = incomes.reduce((sum, income) => sum + income.amount, 0);
  let totalExpense = expenses.reduce((sum, expense) => sum + expense.amount, 0);
  let disposableIncome = totalIncome - totalExpense;
  return disposableIncome;
};

// Make savings function
const makeSavings = (disposableIncome) => {
  // Ask the user how much of their disposable income they would like to put into savings
  do {
    sessionStorage.setItem(
      "savings",
      parseInt(
        prompt(
          `How much of your disposable income: ${disposableIncome} you would like to put into savings?`
        )
      )
    );
    if (isNaN(parseInt(sessionStorage.getItem("savings")))) {
      alert("The amount must be a number");
    }
  } while (isNaN(parseInt(sessionStorage.getItem("savings"))));
};

// Start runnig functions!
function main() {
  // Run display function to display incomes
  const userInputIncome = createDisplay(incomes, "Income");

  if (userInputIncome === null) {
    // user clicked cancel opttion
    console.log("User canceled");
  } else {
    // Add new income from a user
    addNewEntry("income", Income, incomes);
    // Add to session storage
    addSession(incomes);

    // Run display function to display expenses
    const userInputExpense = createDisplay(expenses, "Expense");

    if (userInputExpense === null) {
      // user clicked cancel opttion
      console.log("User canceled");
    } else {
      // Add new expense from a user
      addNewEntry("expense", Expense, expenses);
      // Add to session storage
      addSession(expenses);

      // Get disposable income
      let disposableIncome;
      disposableIncome = getDisposableIncome(incomes, expenses);

      // Display the disposable income
      confirm("Your disposable income is :" + disposableIncome);

      makeSavings(disposableIncome);

      // Caluculate disposable income left
      disposableIncome = disposableIncome - sessionStorage.getItem("savings");

      // create an alert to display the total amount of disposable income left
      alert(`Your disposable income left is: ${disposableIncome}`);
    }
  }
}

main();
