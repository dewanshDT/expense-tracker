import React from 'react'

const Transaction = ({transaction, transactions, setTransactions}) => {
    const sign = transaction.amount > 0 ? '+' : '-'; 

    const deleteTransaction = () => {
        setTransactions(transactions.filter(item => item.id !== transaction.id));
    }

    return (
        <li className={transaction.amount > 0 ? "plus" : "minus"}>
            {transaction.text} <span>{sign}${Math.abs(transaction.amount)}</span>
            <button className="delete-btn" onClick={deleteTransaction}>&times;</button>
        </li>
    )
}

export default Transaction
