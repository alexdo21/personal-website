import React from 'react';
import { ProjectCard } from '../../components';
import "./Projects.css"

function Projects() {
    return (
        <div id="projects-wrapper">
            <div id="projects-container">
                <div id="projects-header">
                    <h1>Projects</h1>
                </div>
                <div id="projects-content">
                    <ProjectCard />
                    <ProjectCard />
                    <ProjectCard />
                </div>
            </div>
        </div>
    );
}

export { Projects };