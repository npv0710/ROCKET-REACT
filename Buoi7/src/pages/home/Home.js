import { Component } from 'react';
import Sidebar from '../../components/sidebar/Sidebar';
import Wrapper from '../../components/wrapper/Wrapper';
import './Home.css';

import ThemeContext from '../../components/context/ThemeContext';
import DemoLifeCycle from '../../components/lifecycle/DemoLifeCycle';

class Home extends Component {
    constructor(props) {
        super(props);

        this.state = {
            sidebarIsOpened: true,
            theme: {
                mode: 'dark'
            }
        }
    }

    _toggleSidebar = () =>  {
        this.setState({
            sidebarIsOpened: !this.state.sidebarIsOpened
        })
    }

    
    _changeThemeMode = () => {
        this.setState({
            theme: {
                ...this.state.theme,
                mode : this.state.theme.mode === 'dark' ? 'light' : 'dark'
            }
        })
    }
    render() {
        const _useThemeContext = {
            mode: this.state.theme.mode,
            changeThemeMode: this._changeThemeMode
        }

        return(
            <div className='home'>
                <ThemeContext.Provider value={this.state.theme}>
                    <Sidebar />
                    <Wrapper />
                </ThemeContext.Provider>
            </div>
        )
    }
}

export default Home;

