import ExpenseList from "./expense-tracker/Components/ExpenseList";
import { useState } from "react";
import ExpenseFilter from "./expense-tracker/Components/ExpenseFilter";
import Form from "./expense-tracker/Components/Form";
import categories from "./expense-tracker/categories";
import "./App.css";

function App() {
  const [category, setCategory] = useState("");
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

  const selectCategory = (category: string) => {
    setCategory(category);
  };

  const visibleCategory = category
    ? expenses.filter((item) => item.category === category)
    : expenses;

  return (
    <div>
      <div className="mb-5">
        <Form />
      </div>
      <div className="mb-3">
        <ExpenseFilter
          selectedCategory={(category) => selectCategory(category)}
        />
      </div>

      <ExpenseList
        expenses={visibleCategory}
        onDelete={(id) => deleteExpense(id)}
      />
    </div>
  );
}

export default App;
