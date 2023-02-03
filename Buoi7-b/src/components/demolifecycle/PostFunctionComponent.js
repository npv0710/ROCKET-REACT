import { useState } from "react";

const PostFunctionCoponent = props => {
    const [post, setPost] = useState(
        {
            id: 2,
            userId: 20,
            title: 'Reading News',
            body: 'NewYork Times'
        }
    );

    return (
        <div className="post-function-componet">
            <h2>Post function component</h2>
            <br></br>
            <br></br>
            <p>Id: {post.id}</p>
            <p>User Id: {post.userId}</p>
            <p>Title: {post.title}</p>
            <p>Content: {post.body}</p>
        </div>
    )
}

export default PostFunctionCoponent;