import React from 'react';
import { skills } from '../../data';
import "./Skills.css"

function Skills() {
    const [selectedTab, setSelectedTab] = React.useState(0)

    return (
        <div id="skills-wrapper">
            <div id="skills-header">
                <h1>Skills</h1>
                <ul id="skills-tabber">
                    <li className="skills-tab-item" style={selectedTab === 0 ? {outline: "1px solid #ECDBBA"} : {outline: "none"}}>
                        <button className="skills-tab-item-button" onClick={() => setSelectedTab(0)}>Programming</button>
                    </li>
                    <li className="skills-tab-item" style={selectedTab === 1 ? {outline: "1px solid #ECDBBA"} : {outline: "none"}}>
                        <button className="skills-tab-item-button" onClick={() => setSelectedTab(1)}>Frameworks</button>
                    </li>
                    <li className="skills-tab-item" style={selectedTab === 2 ? {outline: "1px solid #ECDBBA"} : {outline: "none"}}>
                        <button className="skills-tab-item-button" onClick={() => setSelectedTab(2)}>Databases</button>
                    </li>
                    <li className="skills-tab-item" style={selectedTab === 3 ? {outline: "1px solid #ECDBBA"} : {outline: "none"}}>
                        <button className="skills-tab-item-button" onClick={() => setSelectedTab(3)}>Languages</button>
                    </li>
                </ul>
            </div>
            <div id="skills-content">
                {Object.keys(skills).filter((key) => key === String(selectedTab)).map((key) => skills[key]).map((skillList) => skillList.map((skill, index) => 
                    <div key={index} style={{color: "whitesmoke"}}>
                        {skill.name} {skill.level}
                    </div>
                ))}
            </div>
        </div>
    );
}

export { Skills };