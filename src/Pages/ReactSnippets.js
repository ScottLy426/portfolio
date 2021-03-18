import React from 'react';
import MenuItems from '../Components/MenuItems';
import Title from '../Components/Title';
import reactsnippets from '../Components/allReactSnippets';
import { useState } from 'react';

const allCategories = ['All', ...new Set(reactsnippets.map(item => item.category))];

function ReactSnippets() {
    const [categories, setCategories] = useState(allCategories);
    const [menuItems, setMenuItems] = useState(reactsnippets);

    const filter = (category) =>{
        if(category === 'All'){
            setMenuItems(reactsnippets)
            return;
        }
        const filteredData  = reactsnippets.filter((item)=>{
            return item.category === category;
        })
        setMenuItems(filteredData);
    }

    return (
        <div className="PortfolioPage">
            <div className="title">
                <Title title={'React Snippets'} span={'React Snippets'} />
            </div>
            <div className="portfolios-data">
                <MenuItems menuItem={menuItems} />
            </div>
        </div>
    )
}

export default ReactSnippets;
