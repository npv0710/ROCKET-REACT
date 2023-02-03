import { Component } from "react";
import Sidebar from "../../components/sidebar/Sidebar";
import Wrapper from "../../components/wrapper/Wrapper";

class Home extends Component {
    constructor(props) {
        super(props);
        this.state = {
            color: 'black',
            sidebarIsOpen: true
        }
    }

    username = 'Nguyen Quang Hai';

    _receiveData = (number) => {
        console.log('number received from child component: ' + number);
    }

    _toggleSidebar = () => {
        //setSidebarIsOpen(!sidebarIsOpen);
        this.setState({
            sidebarIsOpen: !this.state.sidebarIsOpen
        })
    }

    _getRandomColor = colorRandom => {
        console.log(colorRandom)

        //setColor(colorRandom)
        this.setState({
            color: colorRandom
        })
    }

    render() {
        //Can code logic here...
        //let a; const b;
        return(
            <div className="home">
                <Sidebar 
                    x={100}
                    receiveData={this._receiveData}
                    getRandomColor={this._getRandomColor}
                    sidebarIsOpen={this.state.sidebarIsOpen}
                />
                <Wrapper 
                    name={this.username} 
                    age={25}
                    //color='green'
                    color={this.state.color}
                    isMale
                    toggleSidebar={this._toggleSidebar}
                    sidebarIsOpen={this.state.sidebarIsOpen}
                />
            </div>
        )
    }
}

export default Home;