import { Component } from "react";
import CustomInput from "../custominput/CustomInput";
import './Sidebar.css';

class Sidebar extends Component {
    /**
     * 
     * State trong class component
     */

    constructor(props) {
        super(props);

        console.log('Constructor sidebar component...');

        console.log(props);

        /**
         * 
         * State {*} class component 
         */
        this.state = {
            color: 'white',
            count: 200
        }
    }

    _randomColor = () => {
        let pattern = '0123456789ABCDEF';
        let color = '#';
        for (let i = 0; i < 6; i ++) {
            color += pattern[Math.floor(Math.random() * 16)]
        }
        return color;
    }

    _changeColor = () => {
        // Khi state thay đổi thì component phải rerender để update state mới lên giao diện
        let color = this._randomColor();

        this.setState({
            color: color
        })

        this.props.getRandomColor(color);
    }

    _sendData = () => {
        this.props.receiveData(this.state.count);
    }

    render() {

        //console.log('Sidebar component rendered...');

        return (
            <div 
                className={this.props.sidebarIsOpen ? "sidebar" : "sidebar close"}
                style={{color: this.state.color}}
            >
                <h1>Sidebar component</h1>
                <h3>x: {this.props.x}</h3>
                <form>
                    {/* <input 
                        type='text'
                        placeholder="Username"
                    /> */}
                    <CustomInput 
                        type='text'
                        placeholder="Username"
                    />
                </form>
                <button onClick={this._changeColor}>Change Color</button>
                <button onClick={this._sendData}>Send data to parent component</button>
            </div>
        )
    }
}

export default Sidebar;