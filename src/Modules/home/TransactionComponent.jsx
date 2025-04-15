import styled from "styled-components";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 10px 22px;
  font-size: 18px;
  width: 100%;
  gap: 10px;
  font-weight: bold;
  font-family: Montserrat;
`;
const Cell=styled.div`
display: flex;
flex-direction: row;
padding: 10px 15px;
font-size: 15px;
border-radius: 2px;
`;
const TransactionCell = (props) => {
 return (<Cell>
    <span>
        {props.payload.desc}
    </span>
    <span>
        ${props.payload.amount}
    </span>
 </Cell>)   
}
const TransactionComponent = (props) => {
  return (
    <Container>
      <div>Transactions</div>
      <input placeholder="Search" />
      {props.transactions?.length ? (
        props.transactions.map((payload) => (
          <TransactionCell payload={payload.id} />
        ))
      ) : (
        <div>No transactions found</div>
      )}
    </Container>
  );
};

export default TransactionComponent;