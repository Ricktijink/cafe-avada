// Import React
import React, { Component } from 'react'

// Import Components
import Establishment from '../components/Establishment'

// Import Data
import establishmentData from '../Data/establishmentData'

export default class Locations extends Component {

    render() {

        const establishments = establishmentData.map(establishment => <Establishment 
            key={establishment.id}
            title={establishment.title} 
            street={establishment.street}
            city={establishment.city}
            zipcode={establishment.zipcode}
            phonenumber={establishment.phonenumber}
            email={establishment.email}
            website={establishment.website}
        />)

        return (
            <div className="establishments">
                { establishments }
            </div>
        )
    }
}