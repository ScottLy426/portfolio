import React from 'react';
import MenuItems from '../Components/MenuItems';
import Title from '../Components/Title';
import reactsnippets from '../Components/allReactSnippets';
import { useState } from 'react';



function ReactSnippets() {
    const [menuItems, setMenuItems] = useState(reactsnippets);

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
