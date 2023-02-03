import PostClassComponent from "./PostClassComponent";
import PostFunctionCoponent from "./PostFunctionComponent";

const { Component } = require("react");

class DemoLifeCycle extends Component {
    constructor(props) {
        //console.log('Comoponent demo: constructor...');
        super(props);
        this.state = {
            postId: 1,
            flagPostClassComponentIsShowing: true
        }
        this.randomId = this.randomId.bind(this);
    }

    componentWillMount() {//Không dùng nữa
        //console.log('Component demo: will mount...');
    }

    componentDidMount() {
        //console.log('Component demo: did mount...');
        // Call Api get data or logic here...
    }
    
    randomId() {
        let postId = Math.floor(Math.random() * 3) + 1;
        
        console.log('Id random: '+ postId);

        //console.log(this);

        this.setState({
            postId: postId
        })
    }

    // randomId = () => {
    //     let postId = Math.floor(Math.random() * 3) + 1;
    //     this.setState({
    //         postId: postId
    //     })
    // }

    togglePostClassComponent = () => {
        this.setState({
            flagPostClassComponentIsShowing: !this.state.flagPostClassComponentIsShowing
        })
    }

    render() {
        //this.randomId();
        //console.log('Component demo: render...');
        return(
            <div className="demo-life-cycle">
                <h1>Demo Life Cycle</h1>
                <button onClick={this.randomId}>Random Id</button>
                <button style={{cursor: 'pointer'}} onClick={this.togglePostClassComponent}>Toggle Post Class Component</button>
                {
                    this.state.flagPostClassComponentIsShowing && <PostClassComponent postId={this.state.postId}/>
                }
                <PostFunctionCoponent />
            </div>
        )
    }

}

export default DemoLifeCycle;