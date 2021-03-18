import React from 'react'
import {NavLink} from 'react-router-dom';
import logo from '../imgs/logo.png';
function Navbar() {
    return (
        <div className="NavBar">
            <nav className="nav">
                <div className="profile">
                    <img src={logo} alt=""/>
                 </div>
                <ul className="nav-items">
                    <li className="nav-item">
                        <NavLink to="/" exact activeClassName="active">
                            Home
                        </NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink to="/appclones" exact activeClassName="active">
                            App Clones
                        </NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink to="/vanillajavascript" exact activeClassName="active">
                            Vanilla Javascript
                        </NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink to="/reactsnippets" exact activeClassName="active">
                            React Snippets
                        </NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink to="/contact" exact activeClassName="active">
                            Contact
                        </NavLink>
                    </li>
                </ul>

                <footer className="footer">
                    <p>
                        @2021 Scott Ly
                    </p>
            </footer>
            </nav>
            
        </div>
    )
}

export default Navbar;
