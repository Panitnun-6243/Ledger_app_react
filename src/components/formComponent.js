import { useState } from "react";

const FormComponent = () => {

const [title, setTitle] = useState('')
const [amount, setAmount] = useState(0)

  const inputTitle = (event) => {
    setTitle(event.target.value);
  };
  const inputAmount = (event) => {
    setAmount(event.target.value);
  };
  const saveItem = (event) => {
    event.preventDefault(); //ไม่ให้จอเรนเดอใหม่ ดักจับข้อมูลให้เเสดงผลค้างไว้
    const itemData={
        title:title,
        amount:Number(amount)
    }
    console.log(itemData)
    setTitle('')//เคลียค่าในstateเพราะsubmitออกมาใช้เเล้ว
    setAmount(0)
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
          />
        </div>
        <div className="amount-item">
          <label>Amount :</label>
          <input type="text" placeholder="Costs" onChange={inputAmount} value={amount}/>
        </div>
        <div className="button-item">
          <button type="submit">&#128176; Add to your list</button>
        </div>
      </form>
    </div>
  );
};
export default FormComponent;
