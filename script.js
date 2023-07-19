$(document).ready(function () {

  $("#addExpenseBtn").click(function () {
    if (name.val().trim() === "" || amount.val().trim() === "") return;
    // add a new table row and 2 cells one for name and one for ammount
    if (expenses.length == 0) {
      expense_list.empty()
      addExpense()
    }
    else {
      addExpense()
    }

  })

})

const name = $("#expenseName")
const amount = $("#expenseAmount")
let total = 0
let expenses = []
let expense_list = $("#expenseList")

function addExpense() {
  expense_name = name.val()
  expense_amount = amount.val()
  expenses.push({ name: expense_name, amount: expense_amount })
  total += parseFloat(expense_amount)
  expense_list.append(`<tr>
    <td>${expense_name}</td>
    <td>${expense_amount}</td>
    <td><button id="delete-btn">Delete</button></td>
  </tr>`)
  $("#totalAmmount").text(total)
  $("#expenseName").val("");
  $("#expenseAmount").val("");
}
