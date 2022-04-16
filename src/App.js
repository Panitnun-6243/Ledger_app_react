import "./App.css";
import Title from "./components/Title";
import Transaction from "./components/Transaction";
import FormComponent from "./components/formComponent";
import { useEffect, useState } from "react";
import DataContext from "./data/DataContext";
import ReportComponent from "./components/ReportComponent";

function App() {
  const [items, setItems] = useState([]);
  const [reportIncome, setReportIncome] = useState(0);
  const [reportExpense, setReportExpense] = useState(0);
  const [reportBalance, setReportBalance] = useState(0);
  const onAddNewItem = (newItem) => {
    setItems((prevItem) => [newItem, ...prevItem]);
  };
  useEffect(() => {
    const amounts = items.map((items) => items.amount);
    const income = amounts.filter((e) => e > 0);
    const expense = amounts.filter((e) => e < 0);
    const totalIncome = income.reduce((a, b) => a + b, 0);
    const totalExpense = expense.reduce((a, b) => a - b, 0);
    const balance = totalIncome - totalExpense;

    setReportIncome(totalIncome);
    setReportExpense(totalExpense);
    setReportBalance(balance);
  }, [items, reportIncome, reportExpense, reportBalance]);

  return (
    <DataContext.Provider
      value={{
        income: reportIncome,
        expense: reportExpense,
        balance: reportBalance,
      }}
    >
      <div className="container">
        <Title />
        <FormComponent onAddItem={onAddNewItem} />
        {/* เหมือนส่งฟังชั่นจาก app compo ไปให้ form compo ใช้ ไม่ใช่ส่งค่าเข้าไปให้ใช้เเต่ส่งฟังชั่นเข้าไปให้ใช้ */}
        <ReportComponent />
        <Transaction items={items} />
      </div>
    </DataContext.Provider>
  );
}

export default App;
