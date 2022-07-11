import React from 'react';
import { Link } from 'react-router-dom';
import { MenuIcon } from './MenuIcon';
import "./NavigationBar.css"

function NavigationBar() {
    const [isMenuExtended, setIsMenuExtended] = React.useState(false)

    const handleLinkPressed = () => {
        if (isMenuExtended) {
            setIsMenuExtended(false)
            for (const element of document.querySelectorAll("#skill-bar-level")) {
                element.style.zIndex = "auto"
            }
        } 
    }

    const handleMenuButtonPressed = () => {
        if (isMenuExtended) {
            setIsMenuExtended(false)
            for (const element of document.querySelectorAll("#skill-bar-level")) {
                element.style.zIndex = "auto"
            }
        } else {
            setIsMenuExtended(true)
            for (const element of document.querySelectorAll("#skill-bar-level")) {
                element.style.zIndex = "-1"
            }
        }
    }
    
    return (
        <nav id="navbar">
            <div id="navbar-brand">
                <Link id="navbar-brand-link" to={"/"} onClick={handleLinkPressed}>Alex Do</Link>
            </div>
            <button id="navbar-menu-icon" onClick={handleMenuButtonPressed}>
                {isMenuExtended ? "\u2715" : <MenuIcon />}
            </button>
            <div id={isMenuExtended ? "navbar-menu expanded" : "navbar-menu" }>
                <ul id="navbar-menu-list">
                    <li className="navbar-menu-list-item">
                        <Link className="navbar-menu-list-item-link" to={"/about"} onClick={handleLinkPressed}>About</Link>
                    </li>
                    <li className="navbar-menu-list-item">
                        <Link className="navbar-menu-list-item-link" to={"/projects"} onClick={handleLinkPressed}>Projects</Link>
                    </li>
                    <li className="navbar-menu-list-item">
                        <a className="navbar-menu-list-item-link" target="_blank" rel="noopener noreferrer" href="https://drive.google.com/file/d/1QEC5FfwR9VUR_SCf6BboNa45Q4C43Dms/view?usp=sharing" onClick={handleLinkPressed}>Resume</a>
                    </li>
                    <li className="navbar-menu-list-item">
                        <Link className="navbar-menu-list-item-link" to={"/contact"} onClick={handleLinkPressed}>Contact</Link>
                    </li>
                </ul>
            </div>
        </nav>
    );
}

export { NavigationBar };