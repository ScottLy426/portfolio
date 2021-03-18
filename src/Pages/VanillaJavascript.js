import React from 'react';
import MenuItems from '../Components/MenuItems';
import Title from '../Components/Title';
import vanillajs from '../Components/allVanillaJavascript';
import { useState } from 'react';

function PortfoliosPage() {
   
    const [menuItems, setMenuItems] = useState(vanillajs);



    return (
        <div className="PortfolioPage">
            <div className="title">
                <Title title={'Vanilla Javascript'} span={'Vanilla Javascript'} />
            </div>
            <div className="portfolios-data">
                <MenuItems menuItem={menuItems} />
            </div>
        </div>
    )
}

export default PortfoliosPage;
