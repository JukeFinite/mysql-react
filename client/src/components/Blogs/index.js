import React from 'react';

export default (props) => {
    return props.blogs.map(blog => {
        return <h1 key={blog.id}>{blog.blog}</h1>
    });
}