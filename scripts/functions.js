var incomes = [];
var expenses = [];

function updateSummaryInfo() {
  const incomeInfo = Number(document.querySelector("#income-sum").innerText);
  const expenseInfo = Number(document.querySelector("#expense-sum").innerText);
  const summaryInfo = document.getElementById("summary-info");

  let sum = incomeInfo - expenseInfo;
  if (sum > 0) {
    summaryInfo.innerText = `Możesz jeszcze wydać ${sum} złotych`;
  } else if (sum === 0) {
    summaryInfo.innerText = "Bilans wynosi zero";
  } else {
    summaryInfo.innerText = `Bilans jest ujemny. Jesteś na minusie ${sum} złotych`;
  }
}

function updateSum() {
  const sumParagraph = document.getElementById("income-sum");
  sumParagraph.innerText = incomes.reduce((sum, item) => {
    return sum + item.value;
  }, 0);
}

function updateExpensesSum() {
  const sumParagraph = document.getElementById("expense-sum");
  sumParagraph.innerText = expenses.reduce((sum, item) => {
    return sum + item.value;
  }, 0);
}
