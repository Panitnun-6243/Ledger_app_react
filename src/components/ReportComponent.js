import React, { useContext } from "react";
import DataContext from "../data/DataContext";

function ReportComponent() {
  const balance = useContext(DataContext);
  return (
    <div className="balance-container">
      <div className="in-ex">
        <div>
          <span>Income</span> :{" "}
          <span className="balance-income"> {balance.income}</span>
        </div>
        <div>
          <span>Expense</span> :{" "}
          <span className="balance-expense"> {balance.expense}</span>
        </div>
      </div>
      <div className="balance">
        <span>Your balance</span> :{" "}
        <span className="balance-total"> {balance.balance}</span>
      </div>
    </div>
  );
}

export default ReportComponent;
