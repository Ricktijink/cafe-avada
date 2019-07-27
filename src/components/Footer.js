// React
import React, { Component } from 'react'

// Assets
import FooterLogoImg from '../images/footer-logo.png'
import { FaRegEnvelope, FaPhone, FaThumbtack, FaFacebookF, FaTwitter, FaInstagram, FaGooglePlusG } from 'react-icons/fa'

export default class Footer extends Component {

    state={
        contacts: [
            {
                icon: <FaRegEnvelope/>,
                title: "EMAIL",
                info: "info@your-domain.com"
            },
            {
                icon: <FaPhone/>,
                title: "CALL",
                info: "+44 734 8820 102847"
            },
            {
                icon: <FaThumbtack/>,
                title: "FIND US",
                info: "12345 North Main Street, NY"
            }
        ]
    }
    render() {
        return (
            <footer>
                <img src={FooterLogoImg} className="footer-logo" alt="Logo"/>
                <div className="footer-line" />
                <div className="footer-contact-options">
                    {this.state.contacts.map((contact, index) => {
                        return ( 
                            <article key={index} className="contact-option">
                                <span>{contact.icon}</span>
                                <h3>{contact.title}</h3>
                                <p>{contact.info}</p>
                            </article>
                        )
                    })}
                </div>
                <div className="footer-line" />
                <div className="footer-area">
                    <div className="footer-copyright">
                        © Copyright 2012 - 2019   |   Avada Theme by <span>Theme Fusion</span> |   All Rights Reserved   |   Powered by <span>WordPress</span>
                    </div>
                    <div className="social-icons-footer">
                        <span className="social"><FaFacebookF /></span>
                        <span className="social"><FaTwitter /></span>
                        <span className="social"><FaInstagram /></span>
                        <span className="social"><FaGooglePlusG /></span>
                    </div>
                </div>
            </footer>
        )
    }
}
