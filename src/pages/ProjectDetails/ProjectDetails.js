import React from 'react';
import ReactMarkdown from 'react-markdown'
import { useLocation } from 'react-router-dom';
import "./ProjectDetails.css"

function ProjectDetails() {
    const [markdown, setMarkdown] = React.useState(null)

    const location = useLocation()
    const { rawMarkdown } = location.state

    React.useState(() => {
        fetch(rawMarkdown)
        .then(res => res.text())
        .then(text => setMarkdown(text))
    }, [setMarkdown])

    return (
        <div id="project-details-wrapper">
            <ReactMarkdown children={markdown} />
        </div>
    );
}

export { ProjectDetails };