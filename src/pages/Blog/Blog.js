import { blogPosts } from "../../data";
import "./Blog.css"
import { BlogBubble } from "../../components/BlogBubble/BlogBubble";

function Blog() {
    return (
        <div id="blog-wrapper">
            {blogPosts.map((blog) => <BlogBubble blog={blog} />)}
        </div>
    ); 
}

export { Blog };
