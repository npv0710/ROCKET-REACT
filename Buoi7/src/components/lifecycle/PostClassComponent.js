import { Component } from "react";
import axios from "axios";


class PostClassComponet extends Component {
    constructor(props) {
        super(props);
        this.state = {
            post: {}
        }
    }

    /* Mounting */
    componentWillMount() {//Khong dùng nữa
        //console.log('component willmount...');
    }

    componentDidMount() {
        console.log('Component post class did mount...');
    }

    componentWillUnmount() {
        console.log('Component post class will unmount...');
    }

    /* Updating */
    componentWillReceiveProps() {
        //console.log('Component post class will receive props...');
    }

    shouldComponentUpdate(nextProps, nextState) {//important
        console.log('new props: ');
        console.log('%c hello world ', 'background: #222; color: #bada55');
        console.log(nextProps.toString());
        console.log('current props: ');
        console.log(this.props);
        if (nextProps.postId === this.props.postId)
            return false;
        else return true;
    }

    //important
    componentWillUpdate(nextProps){
        
    }

    componentDidUpdate(prevProps) {
        // console.log('Component post class did update...');
        // console.log(prevProps);
    }

    getPost = async(id) => {
        try {
            const response = await axios.get('https://jsonplaceholder.typicode.com/posts/' + id);
            console.log(response);
            // this.setState({
            //     post: response.data
            // })

        }catch (err) {
            console.log(err)
        }
    }

    render () {
        console.log('Post component rendered...');
        return(
            <div>
                <h2 style={{color:this.state.color}}>Post class componet</h2>
                <h3>Post id received from parent: {this.props.postId}</h3>
                <br></br>
                <br></br>
                <p>Id: {this.state.post.id}</p>
                <p>User Id: {this.state.post.userId}</p>
                <p>Title: {this.state.post.title}</p>
                <p>content:</p>
                <p>{this.state.post.body}</p>
            </div>
        )
    }
}

export default PostClassComponet;
