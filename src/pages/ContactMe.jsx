import { useState } from "react";

function ContactMe() {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        message: "",
    });

    function handleChange(e) {
        const {name, value} = e.target;
        setFormData({
            ...formData,
            [name]: value,
        });
    }

    function handleSubmit(e) {
        e.preventDefault();
        alert('Your message has been sent!');
        setFormData({
            name: "",
            email: "",
            message: "",
        });
    }

    return (
        <section id="contact-me">
            <div className="text-header">
                <h2>Give me a shout:</h2>
                <div/>
            </div>
            
            <form onSubmit={handleSubmit} className="contact-form">
                <div className="input-field">
                    <label className="input-label">Name:</label>
                    <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        />
                </div>
                <div className="input-field">
                    <label className="input-label">Email:</label>
                    <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        />
                </div>
                <div className="input-field">
                    <label className="input-label">Message:</label>
                    <textarea
                        type="text"
                        id="message"
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        required
                        />
                </div>
                <button type="submit" id="contact-submit">Send</button>
            </form>
        </section>
    )




}
export default ContactMe;