import React, { useContext } from "react";
import DataContext from "../data/DataContext";

function ReportComponent() {
  const balance = useContext(DataContext);
  const formatNumber = (num) => {
    return num.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1,");
  };
  return (
    <div className="balance-container">
      <div className="in-ex">
        <div>
          <span>Income</span> :{" "}
          <span className="balance-income">
            <span className="bath"> ฿ </span>
            {formatNumber(balance.income)}
          </span>
        </div>
        <div>
          <span>Expense</span> :{" "}
          <span className="balance-expense">
            <span className="bath"> ฿ </span>
            {formatNumber(balance.expense)}
          </span>
        </div>
      </div>
      <div className="balance">
        <span>Your balance</span> :{" "}
        <span className="balance-total">
          <span className="bath"> ฿ </span>
          {formatNumber(balance.balance)}
        </span>
      </div>
    </div>
  );
}

export default ReportComponent;
