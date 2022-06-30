import React from 'react';
import "./Contact.css"

function Contact() {
    const form = React.useRef()

    const sendEmail = (event) => {
        event.preventDefault()
    }

    return (
        <div id="contact-wrapper">
            <div id="contact-form-header">
                <h1>Let's connect!</h1>
            </div>
            <div id="contact-form-container">
                <form id="contact-form" ref={form} onSubmit={sendEmail}>
                    <div className="form-group">
                        <label>Name</label>
                        <input type="text" name="user_name" />
                    </div>
                    <div className="form-group">
                        <label>Email</label>
                        <input type="email" name="user_email" />
                    </div>
                    <div className="form-group">
                        <label>Message</label>
                        <textarea name="message" />
                    </div>
                    <div id="form-submit-button-container">
                        <input type="submit" value="Send" />
                    </div>
                </form>
            </div>
        </div>
    );
}

export { Contact };