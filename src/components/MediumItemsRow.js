// React
import React from 'react'

// Components
import MediumItemHighlight from './MediumItem';


export default function MediumItemsRow() {
    return (
        <section className="medium-items-row">
            <MediumItemHighlight category="Food Special" location="New York City, USA" title="Avada cafe announces the world famous avada swiss cheeseburger" />
            <MediumItemHighlight category="Exclusive promotion" location="London, united kingdom" title="Avada cafe london introduces special 10% discount for students" />
        </section>
    )
}
