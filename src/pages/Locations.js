// Import React
import React from 'react'

// Import Components
import SmallHero from '../components/SmallHero'
import Establishments from '../components/Establishments'
import Footer from '../components/Footer'
import ScrollToTopOnMount from '../components/ScrollToTop'

export default function Locations() {
    return (
        <div className="page-wrapper">
            <ScrollToTopOnMount />
            <SmallHero heroImg="locations-hero" title="Our Locations" headline="We have establishments all around the world!"/>
            <Establishments />
            <Footer />
        </div>
    )
}