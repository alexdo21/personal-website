import React from 'react';
import "./ProjectCard.css"

function ProjectCard({project}) {
    return (
        <div id="project-card-wrapper">
            <div id="project-card-image-container">
                <a target="_blank" rel="noopener noreferrer" href={project.logoAttribution}>
                    <img id="project-card-image" src={project.logo} width="250" height="250" alt="project"/>
                </a>
            </div>
            <div id="project-card-header">
                <h1>{project.title}</h1>
            </div>
            <div id="project-card-description">
                {project.description}
            </div>
        </div>
    );
}

export { ProjectCard };