import React from 'react';
import ReactMarkdown from 'react-markdown'
import { EmptyMD } from '../../assets';
import { useParams } from 'react-router-dom';
import { projects, blogPosts } from '../../data';
import "./MarkdownDetails.css"


function MarkdownDetails() {
    const [markdown, setMarkdown] = React.useState(null)

    const { pathName } = useParams()

    const getRawMarkdown = (pathName) => {
        let items = [...projects, ...blogPosts] 
        for (const item of items) {
            console.log(item.pathName, pathName)
            if (item.pathName === pathName) {
                return item.content
            }
        }
        return EmptyMD
    }

    React.useState(() => {
        const rawMarkdown = getRawMarkdown(pathName)
        fetch(rawMarkdown)
        .then(res => res.text())
        .then(text => setMarkdown(text))
    }, [setMarkdown])

    return (
        <article id="markdown-details-wrapper">
            <ReactMarkdown children={markdown} linkTarget={getRawMarkdown(pathName) !== EmptyMD ? "_blank" : "_self"} />
        </article>
    );
}

export { MarkdownDetails };
