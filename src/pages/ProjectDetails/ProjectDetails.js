import React from 'react';
import ReactMarkdown from 'react-markdown'
import { MixTechMD, SciPySuiteMD, StocktrackerMD } from '../../assets';
import { useParams } from 'react-router-dom';
import "./ProjectDetails.css"

const getRawMarkdown = (name) => {
    switch (name) {
        case "MixTech":
            return MixTechMD
        case "SciPySuite":
            return SciPySuiteMD
        case "Stocktracker":
            return StocktrackerMD
        default:
            return null
    }
}

function ProjectDetails() {
    const [markdown, setMarkdown] = React.useState(null)

    const { name } = useParams()

    React.useState(() => {
        const rawMarkdown = getRawMarkdown(name)
        fetch(rawMarkdown)
        .then(res => res.text())
        .then(text => setMarkdown(text))
    }, [setMarkdown])

    return (
        <article id="project-details-wrapper">
            <ReactMarkdown children={markdown} linkTarget={"_blank"} />
        </article>
    );
}

export { ProjectDetails };