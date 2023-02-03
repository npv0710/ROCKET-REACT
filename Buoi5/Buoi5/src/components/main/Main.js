import styled from "styled-components";

const MainContainer = styled.div `
    height: 1000px;

`

const Main = (props) => {

    return (
        <MainContainer className="main">
            <h1>Main Component</h1>
        </MainContainer>
    )

}

export default Main;