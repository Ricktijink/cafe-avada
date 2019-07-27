// React
import React from 'react'

// Components
import SmallHero from '../components/SmallHero'
import Footer from '../components/Footer';
import Statistics from '../components/Statistics'
import Blog from '../components/Blog'
import ScrollToTopOnMount from '../components/ScrollToTop'

export default function OurStory() {
    return (
        <div className="page-wrapper">
            <ScrollToTopOnMount />
            <SmallHero heroImg="ourstory-hero" title="Our Story" headline="Born from our love of good coffee, cold beer and fine food. It's been quite a journey."/>
            <Blog />
            <Statistics />
            <Footer />
        </div>
    )
}
