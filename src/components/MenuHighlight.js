import React from 'react'

export default function MenuHighlight({title, subtitle, highlightImg, bgColor}) {
    return (
        <div className="menu-highlight">
            <div className={bgColor}>
                <span className="menu-highlight-subtitle">{subtitle}</span>
                <h4 className="menu-highlight-title">{title}</h4>
            </div>
            <div className={highlightImg}>
            </div>
        </div>
    )
}

// If there is no prop given it the background will default to the "defaultHero" class
MenuHighlight.defaultProps = {
    highlightImg: "default-highlight"
}