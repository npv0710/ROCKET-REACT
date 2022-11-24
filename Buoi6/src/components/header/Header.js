import styled from "styled-components";
import { AiOutlineMenu } from 'react-icons/ai';
import ThemeContext from "../context/ThemeContext";
const HeaderContainer = styled.div `
    height: 7.2rem;
    border: 1px solid lightgray;
    box-shadow: 1px 2px 20px 0px rgba(0, 0, 0, .1);
    ${'' /* position: fixed;
    width: calc(100% - 16rem); */}
    position: sticky;
    top: 0;
    ${'' /* background-color: #fff; */}

    .header-row1 {
        height: 4rem;
        border-bottom: 1px solid lightgray;
        display: flex;
        align-items: center;

        background-color: ${p => p.mode === 'dark' ? '#3c4b64' : '#f6f6f6'};
        
    }

    .menu-icon {
        color: rgba(0, 0, 0, .8);
        color: white;
        margin-left: 1rem;
        font-size: 1.2rem;
        ${'' /* margin-top: 1rem; */}
    }
`;

const Header = (props) => {

    const _onClickMenuIcon = () => {
        props.toggleSidebar();
    }


    return (
        // <div className= "header">
        //     <h1> Header Component</h1>
        // </div>
        <ThemeContext.Consumer>
        {   
            ({mode, changeThemeMode}) => 
            <HeaderContainer className="header" mode={mode}>
                <div className="header-row1">
                    <AiOutlineMenu
                        style={{cursor: 'pointer'}}
                        className="menu-icon"
                        onClick={_onClickMenuIcon}
                    />
                </div>
                <div className="header-row2">
                    <button style={{cursor: 'pointer'}} onClick={changeThemeMode}>Change Theme</button>
                </div>
            </HeaderContainer>
        }
        </ThemeContext.Consumer>
    )

}

export default Header;