const expenseForm = document.getElementById("expense-form");
const list_expenses = document.querySelector("#expense-list");
const total_expenses = document.querySelector("#expenses-count");
const exp = document.querySelector("#total-expenses");
const expenses = [];

const renderExpense = function (expense) {
  const x = document.createElement("div");

  const name_element = document.createElement("p");
  const amount_element = document.createElement("p");
  const cat_element = document.createElement("p");
  const date_element = document.createElement("p");
  name_element.textContent = expense.name;
  amount_element.textContent = expense.amount;
  cat_element.textContent = expense.category;
  date_element.textContent = expense.date;
  x.append(name_element);
  x.append(amount_element);
  x.append(cat_element);
  x.append(date_element);

  list_expenses.append(x);
};
expenseForm.addEventListener("submit", function (event) {
  event.preventDefault();

  const nameInput = document.getElementById("expense-name");
  const amtInput = document.getElementById("expense-amt");
  const catInput = document.getElementById("expense-cat");
  const dateInput = document.getElementById("expense-date");

  console.log(nameInput.value);
  console.log(amtInput.value);
  console.log(catInput.value);
  console.log(dateInput.value);

  if (nameInput.value === "") {
    alert("Please enter expense name...");
    return;
  }
  if (Number(amtInput.value) <= 0) {
    alert("Please enter a valid amount...");
    return;
  }
  if (dateInput.value === "") {
    alert("Please select a date...");
    return;
  }
  const expense = {
    name: nameInput.value,
    amount: Number(amtInput.value),
    category: catInput.value,
    date: dateInput.value,
  };

  expenses.push(expense);
  renderExpense(expense);

  const expenses_length = expenses.length;

  total_expenses.textContent = expenses_length;

  const total_amount = expenses.reduce(function (a, b) {
    return a + b.amount;
  }, 0);
  exp.textContent = total_amount;

  console.log("Form Submited");
  expenseForm.reset();
});

console.log(list_expenses);
