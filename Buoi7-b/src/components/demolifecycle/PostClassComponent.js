import { Component } from 'react';
import axios from 'axios';

class PostClassComponent extends Component {

    /** Mounting
    *   constructor; componnetWillMount(không dùng);
    *   render; componentDidMount
    **/
    constructor(props) {
        console.log('Post class: constructor...');
        super(props);
        this.state = {
            post: {
                id: '',
                userId: '',
                title: '',
                content: ''
            }
            // post: {
            //     id: 1,
            //     userId: 10,
            //     title: 'Review Film',
            //     body: 'Avarta 2 is mazing'
            // }
        }
    }

    componentWillMount() {
        console.log('Post class: componentWillMount...');
    }

    componentDidMount() {//Chạy một lần duy nhất
        console.log('Post class: componentDidMount...');
        //Call Api get data here
        this.getPost(3);
    }

    /** Updateting
    *   shouldComponentUpdate; componentDidUpdate
    **/

    shouldComponentUpdate(newProps, newState) {
        if (newProps.postId !== this.props.postId || newState.post !== this.state.post) return true
        else return false;
    }

    componentDidUpdate(prevProps) {
        //Call Api khi props thay đổi
        if (prevProps.postId !== this.props.postId) {
            this.getPost(this.props.postId);
        }
    }

     /** Unmounting
    *   componentWillUnmount
    **/
    componentWillUnmount() {
        console.log('Post class: componentWillunmount')     
    }

    getPost = async id => {
        try {
            const response = await axios.get('https://jsonplaceholder.typicode.com/posts/' + id);
            console.log(response.data)
            this.setState({
                post: response.data
            })
        }catch(err) {
            console.log(err)
        }
        //console.log(response)
    }

    render() {
        console.log('Post class: component Render...');

        console.log('post id from parent: ' + this.props.postId);

        return (
            <div className='post-class-coponent'>
                <h2>Post class component</h2>
                <br></br>
                <br></br>
                <p>Id: {this.state.post.id}</p>
                <p>User Id: {this.state.post.userId}</p>
                <p>Title: {this.state.post.title}</p>
                <p>Content: {this.state.post.body}</p>
            </div>
        )
    }
}

export default PostClassComponent;