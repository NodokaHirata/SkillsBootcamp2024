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

// Add new income
const addNewIncome = () => {
  // Get user inputs and store them into sessions
  sessionStorage.setItem("name", prompt("Entre name of income"));
  do {
    sessionStorage.setItem(
      "amount",
      parseInt(prompt("Entre amount of income"))
    );
    if (isNaN(parseInt(sessionStorage.getItem("amount")))) {
      alert("The amount of income must be a number");
    }
  } while (isNaN(parseInt(sessionStorage.getItem("amount"))));
  sessionStorage.setItem(
    "isRecurring",
    JSON.parse(confirm("Is it recurring? OK for Yes, Cancel for No"))
  );

  // Create new income instance
  return new Income(
    sessionStorage.getItem("name"),
    parseInt(sessionStorage.getItem("amount")),
    JSON.parse(sessionStorage.getItem("isRecurring"))
  );
};

// Create income instances and an array for later
let incomes = [
  new Income("Salary0", 4000, true),
  new Income("Salary1", 3000, false),
  new Income("Salary2", 2000, true),
  new Income("Salary3", 6000, false),
  new Income("Salary4", 5000, true),
  addNewIncome(),
];

// Add new expense
const addNewExpense = () => {
  // Get user inputs and store them into sessions
  sessionStorage.setItem("name", prompt("Entre name of expense"));
  do {
    sessionStorage.setItem(
      "amount",
      parseInt(prompt("Entre amount of expense"))
    );
    if (isNaN(parseInt(sessionStorage.getItem("amount")))) {
      alert("The amount of expense must be a number");
    }
  } while (isNaN(parseInt(sessionStorage.getItem("amount"))));
  sessionStorage.setItem(
    "isRecurring",
    JSON.parse(confirm("Is it recurring? OK for Yes, Cancel for No"))
  );

  // Create new income instance
  return new Expense(
    sessionStorage.getItem("name"),
    parseInt(sessionStorage.getItem("amount")),
    JSON.parse(sessionStorage.getItem("isRecurring"))
  );
};

// Create expense instances and an array for later
let expenses = [
  new Expense("Expense0", 200, true),
  new Expense("Expense1", 500, false),
  new Expense("Expense2", 600, false),
  new Expense("Expense3", 700, true),
  new Expense("Expense4", 800, false),
  addNewExpense(),
];

// Calculate disposable income
const getDisposableIncome = (incomes, expenses) => {
  let totalIncome = incomes.reduce((sum, income) => sum + income.amount, 0);
  let totalExpense = expenses.reduce((sum, expense) => sum + expense.amount, 0);
  let disposableIncome = totalIncome - totalExpense;
  return disposableIncome;
};

// Get disposable income
let disposableIncome;
disposableIncome = getDisposableIncome(incomes, expenses);

// Display the disposable income
confirm("Your disposable income is :" + disposableIncome);

const makeSavings = () => {
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

makeSavings();

// Caluculate disposable income left
disposableIncome = disposableIncome - sessionStorage.getItem("savings");

// create an alert to display the total amount of disposable income left
alert(`Your disposable income left is: ${disposableIncome}`);
