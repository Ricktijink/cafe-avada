// React
import React from 'react'

// Components
import SmallHero from '../components/SmallHero'
import Footer from '../components/Footer'
import MenuBlock from '../components/MenuBlock'
import MenuStarters from '../components/MenuStarters'
import MenuMainCourse from '../components/MenuMainCourse'
import MenuDesserts from '../components/MenuDesserts'
import MenuHighlight from '../components/MenuHighlight';
import Reservations from '../components/Reservations';
import MediumItemsRow from '../components/MediumItemsRow';
import SmallItemsRow from '../components/SmallItemsRow';
import DrinksRow from '../components/DrinksRow';
import ScrollToTopOnMount from '../components/ScrollToTop'

export default function FoodAndDrinks() {
    return (
        <div className="page-wrapper">
            <ScrollToTopOnMount />
            <SmallHero heroImg="foodanddrinks-hero" title="Food &amp; Drinks" headline="Tender steaks, tasty burgers and light bites. Wash it down with a coffee or a beer."/>
            <MenuBlock>
                <MenuStarters/>
                <MenuHighlight title="SEA-TROUT $26.95" subtitle="Recommended Starter" highlightImg="highlight-starter" bgColor="light-highlight" />
            </MenuBlock>
            <MenuBlock>
                <MenuMainCourse/>
                <MenuHighlight title="ENGLISH-ASPARAGUS $14.95" subtitle="Recommended Main Course" highlightImg="highlight-maincourse" bgColor="dark-highlight" />
            </MenuBlock>
            <MenuBlock>
                <MenuDesserts/>
                <MenuHighlight title="SEA-TROUT $26.95" subtitle="Recommended Dessert" highlightImg="highlight-dessert" bgColor="light-highlight" />
            </MenuBlock>
            <DrinksRow>
                
            </DrinksRow>
            <Reservations />
            <MediumItemsRow />
            <SmallItemsRow />
            <Footer />
        </div>
    )
}
