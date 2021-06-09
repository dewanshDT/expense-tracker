import React from "react";

const Balance = ({transactions}) => {

  let amounts = transactions.map(item => item.amount);

  const total = amounts.reduce((acc, cvl) => acc + cvl);

  return (
    <div>
      <h4>Your balnce</h4>
      <h1 id="balance">${total}</h1> 
    </div>
  );
};

export default Balance;
