import React from 'react';
import { Link } from 'react-router-dom';
import "./NotFound.css"

function NotFound() {
    return (
        <div id="not-found-wrapper">
            <h1>Page not found</h1>
            <p>Return to <Link to="/">home</Link>.</p>
        </div>
    );
}

export { NotFound };