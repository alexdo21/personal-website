import React from 'react';
import { ProjectCard } from '../../components';
import { projects } from '../../data';
import "./Projects.css"

function Projects() {
    return (
        <div id="projects-wrapper">
            <div id="projects-content">
                {projects.map(project => <ProjectCard key={project.title} project={project}/>)}
            </div>
        </div>
    );
}

export { Projects };