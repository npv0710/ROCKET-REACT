import { useState } from 'react';
import './App.css';
import CustomInput from './components/custominput/CustomInput';
import DemoClassComponent from './components/DemoClassComponent';
import DemoFunctionCoponent from './components/DemoFunctionComponent';

function App() {
    const lastName = 'Rooney';
    
    const [username, setUsername] = useState('');

    const [password, setPassword] = useState('');

    const _getData = (msg) => {
        console.log('Message received from the child component: ');
        console.log(msg);
    }

    const submitForm = (e) => {//e: event
        e.preventDefault();
        console.log(e);

        alert('Username: ' + username + '; ' + password);
    }

    const _inputChange = (e) => {
        console.log(e.target);
        console.log(e.target.value);
        console.log(e.target.name);

        if (e.target.name === 'username') {
            setUsername(e.target.value);
        }
        if (e.target.name === 'password') {
            setPassword(e.target.value);
        }
    }

    return (
        <div className="App">
            <DemoClassComponent  
                x={lastName}/** props */
                y={500}
                getData={_getData}
            />
            <DemoFunctionCoponent 
                lastName={lastName}
                getData={_getData}
            />
            <form>
                <h1>Sign In</h1>
                <CustomInput
                    type="text"
                    name="username"
                    label="Username"
                    placeholder="Username"
                    inputChange={_inputChange}
                />
                <CustomInput
                    type="password"
                    name="password" 
                    label="Pasword"
                    placeholder="Password"
                    inputChange={_inputChange}
                />
                <button type='submit' onClick={submitForm}>Submit</button>
            </form>
        </div>
    );
}

export default App;
