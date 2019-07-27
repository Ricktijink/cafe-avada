//  Import React
import React from 'react'
import { Link } from 'react-router-dom'
 
// Import Assets
import { FaLink, FaSearch } from 'react-icons/fa'

export default function BlogItem(props) {
    return (
        <div className="blog-item">
            <div className="blog-item-img">
                <img src={props.img} alt="blog-img"/>
                <div className="overlay">
                    <div className="overlay-items">
                        <span className="icon">
                            <a href={`blog/${props.slug}` }><FaLink/></a>
                        </span>
                        <span className="icon">
                            <a rel="noopener noreferrer" target="_blank" href={props.img}><FaSearch/></a>    
                        </span>
                    </div>
                </div>
            </div>
            <div className="blog-item-content">
                <h3 className="blog-item-title">{props.title}</h3>
                <div className="blog-item-line"/>
                <p>{props.text}</p>
                <Link to={`blog/${props.slug}`} className="read-more">Read more</Link>
            </div>
        </div>
    )
}
