import "./App.css";
import React from "react";
import Header from "./components/Header";
import Balance from "./components/Balance";
import IncomeExpences from "./components/IncomeExpences";
import TransactionList from "./components/TransactionList";
import AddTransaction from "./components/AddTransaction";
import Footer from "./components/Footer";
import { TransProvider } from "./components/context/TransContext";

function App() {
  return (
    <TransProvider>
      <Header />
      <div className="container">
        <Balance />
        <IncomeExpences />
        <AddTransaction />
        <TransactionList />
      </div>
      <Footer />
    </TransProvider>
  );
}

export default App;
