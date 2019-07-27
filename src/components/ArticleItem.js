import React from 'react'

export default function ArticleItem({bg, title, subtitle, article}) {
    return (
        <div className={bg}>
            <div className="article-item-wrapper">
                <h3 className="article-item-title">{title}</h3>
                <span className="article-item-subtitle">{subtitle}</span>
                <div className="article-item-line"/>
                <p>{article}</p>
            </div>
        </div>
    )
}
