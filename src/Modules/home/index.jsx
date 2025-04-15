import React, { useState } from "react";
import styled from "styled-components";
import OverviewComponent from "./OverviewComponent";
import TransactionComponent from "./TransactionComponent";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 30px 0 10px;
  font-family: Montserrat;
`;

const HomeComponent = (props) => {
  const [transactions, updateTransactions] = useState([]);

  const addTransaction = (payload) => {
    const transactionArray = [...transactions];
    transactionArray.push(payload);
    updateTransactions(transactionArray);
  };

  return (
    <Container>
      <OverviewComponent addTxn={addTransaction} />
      <TransactionComponent transactions={transactions} />
    </Container>
  );
};

export default HomeComponent;
