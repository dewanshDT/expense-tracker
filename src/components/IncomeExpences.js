import React from "react";
import { TransContext } from "./context/TransContext";

const IncomeExpences = () => {
  const [trans] = React.useContext(TransContext);

  const incomeArr = trans.map(item => Math.abs(item.amount));
  const expenseArr = trans.filter(item => item.amount < 0).map(item => item.amount);
  const calcTotal = (arr) => {
    const total = arr.length ? arr.reduce((acc, cvl) => acc + cvl) : 0;
    return Math.abs(total);
  } 
  
  return (
    <div className="inc-exp-container">
      <div className="income">
        <h4>Income</h4>
        <p id="money-plus" className="money plus">
          ${calcTotal(incomeArr) - calcTotal(expenseArr)}
        </p>
      </div>
      <div className="expense">
        <h4>Expense</h4>
        <p id="money-minus" className="money minus">
          ${calcTotal(expenseArr)}
        </p>
      </div>
    </div>
  );
};

export default IncomeExpences;
