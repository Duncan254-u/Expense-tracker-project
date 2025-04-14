import styled from "styled-components";
import OverviewComponent from "./OverviewComponent"
import TransactionComponent from "./TransactionComponent"
const Container = styled.div`
display: flex;
flex-direction: column;
align-items: center;
margin: 30px 0 10px;
font-family: Montserrat;
`;


const HomeComponent= (props) => {
    return(
        <container>
            <OverviewComponent/>
            <TransactionComponent/>
        </container>
    )
}
export default HomeComponent;