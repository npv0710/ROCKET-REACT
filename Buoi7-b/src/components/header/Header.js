import './Header.css';

import { BiMenu } from 'react-icons/bi';

const Header = props => {
    const _toggleSidebar = () => {
        props.toggleSidebar()
    }

    console.log(props);

    return(
        <div className='header'>
            <BiMenu 
                size={28}
                style={{cursor: 'pointer'}}
                onClick={_toggleSidebar}
            />
        </div>
    )
}

export default Header;