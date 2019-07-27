import React from 'react'

export default function MediumItem({category, location, title}) {
    return (
        <div className="medium-item">
            <span className="medium-item-category">{category}</span>
            <span className="medium-item-location">{location}</span>
            <h2 className="medium-item-title">{title}</h2>
            <div className="medium-item-line"/>
        </div>
    )
}
