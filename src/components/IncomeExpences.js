import React from "react";

const IncomeExpences = ({transactions}) => {

  const incomeArr = transactions.map(item => Math.abs(item.amount));
  const expenseArr = transactions.filter(item => item.amount < 0).map(item => item.amount);
  const calcTotal = (arr) => {
    const total = arr.reduce((acc, cvl) => acc + cvl);
    return Math.abs(total);
  } 
  
  return (
    <div className="inc-exp-container">
      <div>
        <h4>Income</h4>
        <p id="money-plus" className="money plus">
          ${calcTotal(incomeArr) - calcTotal(expenseArr)}
        </p>
      </div>
      <div>
        <h4>Expense</h4>
        <p id="money-minus" className="money minus">
          ${calcTotal(expenseArr)}
        </p>
      </div>
    </div>
  );
};

export default IncomeExpences;
