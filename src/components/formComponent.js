import { useEffect, useState } from "react";
import { v4 as uuidv4 } from "uuid";

const FormComponent = (props) => {
  const [title, setTitle] = useState("");
  const [amount, setAmount] = useState();
  const [formValid, setFormValid] = useState(false);

  useEffect(() => {
    const checkValid =
      title.trim().length > 0 && amount !== 0 && Number(amount);
    setFormValid(checkValid);
  }, [title, amount]);

  const inputTitle = (event) => {
    setTitle(event.target.value);
  };
  const inputAmount = (event) => {
    setAmount(event.target.value);
  };
  const saveItem = (event) => {
    event.preventDefault(); //ไม่ให้จอเรนเดอใหม่ ดักจับข้อมูลให้เเสดงผลค้างไว้
    const itemData = {
      id: uuidv4(),
      title: title,
      amount: Number(amount),
    };
    props.onAddItem(itemData); //ไม่ใช่ค่าที่รับมาเเต่เป็นค่าที่ส่งขึ้นไปเรียกใช้ฟังชั่นใน app component อีกที
    setTitle(""); //เคลียค่าในstateเพราะsubmitออกมาใช้เเล้ว
    setAmount("");
  };
  return (
    <div className="form-container">
      <form onSubmit={saveItem}>
        <div className="list-item">
          <label>List :</label>
          <input
            type="text"
            placeholder="Your income or expense"
            onChange={inputTitle}
            value={title}
            required
          />
        </div>
        <div className="amount-item">
          <label>Amount :</label>
          <input
            type="text"
            placeholder="Costs"
            onChange={inputAmount}
            value={amount}
            required
          />
        </div>
        <div className="button-item">
          <button type="submit" disabled={!formValid}>
            Add
          </button>
        </div>
      </form>
    </div>
  );
};
export default FormComponent;
