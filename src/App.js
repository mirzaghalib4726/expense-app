/* eslint-disable no-unused-vars */
import { useState } from "react";
import "./App.css";
import Form from "./Form";
import Table from "./Table";

function App() {
  const [expenses, setExpenses] = useState([]);

  const addExpense = (name, value) => {
    setExpenses((prevExpenses) => [...prevExpenses, { name, value }]);
  };

  return (
    <>
      <Form onAddExpense={addExpense} />
      <Table expenses={expenses} />
    </>
  );
}

export default App;
