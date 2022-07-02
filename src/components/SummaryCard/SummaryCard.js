import { Me } from "../../assets"
import { SocialLinks } from '../../components';
import React from 'react';
import "./SummaryCard.css"

function SummaryCard() {
    return (
        <div id="summary-card-wrapper">
            <div id="summary-image-container">
                <img id="me-image" src={Me} width="250" height="250" alt="me"/>
            </div>
            <div id="summary-text-container">
                Hi I'm Alex.
                I recently graduated from UW-Madison and currently am a Software Engineer.
                I mainly work on web and mobile full-stack applications and am constantly seeking to learn different technologies in the field.
                Outside of full stack, I like to apply my programming skills to my passions and interests.
                Right now, I am focused on exploring the world of Natural Language Processing, Signal Processing, Scientific Computing and Game Development.
            </div>
            <div id="summary-card-footer">
                <SocialLinks />
            </div>
        </div>
    );
}

export { SummaryCard };