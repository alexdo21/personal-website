import React from 'react';
import { Skills, SummaryCard } from '../../components';
import "./Landing.css"

function Landing() {
    return (
        <div id="landing-wrapper">
            <div id="summary-card-container">
                <SummaryCard />
            </div>
            <div id="skills-container">
                <Skills />
            </div>
        </div>
    );
}

export { Landing };