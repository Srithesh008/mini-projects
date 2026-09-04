const expenseForm = document.getElementById("expense-form");
const expenses = [];
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

  const expense = {
    name: nameInput.value,
    amount: Number(amtInput.value),
    category: catInput.value,
    date: dateInput.value,
  };

  expenses.push(expense);

  console.log(expenses);

  console.log("Form Submited");
});
