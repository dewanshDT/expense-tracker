import React from "react";
import Transaction from "./Transaction";

const TransactionList = ({ transactions, setTransactions }) => {
  return (
    <>
      <h3>History</h3>
      <ul id="list" className="list">
        {transactions.map((item) => (
            <Transaction key={item.id} transactions={transactions} transaction={item} setTransactions={setTransactions} />
        ))}
      </ul>
    </>
  );
};

export default TransactionList;
