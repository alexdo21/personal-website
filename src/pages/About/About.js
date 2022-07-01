import React from 'react';
import ReactMarkdown from 'react-markdown'
import { AboutMD } from '../../assets';
import "./About.css"

function About() {
    const [markdown, setMarkdown] = React.useState(null)

    React.useState(() => {
        fetch(AboutMD)
        .then(res => res.text())
        .then(text => setMarkdown(text))
    }, [setMarkdown])

    return (
        <article id="about-wrapper">
            <ReactMarkdown children={markdown} linkTarget={"_blank"} />
        </article>
    );
}

export { About };