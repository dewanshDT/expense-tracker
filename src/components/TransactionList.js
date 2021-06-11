import React from "react";
import Transaction from "./Transaction";
import { TransContext } from "./context/TransContext";


const TransactionList = () => {
  const [trans, setTrans] = React.useContext(TransContext);
  return (
    <>
      <h3>History</h3>
      <ul id="list" className="list">
        {trans.map((item) => (
            <Transaction key={item.id} trans={trans} transaction={item} setTrans={setTrans} />
        ))}
      </ul>
    </>
  );
};

export default TransactionList;
