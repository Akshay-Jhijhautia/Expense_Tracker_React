import ExpenseList from "./expense-tracker/Components/ExpenseList";
import "./App.css";
import { useState } from "react";

function App() {
  const [expenses, setExpenses] = useState([
    { id: 1, description: "aaa", amount: 10, category: "Utilities" },
    { id: 2, description: "bbb", amount: 10, category: "Utilities" },
    { id: 3, description: "ccc", amount: 10, category: "Utilities" },
    { id: 4, description: "ddd", amount: 10, category: "Utilities" },
    { id: 5, description: "eee", amount: 10, category: "Utilities" },
  ]);

  const deleteExpense = (id: number) => {
    setExpenses(expenses.filter((expense) => expense.id != id));
  };

  return (
    <div>
      <ExpenseList expenses={expenses} onDelete={(id) => deleteExpense(id)} />
    </div>
  );
}

export default App;
