import React, { useEffect, useState } from "react";
import styled from "styled-components";
import OverviewComponent from "./OverviewComponent";
import TransactionsComponent from "./TransactionComponent";


const Container = styled.div`
  background-color: white;
  color: #0d1d2c;
  display: flex;
  flex-direction: column;
  padding: 10px 22px;
  font-size: 18px;
  width: 360px;
  align-items: center;
  justify-content: space-between;
`;

const HomeComponent = () => {
  const [transactions, setTransactions] = useState([]);
  const [expense, setExpense] = useState(0);
  const [income, setIncome] = useState(0);

  useEffect(() => {
    let exp = 0;
    let inc = 0;

    transactions.forEach(({ amount, type }) => {
      if (type === "EXPENSE") {
        exp += amount;
      } else {
        inc += amount;
      }
    });

    setExpense(exp);
    setIncome(inc);
  }, [transactions]);

  const addTransaction = (transaction) => {
    setTransactions((prev) => [...prev, transaction]);
  };

  return (
    <Container>
      <OverviewComponent
        expense={expense}
        income={income}
        addTransaction={addTransaction}
      />
      {transactions.length > 0 && (
        <TransactionsComponent transactions={transactions} />
      )}
    </Container>
  );
};

export default HomeComponent;
