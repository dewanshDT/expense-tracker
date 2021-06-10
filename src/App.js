import "./App.css";
import React from "react";
import Header from "./components/Header";
import Balance from "./components/Balance";
import IncomeExpences from "./components/IncomeExpences";
import TransactionList from "./components/TransactionList";
import AddTransaction from "./components/AddTransaction";
import Footer from "./components/Footer";

function App() {
  const [transactions, setTransactions] = React.useState([
    { id: 1, text: "Flower", amount: -20 },
    { id: 2, text: "Salary", amount: 300 },
    { id: 3, text: "Book", amount: -10 },
    { id: 4, text: "Camera", amount: 150 },
  ]);

  return (
    <>
      <Header />
      <div className="container">
        {transactions.length > 0 && <Balance transactions={transactions} />}
        {transactions.length > 1 && (
          <IncomeExpences transactions={transactions} />
        )}
        <AddTransaction
          setTransactions={setTransactions}
          transactions={transactions}
        />
        {transactions.length > 0 && (
          <TransactionList
            transactions={transactions}
            setTransactions={setTransactions}
          />
        )}
      </div>
      <Footer />
    </>
  );
}

export default App;
