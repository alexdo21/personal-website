import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub } from '@fortawesome/free-brands-svg-icons/faGithub';
import { faLinkedinIn } from '@fortawesome/free-brands-svg-icons/faLinkedinIn';
import { faInstagram } from '@fortawesome/free-brands-svg-icons/faInstagram';
import { faEnvelope } from '@fortawesome/free-regular-svg-icons/faEnvelope';

import React from 'react';
import "./SocialLinks.css"

function SocialLinks() {
    return (
        <div id="social-links-wrapper">
            <ul id="social-links">
                <li className="social-link-item">
                    <a className="social-link-item-link" target="_blank" rel="noopener noreferrer" href="https://github.com/alexdo21">
                        <FontAwesomeIcon icon={faGithub} />
                    </a>
                </li>
                <li className="social-link-item">
                    <a className="social-link-item-link" target="_blank" rel="noopener noreferrer" href="https://www.linkedin.com/in/-alexdo/">
                        <FontAwesomeIcon icon={faLinkedinIn} />
                    </a>
                </li>
                <li className="social-link-item">
                    <a className="social-link-item-link" target="_blank" rel="noopener noreferrer" href="https://www.instagram.com/alexdo.io/">
                        <FontAwesomeIcon icon={faInstagram} />
                    </a>
                </li>
                <li className="social-link-item">
                    <a className="social-link-item-link" target="_blank" rel="noopener noreferrer" href="mailto:contact@alexdo.io">
                        <FontAwesomeIcon icon={faEnvelope} />
                    </a>
                </li>
            </ul>
        </div>
    );
}

export { SocialLinks };