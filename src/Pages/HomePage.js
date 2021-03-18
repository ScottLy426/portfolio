import React from 'react';
import {FaLinkedinIn} from 'react-icons/fa';
import {faGithub} from '@fortawesome/free-brands-svg-icons';
import {faYoutube} from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {Link, NavLink} from 'react-router-dom';

function HomePage() {
    return (
        <div className="HomePage">
            <header className="hero">
                <h1 className="hero-text">
                    Hi, I am 
                    <span> Scott Ly.</span>
                </h1>
                <p className="h-sub-text">
                    Self-taught developer.
                </p>
                <div className="icons">
                    <a href="https://www.linkedin.com/in/scottly123/" className="icon-holder">
                        <FaLinkedinIn className="icon fb"/>
                    </a>
                    <a href="https://github.com/ScottLy426" className="icon-holder">
                        <FontAwesomeIcon icon={faGithub} className="icon gh" />
                    </a>
                </div>
            </header>
        </div>
    )
}

export default HomePage;
