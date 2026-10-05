let income = 0;
let expenses = 0;

function addTransaction() {
    const description = document.getElementById("description").value;
    const amount = Number(document.getElementById("amount").value);
    const type = document.getElementById("type").value;

    if (description === "" || amount <= 0) {
        alert("Please enter a valid description and amount.");
        return;
    }

    const transactionList = document.getElementById("transactionList");

    const transaction = document.createElement("li");

    transaction.innerHTML = `
        <span>${description}</span>
        <span>₹${amount} (${type})</span>
    `;

    transactionList.appendChild(transaction);

    if (type === "income") {
        income += amount;
    } else {
        expenses += amount;
    }

    updateSummary();

    document.getElementById("description").value = "";
    document.getElementById("amount").value = "";
}

function updateSummary() {
    const balance = income - expenses;

    document.getElementById("totalIncome").textContent = `₹${income}`;
    document.getElementById("totalExpense").textContent = `₹${expenses}`;
    document.getElementById("balance").textContent = `₹${balance}`;
}
