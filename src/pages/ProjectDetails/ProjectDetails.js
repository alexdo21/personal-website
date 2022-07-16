import React from 'react';
import ReactMarkdown from 'react-markdown'
import { EmptyMD, MixTechMD, SciPySuiteMD, StocktrackerMD } from '../../assets';
import { useParams } from 'react-router-dom';
import "./ProjectDetails.css"

function ProjectDetails() {
    const [markdown, setMarkdown] = React.useState(null)

    const { name } = useParams()

    const getRawMarkdown = (name) => {
        name = name.toLowerCase().replace(/\s/g, "")
        switch (name) {
            case "mixtech":
                return MixTechMD
            case "scipysuite":
                return SciPySuiteMD
            case "stocktracker":
                return StocktrackerMD
            default:
                return EmptyMD
        }
    }

    React.useState(() => {
        const rawMarkdown = getRawMarkdown(name)
        fetch(rawMarkdown)
        .then(res => res.text())
        .then(text => setMarkdown(text))
    }, [setMarkdown])

    return (
        <article id="project-details-wrapper">
            <ReactMarkdown children={markdown} linkTarget={getRawMarkdown(name) !== EmptyMD ? "_blank" : "_self"} />
        </article>
    );
}

export { ProjectDetails };