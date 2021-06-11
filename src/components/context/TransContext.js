import React from 'react';

export const TransContext = React.createContext();

export const TransProvider = ({children}) => {
    const [trans, setTrans] = React.useState([
        { id: 1, text: "Flower", amount: -20 },
        { id: 2, text: "Salary", amount: 300 },
        { id: 3, text: "Book", amount: -10 },
        { id: 4, text: "Camera", amount: 150 },
      ]);

      return (
        <TransContext.Provider value={[trans, setTrans]}>
          {children}
        </TransContext.Provider>
      )
};

