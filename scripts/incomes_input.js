document.addEventListener("DOMContentLoaded", () => {
  const incomeAddButton = document.getElementById("income-add-button");

  incomeAddButton.addEventListener("click", () => {
    //add element to ul list
    const incomeTextInput = document.getElementById("income-text-input");
    const incomeTextValue = incomeTextInput.value;

    const incomeNumberInput = document.getElementById("income-number-input");
    const incomeNumberValue = incomeNumberInput.value;

    incomes.push({
      name: incomeTextValue,
      value: Number(incomeNumberValue),
    });

    const sumParagraph = document.getElementById("income-sum");

    const incomeList = document.getElementById("income-list");
    incomeList.innerHTML = "";
    incomes.forEach((income) => {
      const li = document.createElement("li");
      li.textContent = `${income.name} ${income.value} PLN`;

      const div = document.createElement("div");
      div.setAttribute("class", "calculate-buttons");

      //EDIT BUTTON
      const editButton = document.createElement("button");
      editButton.innerHTML = '<i class="far fa-edit"></i>';

      editButton.addEventListener("click", () => {
        li.innerHTML = "";
        const editedName = document.createElement("input");
        editedName.type = "text";
        editedName.value = income.name;
        const editetNumber = document.createElement("input");
        editetNumber.type = "number";
        editetNumber.value = income.value;

        //CONFIRM BUTTON
        const confirmButton = document.createElement("button");
        confirmButton.innerHTML = '<i class="far fa-check-circle"></i>';

        li.appendChild(editedName);
        li.appendChild(editetNumber);
        li.appendChild(confirmButton);

        confirmButton.addEventListener("click", () => {
          income.name = editedName.value;
          income.value = Number(editetNumber.value);
          li.innerText = "";
          li.textContent = `${income.name} ${income.value} PLN`;
          div.appendChild(editButton);
          div.appendChild(deleteButton);
          li.appendChild(div);
          updateSum();
          updateSummaryInfo();
        });
      });

      //DELETE BUTTON
      const deleteButton = document.createElement("button");
      deleteButton.innerHTML = '<i class="far fa-trash-alt"></i>';
      deleteButton.dataset.incomeName = income.name;

      deleteButton.addEventListener("click", () => {
        incomeList.removeChild(li);
        incomes = incomes.filter(
          (income) => income.name !== deleteButton.dataset.incomeName
        );
        updateSum();
        updateSummaryInfo();
      });

      div.appendChild(editButton);
      div.appendChild(deleteButton);

      li.appendChild(div);
      li.className = "list-item";

      incomeList.appendChild(li);

      //increase sum of incomes

      updateSum();
      incomeTextInput.value = "";
      incomeNumberInput.value = "";
      updateSummaryInfo();
    });
  });
});
