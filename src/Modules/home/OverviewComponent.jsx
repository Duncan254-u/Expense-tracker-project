import React, { useState } from "react";
import styled from "styled-components";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 10px;
  font-family: Montserrat;
  width: 100%;
`;

const BalanceBox = styled.div`
  font-size: 18px;
  width: 100%;
  font-weight: bold;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

const AddTransaction = styled.div`
  background: black;
  color: white;
  padding: 5px 10px;
  border-radius: 4px;
  text-align: center;
  cursor: pointer;
  font-weight: bold;
  font-size: 15px;
`;

const AddTransactionContainer = styled.div`
  display: flex;
  flex-direction: column;
  border: 1px solid black;
  gap: 10px;
  width: 100%;
  padding: 15px 20px;
  margin: 10px 20px;

  & input {
    outline: none;
    padding: 10px 12px;
    border-radius: 4px;
    border: 1px solid black;
    margin: 0 10px;
  }
`;

const RadioBox = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  width: 100%;
`;

const AddTransactionView = () => {
  return (
    <AddTransactionContainer>
      <input placeholder="Amount" />
      <input placeholder="Description" />
      <RadioBox>
        <input type="radio" id="expense" name="type" value="EXPENSE" />
        <label htmlFor="expense">Expense</label>
        <input type="radio" id="income" name="type" value="INCOME" />
        <label htmlFor="income">income</label>
      </RadioBox>
      <AddTransaction>Add Transaction</AddTransaction>
    </AddTransactionContainer>
  );
};

const OverviewComponent = (props) => {
  const [isAddTxnVisible, toggleAddTxn] = useState(false);
  return (
    <Container>
      <BalanceBox>
        Balance: $5000
        <AddTransaction onClick={() => toggleAddTxn(!isAddTxnVisible)}>
          {isAddTxnVisible ? "Cancel" : "ADD"}
        </AddTransaction>
      </BalanceBox>
      {isAddTxnVisible && <AddTransactionView />}
    </Container>
  );
};

export default OverviewComponent;
