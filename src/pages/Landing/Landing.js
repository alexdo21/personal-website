import React from 'react';
import { Skills, SummaryCard } from '../../components';
import "./Landing.css"

function Landing() {
    return (
        <div id="landing-wrapper">
            <SummaryCard />
            <Skills />
        </div>
    );
}

export { Landing };