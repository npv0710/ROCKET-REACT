import { Component } from "react";

class CustomInput extends Component {
    constructor(props) {
        super(props);
    }
    _onChange = (e) => {
        //console.log(e);
        // console.log(e.target);
        // console.log(e.target.value);
        // console.log(e.target.name);

        this.props.inputChange(e);
    }
    render () {
        return(
            <div className="custom-input">
                <label>{this.props.label}</label>
                <input
                    type={this.props.type}
                    name={this.props.name}
                    placeholder={this.props.placeholder}
                    onChange={this._onChange}
                />
            </div>
        )
    }
}

export default CustomInput;