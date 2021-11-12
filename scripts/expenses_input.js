document.addEventListener("DOMContentLoaded", () => {
  const expenseAddButton = document.getElementById("expense-add-button");

  expenseAddButton.addEventListener("click", () => {
    //add element to ul list
    const expenseTextInput = document.getElementById("expense-text-input");
    const expenseTextValue = expenseTextInput.value;

    const expenseNumberInput = document.getElementById("expense-number-input");
    const expenseNumberValue = expenseNumberInput.value;

    expenses.push({
      name: expenseTextValue,
      value: Number(expenseNumberValue),
    });

    const sumParagraph = document.getElementById("expense-sum");

    const expenseList = document.getElementById("expense-list");
    expenseList.innerHTML = "";
    expenses.forEach((expense) => {
      const li = document.createElement("li");
      li.textContent = `${expense.name} ${expense.value} PLN`;

      const div = document.createElement("div");
      div.setAttribute("class", "calculate-buttons");

      //EDIT BUTTON
      const editButton = document.createElement("button");
      editButton.innerHTML = '<i class="far fa-edit"></i>';

      editButton.addEventListener("click", () => {
        li.innerHTML = "";
        const editedName = document.createElement("input");
        editedName.type = "text";
        editedName.value = expense.name;
        const editetNumber = document.createElement("input");
        editetNumber.type = "number";
        editetNumber.value = expense.value;

        //CONFIRM BUTTON
        const confirmButton = document.createElement("button");
        confirmButton.innerHTML = '<i class="far fa-check-circle"></i>';

        li.appendChild(editedName);
        li.appendChild(editetNumber);
        li.appendChild(confirmButton);

        confirmButton.addEventListener("click", () => {
          expense.name = editedName.value;
          expense.value = Number(editetNumber.value);
          li.innerText = "";
          li.textContent = `${expense.name} ${expense.value} PLN`;
          div.appendChild(editButton);
          div.appendChild(deleteButton);
          li.appendChild(div);
          updateExpensesSum();
          updateSummaryInfo();
        });
      });

      //DELETE BUTTON
      const deleteButton = document.createElement("button");
      deleteButton.innerHTML = '<i class="far fa-trash-alt"></i>';
      deleteButton.dataset.expenseName = expense.name;

      deleteButton.addEventListener("click", () => {
        expenseList.removeChild(li);
        expenses = expenses.filter(
          (expense) => expense.name !== deleteButton.dataset.expenseName
        );
        updateExpensesSum();
        updateSummaryInfo();
      });

      div.appendChild(editButton);
      div.appendChild(deleteButton);

      li.appendChild(div);
      li.className = "list-item";

      expenseList.appendChild(li);

      //increase sum of expenses

      sumParagraph.innerText = expenses.reduce((sum, item) => {
        return sum + item.value;
      }, 0);

      expenseTextInput.value = "";
      expenseNumberInput.value = "";
      updateExpensesSum();
      updateSummaryInfo();
    });
  });
});
