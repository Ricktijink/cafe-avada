// Import React
import React from 'react'

// Assets
// import drinkImg1 from '../images/drinks.jpg'
// import drinkImg2 from '../images/drinks-1.jpg'

export default function DrinksList() {

    // // Change Image on mouse over
    // window.onload=function(){
    //     const thing1 = document.querySelector("#test1")
    //     const thing2 = document.querySelector("#test2")
    //     // drink 1
    //     thing1.addEventListener("mouseover", event => {
    //         document.getElementById("drink1").style.display = "block";
    //         document.getElementById("drink2").style.display = "none";
    //     })
    //     // drink 2
    //     thing2.addEventListener("mouseover", event => {
    //         document.getElementById("drink1").style.display = "none";
    //         document.getElementById("drink2").style.display = "block";
    //     })
    // }

    return (
        <div className="drinks-list">
            {/* Dit uit een data file halen?? */}
            <ul>
                <li><span className="drink-name" id="test1">CHAPEL DOWN</span><span className="drink-price">$14.95</span></li>
                <li><span className="drink-name" id="test2">CHANDON</span><span className="drink-price">$7.55</span></li>
                <li><span className="drink-name">MEANTIME PILSNER</span><span className="drink-price">$9.95</span></li>
                <li><span className="drink-name">CAMDEN HELLS LAGER</span><span className="drink-price">$32.75</span></li>
                <li><span className="drink-name">WILD WOOD</span><span className="drink-price">$12.95</span></li>
                <li><span className="drink-name">16 STOPS MCLAREN</span><span className="drink-price">$5.50</span></li>
                <li><span className="drink-name">MALBEC MONTES CLASSIC</span><span className="drink-price">$19.95</span></li>
                <li><span className="drink-name">EXCELSIOR</span><span className="drink-price">$14.95</span></li>
            </ul>

        </div>
    )
}
