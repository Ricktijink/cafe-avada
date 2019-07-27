// Import React
import React from 'react'
import DrinksDescription from './DrinksDescription';
import DrinksList from './DrinksList';
import DrinksImage from './DrinksImage';



export default function DrinksRow() {
    return (
        <div className="drinks-row">
            <DrinksDescription />
            <DrinksList />
            <DrinksImage />
        </div>
    )
}
