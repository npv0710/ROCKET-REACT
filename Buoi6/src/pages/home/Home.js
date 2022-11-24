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
                {/* <h1 style={{color: 'red'}}>Home Page</h1>
                <h2>Component Dashboard</h2> */}
                <DemoLifeCycle />
                {/* <ThemeContext.Provider value={_useThemeContext}>
                    <Sidebar sidebarIsOpened={this.state.sidebarIsOpened}/>
                    <Wrapper 
                        toggleSidebar={this._toggleSidebar}
                        sidebarIsOpened={this.state.sidebarIsOpened}
                    />
                </ThemeContext.Provider> */}
            </div>
        )
    }
}

export default Home;

