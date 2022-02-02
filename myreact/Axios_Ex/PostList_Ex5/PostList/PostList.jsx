import React from "react";
import Axios from "axios";

class PostList extends React.Component {
    state = {
        title: "",
    }
    handleChange = (event) => {
        this.setState({ name: event.target.value });
    }
    handleSubmit = (event) => {
        event.preventDefault();

        const post = {
            title: this.state.title
        };
        Axios.post("https://jsonplaceholder.typicode.com/posts", { post })
            .then(response => {
                console.log(response);
                console.log(response.data);
            })
    }
    render() {
        return (
            <div>
                <h1>Post List Pages</h1>
                <div className="container mt-5">
                    <div className="row">
                        <div className="col-md-4">
                            <form onSubmit={this.handleSubmit} >
                                <label>
                                    Post Title:
                                    <input type="text" name="title" onChange={this.handleChange} />
                                </label>
                                <button type="submit">Add</button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        )
    };
};
export default PostList;