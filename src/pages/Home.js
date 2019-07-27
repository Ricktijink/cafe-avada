// React
import React from 'react'

// Components
import Hero from '../components/Hero'
import BigItemsRow from '../components/BigItemsRow';
import Reservations from '../components/Reservations'
import MediumItemsRow from '../components/MediumItemsRow';
import SmallItemsRow from '../components/SmallItemsRow';
import Footer from '../components/Footer';
import ScrollToTopOnMount from '../components/ScrollToTop'

export default function Home() {
    return (
        <div className="page-wrapper">
            <ScrollToTopOnMount />
            <Hero /> 
            <BigItemsRow />
            <Reservations />
            <MediumItemsRow />
            <SmallItemsRow />
            <Footer />
        </div>
    )
}
