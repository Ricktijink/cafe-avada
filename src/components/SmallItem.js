import React from 'react'

export default function SmallItem({img, category, title}) {
    return (
        <div className="small-item-wrapper">
            <img src={img} alt="img" />
            <div className="small-item-content">
                <span className="small-item-category">{category}</span>
                <h2 className="small-item-title">{title}</h2>
            </div>
        </div>
    )
}
