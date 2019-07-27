// React
import React, { Component } from 'react'

// Assets
import { FaCoffee, FaBeer, FaUtensils, FaFire } from 'react-icons/fa'

export default class Statistics extends Component {

    state={
        statistics: [
            {
                icon: <FaCoffee/>,
                number: "105623",
                description: "COFFEE CUPS"
            },
            {
                icon: <FaBeer/>,
                number: "10348",
                description: "PINT GLASSES"
            },
            {
                icon: <FaUtensils/>,
                number: "16923",
                description: "STEAKS SERVED"
            },
            {
                icon: <FaFire/>,
                number: "23732",
                description: "BURGERS GRILLED"
            }
        ]
    }

    render() {
        return (
            <div className="statistics"> 
                {this.state.statistics.map((stats, index) => {
                    return ( 
                        <article key={index} className="statistic-block">
                            <span>{stats.icon}</span>
                            <h3>{stats.number}</h3>
                            <p>{stats.description}</p>
                        </article>
                    )
                })}
            </div>
        )
    }
}
