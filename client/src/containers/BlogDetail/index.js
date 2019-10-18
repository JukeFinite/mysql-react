import React, { Component } from 'react';

import axios from 'axios';

class BlogDetail extends Component {
    state = {
        blog: {},
        comments: []
    }

    async componentDidMount(){
        const { id } = this.props.match.params;
        try {
            const blogResponse = await axios.get(`/api/blogs/${id}`);
            const commentResponse = await axios.get(`/api/blogs/comments/${id}`);
            const blog = blogResponse.data;
            const comments = commentResponse.data;
            this.setState({ blog, comments });
        } catch(e) {
            console.log(e);
        }
        
    }

    renderComments = () => {
        return this.state.comments.map(comment => {
            return <li key={comment.id}>{comment.comment}</li>
        });
    }

    render() {      
        console.log(this.props.match.params.id);
        return (
            <div>
                <h1>Blog Detail Page</h1>
                <h3>{this.state.blog.blog}</h3>
                <h4>Comments</h4>
                <ul>
                    { this.renderComments() }
                </ul>
            </div>
        )
    }
}

export default BlogDetail;






