let expenses = [];

let addExpense=()=> {
    const expenseInput = document.getElementById("expense");
    const amountInput = document.getElementById("amount");
    const categorySelect = document.querySelector('select');

    const expenseName = expenseInput.value.trim();
    const amount = Number(amountInput.value);
    const category = categorySelect.value;

    if (expenseName === "" || amount <= 0) {
        alert("Please enter valid expense and amount");
        return;
    }

    // create expense object
    const expense = {
        name: expenseName,
        amount: amount,
        category: category
    };

    // add to array
    expenses.push(expense);

    showExpenses();

    expenseInput.value = "";
    amountInput.value = "";
    categorySelect.value = "Other";
}


// Show Expense
let showExpenses=()=> {
    const displayDiv = document.getElementById("displayExpense");
    displayDiv.className="col-md-4 mt-3 mt-md-0 p-3"; //adding classname to div
    displayDiv.innerHTML = "";

    let total = 0;

    const totalHeading = document.createElement("h5");
    totalHeading.innerHTML = `Total: ₹ <span id="total">0</span>`;
    displayDiv.appendChild(totalHeading);

    const ul = document.createElement("ul");
    ul.className = "list-group mt-3";

    expenses.forEach(exp => {
        total += exp.amount;

        const li = document.createElement("li");
        li.className = "list-group-item d-flex justify-content-between align-items-center";

        li.innerHTML = `
            <span>${exp.name} (${exp.category})</span>
            <span>₹ ${exp.amount}</span>
        `;

        ul.appendChild(li);
    });

    displayDiv.appendChild(ul);
    document.getElementById("total").textContent = total;
}
