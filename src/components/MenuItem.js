import React from 'react'

export default function MenuItem(props) {
    return (
        <div className="menu-item">
            <h3 className="menu-item-name">{props.title} ${props.price}</h3>
            <span className="menu-item-description">{props.description}</span>
        </div>
    )
}
