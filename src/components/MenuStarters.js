// Import React
import React, { Component } from 'react'

// Import Component
import MenuItem from '../components/MenuItem'

// Import Data
import starterData from "../Data/dataStarters"

export default class MenuStarters extends Component {
    
    render() {
        const starters = starterData.map(starterItem => <MenuItem 
            key={starterItem.id} 
            id={starterItem.id}
            title={starterItem.title} 
            description={starterItem.description} 
            price={starterItem.price}
            recommended={starterItem.recommended}
        />)

        return (
            <div className="menu-block starter"> 
                <div className="menu-wrapper">
                    <h1 className="menu-title">Starters</h1>
                    <div className="menu-line"/>
                    {starters}
                </div>
            </div>
        )
    }
}
