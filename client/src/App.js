import React, { Component } from 'react';

import axios from 'axios';

class App extends Component {
  state = {
    blogs: []
  }

  componentDidMount() {
    axios.get('/api/blogs')
      .then(response => {        
        this.setState({ blogs: response.data });
      })
      .catch(e => {
        console.log(e);
      });
  }

  renderBlogs = () => {
    return this.state.blogs.map(blog => {
      return <h1 key={blog.id}>{blog.blog}</h1>
    });
  }

  render(){
    console.log(this.state.blogs);
    return (
      <div>
        <h1>Hello World</h1>
        { this.renderBlogs() } 
      </div>
    );
  }
}

export default App;
