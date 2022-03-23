import React, { Component } from "react";
import Axios from "axios";
class PostList extends Component {
    constructor(props) {
        super(props)
        this.state = {
            posts: [],
        }
    }
    componentDidMount() {
        Axios.get("https://jsonplaceholder.typicode.com/posts")
            .then((response) => {
                this.setState({
                    posts: response.data
                })
                console.log(response);
            })
            .catch()
    }
    render() {
        const { posts } = this.state;    //-destructuring

        return (
            <div>
                <h1>List of Post</h1>
                {
                    posts.map((post) => {
                        return (
                            <div key={post.id}> {post.title} </div>
                        )
                    })
                }
            </div>
        )
    };
};
export default PostList;