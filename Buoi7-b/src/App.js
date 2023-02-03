import Home from "./pages/home/Home";
import Signin from "./pages/signin/Signin";
import Signup from "./pages/signup/Signup";
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import WithLoading from "./components/widthloading/WithLoading";

const SigninWithLoading = WithLoading(Signin);

function App() {
    const username = 'Nguyen Quang Hai';
    /**
     * 
     * State {*} function component 
     */
    // const [color, setColor] = useState('black'); // Sử dụng state trong fc componet

    // const _receiveData = (number) => {
    //     console.log('number received from child component: ' + number);
    // }

    // const _getRandomColor = colorRandom => {
    //     console.log(color)

    //     setColor(colorRandom)
    // }

    // const [sidebarIsOpen, setSidebarIsOpen] = useState(true)

    // const _toggleSidebar = () => {
    //     setSidebarIsOpen(!sidebarIsOpen);
    // }
    /**
     * Nếu không dùng props exact thì route cha phải đứng dưới route con
     */
    return (
        <Router>
            <div className="App">
                <Switch>
                    <Route path='/' exact component={Home} />
                    <Route path='/signin' component={SigninWithLoading} />
                    <Route path='/signup' component={Signup} />

                    {/* <Route path='/' component={Home} /> */}
                </Switch>
            </div>
        </Router>
    );
}

export default App;
