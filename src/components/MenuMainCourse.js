import React, { Component } from 'react'

// Import Component
import MenuItem from '../components/MenuItem'

// Import Data
import maincourseData from "../Data/dataMains"

export default class MenuMainCourse extends Component {
    render() {
        const mains = maincourseData.map(mainItem => <MenuItem 
            key={mainItem.id} 
            id={mainItem.id}
            title={mainItem.title} 
            description={mainItem.description} 
            price={mainItem.price}
            recommended={mainItem.recommended}
        />)

        return (
            <div className="menu-block main-course"> 
                <div className="menu-wrapper">
                    <h1 className="menu-title">Main Course</h1>
                    <div className="menu-line"/>
                    {mains}
                </div>
            </div>
        )
    }
}
