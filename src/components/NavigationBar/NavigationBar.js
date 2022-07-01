import React from 'react';
import { Link } from 'react-router-dom';
import { MenuIcon } from './MenuIcon';
import "./NavigationBar.css"

function NavigationBar() {
    const [isMenuExtended, setIsMenuExtended] = React.useState(false)
    
    return (
        <nav id="navbar">
            <div id="navbar-brand">
                <Link id="navbar-brand-link" to={"/"} onClick={() => {if(isMenuExtended) setIsMenuExtended(false)}}>Alex Do</Link>
            </div>
            <button id="navbar-menu-icon" onClick={() => setIsMenuExtended(!isMenuExtended)}>
                {isMenuExtended ? "\u2715" : <MenuIcon />}
            </button>
            <div id={isMenuExtended ? "navbar-menu expanded" : "navbar-menu" }>
                <ul id="navbar-menu-list">
                    <li className="navbar-menu-list-item">
                        <Link className="navbar-menu-list-item-link" to={"/about"} onClick={() => {if(isMenuExtended) setIsMenuExtended(false)}}>About</Link>
                    </li>
                    <li className="navbar-menu-list-item">
                        <Link className="navbar-menu-list-item-link" to={"/projects"} onClick={() => {if(isMenuExtended) setIsMenuExtended(false)}}>Projects</Link>
                    </li>
                    <li className="navbar-menu-list-item">
                        <a className="navbar-menu-list-item-link" target="_blank" rel="noopener noreferrer" href="https://drive.google.com/file/d/1OH8C0pCeH73o2-gO-PcSHMBwcFwxTaXm/view?usp=sharing" onClick={() => {if(isMenuExtended) setIsMenuExtended(false)}}>Resume</a>
                    </li>
                    <li className="navbar-menu-list-item">
                        <Link className="navbar-menu-list-item-link" to={"/contact"} onClick={() => {if(isMenuExtended) setIsMenuExtended(false)}}>Contact</Link>
                    </li>
                </ul>
            </div>
        </nav>
    );
}

export { NavigationBar };