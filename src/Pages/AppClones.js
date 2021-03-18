import React from 'react';
import MenuItems from '../Components/MenuItems';
import Title from '../Components/Title';
import appclones from '../Components/allAppClones';
import { useState } from 'react';

const allCategories = ['All', ...new Set(appclones.map(item => item.category))];

function AppClones() {
    const [categories, setCategories] = useState(allCategories);
    const [menuItems, setMenuItems] = useState(appclones);

    const filter = (category) =>{
        if(category === 'All'){
            setMenuItems(appclones)
            return;
        }
        const filteredData  = appclones.filter((item)=>{
            return item.category === category;
        })
        setMenuItems(filteredData);
    }

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
