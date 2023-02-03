import CustomInput from '../custominput/CustomInput';
import Footer from '../footer/Footer';
import Header from '../header/Header';
import Main from '../main/Main';
import './Wrapper.css';

function Wrapper(props) {
    console.log('Component wrapper rendered...')
    return(
        <div className={props.sidebarIsOpen ? "wrapper" : "wrapper sidebar-close"}>
            <Header 
                toggleSidebar={props.toggleSidebar}
            />
            <Main />
            <Footer />
        </div>
    )
}

export default Wrapper;
