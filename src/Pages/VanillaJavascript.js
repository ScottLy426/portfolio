import React from 'react';
import MenuItems from '../Components/MenuItems';
import Title from '../Components/Title';
import vanillajs from '../Components/allVanillaJavascript';
import { useState } from 'react';

const allCategories = ['All', ...new Set(vanillajs.map(item => item.category))];

function PortfoliosPage() {
    const [categories, setCategories] = useState(allCategories);
    const [menuItems, setMenuItems] = useState(vanillajs);

    const filter = (category) =>{
        if(category === 'All'){
            setMenuItems(vanillajs)
            return;
        }
        const filteredData  = vanillajs.filter((item)=>{
            return item.category === category;
        })
        setMenuItems(filteredData);
    }

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
