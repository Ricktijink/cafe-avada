// Import React
import React from 'react'

// Import Assets
import { FaPhone, FaRegEnvelope, FaChrome } from 'react-icons/fa'

export default function Establishment(props) {
    return (
        <div className="establishment">
            <h3 className="establishment-title">{props.title}</h3>
            <p>
                {props.street} <br/> 
                {props.city}, {props.zipcode} <br/>
                <br/>
                <FaPhone className="establishment-icon"/> <span>{props.phonenumber}</span> <br/>
                <FaRegEnvelope className="establishment-icon"/> <span>{props.email}</span> <br/>
                <FaChrome className="establishment-icon"/> <span>{props.website}</span>
            </p>
            
        </div>
    )
}
