import { Component } from "react";
import PostClassComponet from "./PostClassComponent";

class DemoLifeCycle extends Component {

    constructor(props) {
        super(props);
        this.state = {
            flagShowing: true,
            message: '',
            flagShowClock: true,
            titleColor: 'red',
            postId: 1,
        }
    }

    randomPostId = () => {
        let postId = Math.floor(Math.random() * 3) + 1;
        console.log('Post Id random on the parent component: '+ postId);
        this.setState({
            postId: postId
        })
    }

    render() {
        console.log('Component DemoLifeCycle render...');

        return(
            <div className="demo-lifecycle">
                <h1> Demo life cycle component</h1>
                <h4>Current postId: {this.state.postId}</h4>
                <button onClick={this.randomPostId}>Random Post Id</button>
                <PostClassComponet postId={this.state.postId}/>
            </div>
        )
    }
}

export default DemoLifeCycle;