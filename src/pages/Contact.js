// Import React
import React from 'react'

// Import Components
import SmallHero from '../components/SmallHero'
import ScrollToTopOnMount from '../components/ScrollToTop'
import Reservations from '../components/Reservations'
import ContactForm from '../components/ContactForm'
import Footer from '../components/Footer';

export default function Contact() {
    return (
        <div className="page-wrapper">
            <ScrollToTopOnMount />
            <SmallHero className="small-hero" heroImg="aboutus-hero" title="GET IN TOUCH!" headline="HAVE QUESTIONS? WE’LL BE HAPPY TO ANSWER!"/>
            <ContactForm />
            <Reservations />
            <Footer />
        </div>
    )
}
