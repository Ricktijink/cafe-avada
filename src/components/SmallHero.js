import React from 'react'

export default function SmallHero({title, headline, heroImg}) {
    return (
        <section className={heroImg}> 
            <div className="smallhero-wrapper">
                <h1 className="smallhero-title">{title}</h1>
                <div className="smallhero-line"/>
                <p className="smallhero-headline">{headline}</p>
            </div>
        </section>
    )
}

// If there is no prop given it the background will default to the "defaultHero" class
SmallHero.defaultProps = {
    heroImg: "default-smallhero"
}