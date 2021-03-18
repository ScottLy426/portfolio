import React from 'react';
import MenuItems from '../Components/MenuItems';
import Title from '../Components/Title';
import appclones from '../Components/allAppClones';
import { useState } from 'react';



function AppClones() {
    const [menuItems, setMenuItems] = useState(appclones);
    
    return (
        <div className="PortfolioPage">
            <div className="title">
                <Title title={'App Clones'} span={'App Clones'} />
            </div>
            <div className="portfolios-data">
                <MenuItems menuItem={menuItems} />
            </div>
        </div>
    )
}

export default AppClones;
