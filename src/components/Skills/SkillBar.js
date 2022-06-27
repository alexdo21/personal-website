import React from 'react';
import "./SkillBar.css"

function SkillBar({skill}) {
    const getSkillPercentage = (level) => {
        return (level / 5) * 100
    }
    const getSkillBackgroundColor = (level) => {
        switch (level) {
            case 1: case 2: case 3:
                return "#C84B31"
            case 4: case 5:
                return "#2D4263"
            default:
                return "none"
        }
    }

    return (
        <div id="skill-bar-wrapper">
            <div id="skill-bar-label">
                {skill.name}
            </div>
            <div id="skill-bar">
                <div id="skill-bar-level">
                    <span id="skill-bar-progress" style={{width: `${getSkillPercentage(skill.level)}%`, backgroundColor: getSkillBackgroundColor(skill.level)}}>
                        &nbsp;
                    </span>
                    <span id="skill-bar-progress-label">
                        {skill.level} / 5
                    </span>
                </div>
            </div>
        </div>
    );
}

export { SkillBar };