import React from 'react';
import emailjs from '@emailjs/browser';
import "./Contact.css"

function Contact() {
    const form = React.useRef()

    const SERVICE_ID = process.env.REACT_APP_EMAIL_JS_SERVICE_ID
    const TEMPLATE_ID = process.env.REACT_APP_EMAIL_JS_TEMPLATE_ID
    const PUBLIC_KEY = process.env.REACT_APP_EMAIL_JS_PUBLIC_KEY

    const sendEmail = (event) => {
        event.preventDefault()

        emailjs.sendForm(SERVICE_ID, TEMPLATE_ID, form.current, PUBLIC_KEY)
        .then(() => {
            alert("Your email was sent. Thanks for reaching out!")
            event.target.reset()
        }, () => {
            alert("Something went wrong sending your email. Please come back at a later time to try again.")
        });
    }

    return (
        <div id="contact-wrapper">
            <form id="contact-form" ref={form} onSubmit={sendEmail}>
                <div id="contact-form-header">
                    <h1>Let's connect!</h1>
                    <p>Leave me an email and I'll get back to you <br/> as soon as I can.</p>
                </div>
                <div className="form-group">
                    <label>Name</label>
                    <input type="text" name="name" placeholder="How do I address you?" required />
                </div>
                <div className="form-group">
                    <label>Email</label>
                    <input type="email" name="email" placeholder="Your email address" required />
                </div>
                <div className="form-group">
                    <label>Subject</label>
                    <input type="text" name="subject" placeholder="What brings you here today?"  required />
                </div>
                <div className="form-group">
                    <label>Message</label>
                    <textarea id="message-textarea" name="message" required />
                </div>
                <div id="form-submit-button-container">
                    <input type="submit" value="SEND" />
                </div>
            </form>
        </div>
    );
}

export { Contact };