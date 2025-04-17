import React from "react";
import styled from "styled-components";
import HomeComponent from "./Modules/home";


const Container = styled.div`
  background-color: white;
  color: #0d1d2c;
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 100vh;
  width: 98%;
  margin: 0 10px;
  padding-top: 30px;
  font-family: Montserrat, sans-serif;
`;

const Header = styled.div`
  background-color: white;
  color: #0d1d2c;
  display: flex;
  align-items: center;
  padding: 22px;
  font-size: 25px;
  font-weight: bold;
`;

// Main App Component
const App = () => (
  <Container>
    <Header>Expense Tracker</Header>
    <HomeComponent />
  </Container>
);

export default App;
