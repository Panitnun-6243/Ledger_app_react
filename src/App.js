import "./App.css";
import Title from "./components/Title";
import Transaction from "./components/Transaction";
import FormComponent from "./components/formComponent";
import { useState } from "react";
import DataContext from "./data/DataContext";
import ReportComponent from "./components/ReportComponent";

function App() {
  const [items, setItems] = useState([]);
  const onAddNewItem = (newItem) => {
    setItems((prevItem) => [newItem, ...prevItem]);
  };

  return (
    <DataContext.Provider
      value={{
        income: 5000000,
        expense: 3000000,
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
