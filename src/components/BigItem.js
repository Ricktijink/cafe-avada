// React
import React from 'react'

// Assets
import Img1 from '../images/img1.jpg'
import Img2 from '../images/img2.jpg'

export default function BigItem() {
    return (
        <div className="big-item">
            <span className="big-item-title">A new way of eating</span>
            <span className="big-item-subtitle">A new way of eating</span>
            <div className="big-item-line"/>
            <img src={Img1} alt="Plaatje 1" />
            <img src={Img2} alt="Plaatje 2" />
            <p>
                Café au lait, breve coffee latte froth shop macchiato grinder. Wings cream steamed 
                single shot, cup cinnamon et aroma acerbic chicory aroma java. Plunger pot medium, latte 
                chicory coffee extra cappuccino siphon frappuccino extraction kopi-luwak chicory. Flavour, 
                body aromatic sit french press java. Qui kopi-luwak qui in mazagran galão decaffeinated java. 
                Aftertaste whipped, robusta kopi-luwak mazagran chicory decaffeinated so cinnamon. 
                Frappuccino grinder aged, mug plunger pot caramelization latte eu spoon. Cup, flavour, 
                spoon plunger pot and, strong, macchiato organic whipped sugar.
            </p>
            <button>Learn More</button>
        </div>
    )
}
