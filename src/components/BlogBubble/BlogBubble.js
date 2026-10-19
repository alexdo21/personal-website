import { Link } from "react-router-dom";
import "./BlogBubble.css"

function BlogBubble({blog}) {
    return (
        <div id="blog-bubble-wrapper">
            <p>{blog.topic}</p>
            <Link id="blog-bubble-link" to={`/blog/${blog.pathName}`}>
                <h1>{blog.title}</h1>
            </Link>
            <h2>{blog.subtitle}</h2>
            <h3>{blog.date}</h3>
        </div>
    ); 
}

export { BlogBubble } 
