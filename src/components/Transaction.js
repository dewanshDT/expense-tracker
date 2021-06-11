import React from 'react'


const Transaction = ({transaction, trans, setTrans}) => {
    const sign = transaction.amount > 0 ? '+' : '-'; 

    const deleteTransaction = () => {
        setTrans(trans.filter(item => item.id !== transaction.id));
    }

    return (
        <li className={transaction.amount > 0 ? "plus" : "minus"}>
            {transaction.text} <span>{sign}${Math.abs(transaction.amount)}</span>
            <button className="delete-btn" onClick={deleteTransaction}>&times;</button>
        </li>
    )
}

export default Transaction
