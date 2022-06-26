import React from 'react';
import { Link } from 'react-router-dom';
import "./NavigationBar.css"

function NavigationBar() {
    return (
        <nav id="navbar">
            <div id="navbar-content">
                <ul id="navbar-menu">
                    <li className="navbar-menu-brand">
                        <Link className="navbar-menu-item-link" to={"/"}><h3>Alex Do</h3></Link>
                    </li>
                    <li className="navbar-menu-item">
                        <Link className="navbar-menu-item-link" to={"/about"}>About</Link>
                    </li>
                    <li className="navbar-menu-item">
                        <Link className="navbar-menu-item-link" to={"/projects"}>Projects</Link>
                    </li>
                    <li className="navbar-menu-item">
                        <a className="navbar-menu-item-link" target="_blank" rel="noopener noreferrer" href="https://drive.google.com/file/d/1OH8C0pCeH73o2-gO-PcSHMBwcFwxTaXm/view?usp=sharing">Resume</a>
                    </li>
                    <li className="navbar-menu-item">
                        <Link className="navbar-menu-item-link" to={"/contact"}>Contact</Link>
                    </li>
                </ul>
            </div>
        </nav>
    );
}

export { NavigationBar };