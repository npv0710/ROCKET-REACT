import styled from "styled-components";
import UserInfo from "../userinfo/UserInfo";

const MainContainer = styled.div `
    height: 1000px;

`

const Main = (props) => {

    return (
        <MainContainer className="main">
            <h1>Main Component</h1>
            <UserInfo />
        </MainContainer>
    )

}

export default Main;