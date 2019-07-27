// Import React
import React, { Component } from 'react'

// Import Component
import MenuItem from '../components/MenuItem'

// Import Data
import dessertData from "../Data/dataDesserts"

export default class MenuDesserts extends Component {
    render() {
        const desserts = dessertData.map(dessertItem => <MenuItem 
            key={dessertItem.id} 
            id={dessertItem.id}
            title={dessertItem.title} 
            description={dessertItem.description} 
            price={dessertItem.price}
            recommended={dessertItem.recommended}
        />)

        return (
            <div className="menu-block desserts"> 
                <div className="menu-wrapper">
                    <h1 className="menu-title">Desserts</h1>
                    <div className="menu-line"/>
                    {desserts}
                </div>
            </div>
        )
    }
}
