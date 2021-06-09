import React from "react";

const AddTransaction = ({ setTransactions, transactions }) => {
  const [text, setText] = React.useState("");
  const [amount, setAmount] = React.useState(0);
  const [type, setType] = React.useState('income');

  function generateID() {
    return Math.floor(Math.random() * 100000000);
  }

  const addTransaction = (e) => {
    const newTransaction = {
      id: generateID(),
      text,
      amount: type === "income" ? amount : Number.parseInt('-'+amount),
      type
    };
    e.preventDefault();

    setTransactions([...transactions, newTransaction]);
  };

  return (
    <>
      <form onSubmit={(e) => addTransaction(e)}>
        <h3>Add new transaction</h3>
        <div className="form-control">
          <label htmlFor="text">Text</label>
          <input
            value={text}
            onChange={(e) => setText(e.target.value)}
            type="text"
            placeholder="enter text"
            required
          />
        </div>
        <div className="form-control radio">
          <label htmlFor="expense">Expense</label>
          <input
            type="radio"
            name="transaction"
            value="expense"
            id="expense"
            radioGroup="transaction"
            onChange={e => {setType(e.target.value)}}
            required
          />
          <label htmlFor="income">Income</label>
          <input
            type="radio"
            name="transaction"
            value="income"
            id="income"
            radioGroup="transaction"
            onChange={e => {setType(e.target.value)}}
            required
          />
        </div>
        <div className="form-control">
          <label htmlFor="amount">Amount</label>
          <input
            value={amount}
            onChange={(e) => setAmount(Number.parseInt(e.target.value))}
            type="number"
            placeholder="enter amount"
            required
          />
        </div>
        <button className="btn">Add transaction</button>
      </form>
    </>
  );
};

export default AddTransaction;
