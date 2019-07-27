// Import React
import React, { Component } from 'react'

// Import Components
import BlogItem from '../components/BlogItem'

// Import Data
import blogData from "../Data/blogData"

export default class Blog extends Component {

    render() {

        const blogPosts = blogData.slice(-4).reverse().map(blogItem => <BlogItem 
            key={blogItem.id} 
            id={blogItem.id}
            img={blogItem.img} 
            title={blogItem.title} 
            text={blogItem.text}
            slug={blogItem.slug}
        />)
        
        return (
            <div className="blog-section">
                <div className="blog-wrapper">
                    {blogPosts}
                </div>
                <button className="load-more-btn">Load more posts</button>
            </div>
        )
    }
}
