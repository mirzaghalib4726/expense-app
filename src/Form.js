import React, { useState } from "react";

export default function Form({ onAddExpense }) {
  const [expenseName, setExpenseName] = useState("");
  const [expenseValue, setExpenseValue] = useState("");
  const [showError, setShowError] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (expenseName && expenseValue) {
      onAddExpense(expenseName, parseFloat(expenseValue));
      setExpenseName("");
      setExpenseValue("");
      setShowError(false);
    } else {
      setShowError(true);
    }
  };

  return (
    <>
      <form onSubmit={handleSubmit} style={{ marginBottom: "20px" }}>
        <input
          type="text"
          value={expenseName}
          onChange={(e) => setExpenseName(e.target.value)}
          placeholder="Expense Name"
        />
        <input
          type="number"
          value={expenseValue}
          onChange={(e) => setExpenseValue(e.target.value)}
          placeholder="Expense Value"
        />
        <button type="submit"> Add Expense</button>
        {showError && <p>Please fill both values.</p>}
      </form>
    </>
  );
}
