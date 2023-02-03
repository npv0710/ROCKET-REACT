import ThemeContext from '../context/ThemeContext';
import './Footer.css';

const Footer = (props) => {

    return (
        <ThemeContext.Consumer>
            {
                theme => 
                <div className={"footer " + theme.mode}>
                    <h1> Footer Component</h1>
                </div>
            }
        </ThemeContext.Consumer>
    )

}

export default Footer;