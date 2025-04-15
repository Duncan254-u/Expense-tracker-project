import React, { useEffect, useState } from "react";
import styled from "styled-components";

// Styled Components
const Container = styled.div`
  background-color: white;
  color: #0d1d2c;
  display: flex;
  flex-direction: column;
  padding: 10px 22px;
  font-size: 18px;
  width: 100%;
  gap: 10px;
  font-weight: bold;
  overflow-y: auto;

  & input {
    padding: 10px 12px;
    border-radius: 12px;
    background: #e6e8e9;
    border: 1px solid #e6e8e9;
    outline: none;
  }
`;

const Cell = styled.div`
  background-color: white;
  color: #0d1d2c;
  display: flex;
  flex-direction: row;
  padding: 10px 15px;
  font-size: 14px;
  border-radius: 2px;
  border: 1px solid #e6e8e9;
  align-items: center;
  justify-content: space-between;
  font-weight: normal;
  border-right: 4px solid ${(props) => (props.isExpense ? "red" : "green")};
`;

// Single transaction row
const TransactionCell = ({ payload }) => {
  const { desc, amount, type } = payload;
  return (
    <Cell isExpense={type === "EXPENSE"}>
      <span>{desc}</span>
      <span>${amount}</span>
    </Cell>
  );
};

// Main transactions list component
const TransactionsComponent = ({ transactions }) => {
  const [searchText, setSearchText] = useState("");
  const [filteredTransactions, setFilteredTransactions] = useState(transactions);

  const filterData = (text) => {
    if (!text.trim()) {
      setFilteredTransactions(transactions);
      return;
    }

    const filtered = transactions.filter(({ desc }) =>
      desc.toLowerCase().includes(text.trim().toLowerCase())
    );
    setFilteredTransactions(filtered);
  };

  useEffect(() => {
    filterData(searchText);
  }, [transactions]);

  return (
    <Container>
      Transactions
      <input
        placeholder="Search"
        value={searchText}
        onChange={(e) => {
          setSearchText(e.target.value);
          filterData(e.target.value);
        }}
      />
      {filteredTransactions.length > 0 ? (
        filteredTransactions.map((txn) => (
          <TransactionCell key={txn.id} payload={txn} />
        ))
      ) : (
        <span style={{ fontSize: "14px", fontWeight: "normal" }}>
          No transactions found.
        </span>
      )}
    </Container>
  );
};

export default TransactionsComponent;
