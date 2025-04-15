import React, { useState } from "react";
import styled from "styled-components";

// Styled Components
const Container = styled.div`
  display: flex;
  flex-direction: column;
  margin: 10px;
  align-items: center;
  font-size: 16px;
  width: 100%;
`;

const ExpenseContainer = styled.div`
  display: flex;
  flex-direction: row;
  gap: 12px;
  margin: 20px;
`;

const ExpenseBox = styled.div`
  border-radius: 4px;
  border: 1px solid #e6e8e9;
  padding: 15px 20px;
  font-size: 14px;
  display: flex;
  flex-direction: column;
  gap: 10px;
  width: 135px;

  & span {
    color: ${(props) => (props.isIncome ? "green" : "red")};
    font-weight: bold;
    font-size: 20px;
  }
`;

const BalanceBox = styled.div`
  font-size: 18px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  font-weight: bold;

  & span {
    color: #0d1d2c;
    font-size: 20px;
  }
`;

const Button = styled.div`
  font-size: 15px;
  background: #0d1d2c;
  color: white;
  padding: 5px 10px;
  cursor: pointer;
  border-radius: 4px;
  font-weight: bold;
`;

const AddTransactionContainer = styled.div`
  display: ${(props) => (props.visible ? "flex" : "none")};
  flex-direction: column;
  border: 1px solid #e6e8e9;
  border-radius: 4px;
  padding: 15px 20px;
  width: 100%;
  margin: 10px 0;
  gap: 10px;

  & input {
    width: 90%;
    padding: 10px;
    border-radius: 4px;
    border: 1px solid #e6e8e9;
  }
`;

const RadioBox = styled.div`
  display: flex;
  gap: 20px;

  & input {
    margin-right: 5px;
  }
`;

// Component to Add Transactions
const AddTransactionView = ({ visible, toggleAddTxn, addTransaction }) => {
  const [amount, setAmount] = useState("");
  const [desc, setDesc] = useState("");
  const [type, setType] = useState("EXPENSE");

  const handleAdd = () => {
    if (!amount || !desc) {
      alert("Please enter both description and amount");
      return;
    }

    const newTransaction = {
      id: Date.now(),
      amount: Number(amount),
      desc,
      type,
    };

    addTransaction(newTransaction);
    setAmount("");
    setDesc("");
    setType("EXPENSE");
    toggleAddTxn(false);
  };

  return (
    <AddTransactionContainer visible={visible}>
      <input
        placeholder="Amount"
        type="number"
        value={amount}
        onChange={(e) => setAmount(e.target.value)}
      />
      <input
        placeholder="Description"
        value={desc}
        onChange={(e) => setDesc(e.target.value)}
      />
      <RadioBox>
        <label>
          <input
            type="radio"
            name="type"
            value="EXPENSE"
            checked={type === "EXPENSE"}
            onChange={(e) => setType(e.target.value)}
          />
          Expense
        </label>
        <label>
          <input
            type="radio"
            name="type"
            value="INCOME"
            checked={type === "INCOME"}
            onChange={(e) => setType(e.target.value)}
          />
          Income
        </label>
      </RadioBox>
      <Button onClick={handleAdd}>Add Transaction</Button>
    </AddTransactionContainer>
  );
};

// Overview Component
const OverviewComponent = ({ income = 10000, expense = 100, addTransaction }) => {
  const [isAddTxnVisible, setAddTxnVisible] = useState(false);

  return (
    <Container>
      <BalanceBox>
        Balance: <span>${income - expense}</span>
        <Button onClick={() => setAddTxnVisible(!isAddTxnVisible)}>
          {isAddTxnVisible ? "Cancel" : "Add"}
        </Button>
      </BalanceBox>
      <AddTransactionView
        visible={isAddTxnVisible}
        toggleAddTxn={setAddTxnVisible}
        addTransaction={addTransaction}
      />
      <ExpenseContainer>
        <ExpenseBox>
          Expense <span>${expense}</span>
        </ExpenseBox>
        <ExpenseBox isIncome>
          Income <span>${income}</span>
        </ExpenseBox>
      </ExpenseContainer>
    </Container>
  );
};

export default OverviewComponent;
