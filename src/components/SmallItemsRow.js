// React
import React from 'react'
import SmallItem from './SmallItem';

// Components

// Assets
import SmallItemIMG1 from '../images/small-item-1.png'
import SmallItemIMG2 from '../images/small-item-2.png'
import SmallItemIMG3 from '../images/small-item-3.png'
import SmallItemIMG4 from '../images/small-item-4.png'

export default function SmallItemsRow() {
    return (
        <div className="small-items-row">
            <SmallItem category="Latest News" title="New store opened" img={SmallItemIMG4} />
            <SmallItem category="Food Special" title="Lemon Zest Brownies" img={SmallItemIMG2}  />
            <SmallItem category="Latest News" title="10% Student Discount" img={SmallItemIMG3}  />
            <SmallItem category="Latest News" title="Faster Wifi Hotspots" img={SmallItemIMG1}  />
        </div>
    )
}
