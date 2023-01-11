import './Sidebar.css';
import ThemeContext from '../context/ThemeContext';

const Sidebar = (props) => {

    return (
        <ThemeContext.Consumer>
            {theme => 
                <div className={props.sidebarIsOpened ? "sidebar " +  theme.mode : ("sidebar " + theme.mode + " close")}>
                    <h1>Sidebar Component</h1>
                    <p>Dashboard</p>
                </div>
            }
        </ThemeContext.Consumer>
    )

}

export default Sidebar;