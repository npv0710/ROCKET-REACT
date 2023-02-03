import { useState } from 'react';
import './App.css';
import CustomInput from './components/custominput/CustomInput';
import DemoClassComponent from './components/DemoClassComponent';
import DemoFunctionCoponent from './components/DemoFunctionComponent';
import DemoFragment from './components/fragment/DemoFragment';
import ContainerComponent from './components/sharedata/ContainerComponent';
import PrManageState from './components/sharedata/PrManageState';
import Signin from './pages/signin/Signin';

import { BrowserRouter as Router, Link, Redirect, Route, Switch } from 'react-router-dom';
import Home from './pages/home/Home';
import Signup from './pages/singup/Signup';
import PersonList from './components/sharedata/PersionList';
import Person from './components/sharedata/Person';

import { persons } from './data/index';
import PersonDetail from './components/sharedata/PersonDetail';

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

    const [loggedIn, setLoggedIn] = useState(true)

    return (
        // <div className="App">
        //     <DemoClassComponent  
        //         x={lastName}/** props */
        //         y={500}
        //         getData={_getData}
        //     />
        //     <DemoFunctionCoponent 
        //         lastName={lastName}
        //         getData={_getData}
        //     />
        //     <form>
        //         <h1>Sign In</h1>
        //         <CustomInput
        //             type="text"
        //             name="username"
        //             label="Username"
        //             placeholder="Username"
        //             inputChange={_inputChange}
        //         />
        //         <CustomInput
        //             type="password"
        //             name="password" 
        //             label="Pasword"
        //             placeholder="Password"
        //             inputChange={_inputChange}
        //         />
        //         <button type='submit' onClick={submitForm}>Submit</button>
        //     </form>

        //     {/* Buoi4 */}
        //     <br></br>
        //     <br></br>
        //     <hr></hr>
        //     <h1>Ro26-React Buoi4 </h1>
        //     <DemoFragment />
        //     <div style={{
        //         height: '600px', 
        //         width: '600px', 
        //         margin: 'auto', 
        //         paddingTop: '50px',
        //         border: '1px solid green'
        //     }}>
        //         <CustomInput 
        //             type="email"
        //             name="email" 
        //             label="Email Address *"
        //             //placeholder="Email Address *"
        //         />
        //     </div>
        // </div>

        // <ContainerComponent />
        <Router>
            <div className='App'>
                <div className='menu-links'>
                    <nav>
                        <ul>
                            <Link to='/'>Home</Link>
                            <Link to='/signin'>Signin</Link>
                            <Link to='/signup'>Signup</Link>
                            <Link to='/persons'>Persons List</Link>
                            <Link to='/persons/1'>Person detail id = 1</Link>
                        </ul>
                    </nav>
                </div>
                
                <Switch>
                    {/* <Route path='/' exact component={Home}/> */}
                    <Route path='/' exact render={() => (
                        !loggedIn ? <Redirect to='/sigin' /> : <Home />
                    )}/>
                    <Route path='/signin' component={Signin}/>
                    <Route path='/signup' component={Signup}/>
                    <Route path='/persons' exact render={routeProps => <PersonList persons={persons} {...routeProps}/>}/>
                    <Route path='/persons/:id' render={routeProps => <PersonDetail {...routeProps}/>}/>
                </Switch>
            
            </div>
        </Router>
    );
}

export default App;
