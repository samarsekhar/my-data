import React, { Component } from "react";
import Axios from "axios";
class PostForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            userId: "",
            title: "",
            body: "",

        }
    }
    componentDidMount() {
        Axios.get("https://jsonplaceholder.typicode.com/posts", this.state)
            .then((response) => {
                console.log(response);
            })
            .catch()
    }
    handleChange = (event) => {
        this.setState({
            [event.target.name]: event.target.value
        })
    }
    handleSubmit = (event) => {
        event.preventDefault();  //if for prevent from los after clicking submit button
        console.log(this.state);
    }
    render() {
        const { userId, title, body } = this.state;

        return (
            <div>
                <div className="container mt-5">
                    <div className="row">
                        <div className="col-md-8">
                            <form action="" onSubmit={this.handleSubmit}>
                                <div>
                                    <input type="text"
                                        placeholder="User ID"
                                        value={userId}
                                        onChange={this.handleChange}
                                        name="userId" />
                                </div>
                                <br />
                                <div>
                                    <input type="text"
                                        placeholder="Title"
                                        value={title}
                                        onChange={this.handleChange}
                                        name="title" />
                                </div>
                                <br />
                                <div>
                                    <input type="text"
                                        placeholder="Body"
                                        value={body}
                                        onChange={this.handleChange}
                                        name="body" />
                                </div>
                                <br />
                                <div>
                                    <button type="submit" className="btn btn-success"> Submit </button>
                                </div>

                            </form>
                        </div>
                    </div>
                </div>
            </div>
        );
    };
};
export default PostForm;