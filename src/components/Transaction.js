import React from 'react'

const Transaction = ({transaction, transactions, setTransactions}) => {
    const sign = transaction.type === 'income' ? '+' : '-'; 

    const deleteTransaction = () => {
        setTransactions(transactions.filter(item => item.id !== transaction.id));
    }

    return (
        <li className={transaction.type === 'income' ? "plus" : "minus"}>
            {transaction.text} <span>{sign}${Math.abs(transaction.amount)}</span>
            <button className="delete-btn" onClick={deleteTransaction}>&times;</button>
        </li>
    )
}

export default Transaction
