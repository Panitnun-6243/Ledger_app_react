import "./App.css";
import Title from "./components/Title";
import Transaction from "./components/Transaction";
import FormComponent from "./components/formComponent";
import { useState } from "react";

function App() {
  // const initData = [
  //   { id: 1, title: "Hospital expense", amount: 700 },
  //   { id: 2, title: "Food expense", amount: 300 },
  //   { id: 3, title: "Travel expense", amount: 2000 },
  // ];
  const [items, setItems] = useState([]);
  const onAddNewItem = (newItem) => {
    setItems((prevItem) => [newItem, ...prevItem]);
  };

  return (
    <div className="container">
      <Title />
      <FormComponent onAddItem={onAddNewItem} />
      {/* เหมือนส่งฟังชั่นจาก app compo ไปให้ form compo ใช้ ไม่ใช่ส่งค่าเข้าไปให้ใช้เเต่ส่งฟังชั่นเข้าไปให้ใช้ */}
      <Transaction items={items} />
    </div>
  );
}

export default App;
