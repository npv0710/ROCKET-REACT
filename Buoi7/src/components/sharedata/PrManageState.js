import { Component } from "react";
import TemperatureInput from "./TemperatureInput";

class PrManageState extends Component {
    constructor(props) {
        super(props);
        this.state = {
            temperature: '',
            currentInputChanged: false
        }
    }

    _onChangeInput = (e) => {
        console.log(e)
        console.log(e.target.value)
        console.log(e.target.name)
        this.setState({
            temperature: e.target.value,
            currentInputChanged: e.target.name
        })
    }

    onChangeCelsius = (celsius) => {
        this.setState({
            temperature: celsius,
            // celInputChanged: true,
            // faInputChanged: false,
        })
    }

    onChangeFahrendeit = (fahrenheit) => {
        this.setState({
            temperature: fahrenheit,
            faInputChanged: true,
            celInputChanged: false,
        })
    }

    toCelsius = (fahrenheit) => {
        return (fahrenheit - 32) * 5 / 9;
    }

    toFahrenheit = (celsius) => {
        return (celsius * 9 / 5) + 32;


    }

    render() {
        //let tempCelsius = this.state.celInputChanged? this.state.tempperature: this.toCelsius(this.state.tempperature);
        let tempCelsius = this.state.currentInputChanged === 'tempCel' ? this.state.temperature : this.toCelsius(this.state.temperature);

        //let tempFahrenheit = this.state.faInputChanged? this.state.tempperature: this.toFahrenheit(this.state.tempperature);
        let tempFahrenheit = this.state.currentInputChanged === 'tempFah' ? this.state.temperature : this.toFahrenheit(this.state.temperature);
        return (
            <div>
                <TemperatureInput 
                    temperatureType='Celsius' 
                    //onChangeInput={this.onChangeCelsius}
                    onChangeInput={this._onChangeInput}
                    name='tempCel'
                    temp={tempCelsius}
                />
                <TemperatureInput 
                    temperatureType='Fahrenheit' 
                    //onChangeInput={this.onChangeFahrendeit}
                    onChangeInput={this._onChangeInput}
                    name='tempFah'
                    temp={tempFahrenheit}
                />
            </div>
        )
    }
}

export default PrManageState;