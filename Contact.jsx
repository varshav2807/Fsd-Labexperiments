import { useRef } from "react";

function Contact() {
    const nameRef = useRef();

    const handleSubmit = (e) => {
        e.preventDefault();
        alert("Hello " + nameRef.current.value);
    };

    return (
        <div className="container">
            <h1>Contact Us</h1>
            <form onSubmit={handleSubmit} className="form">
                <input type="text" placeholder="Enter your name" ref={nameRef} />
                <button type="submit">Submit</button>
            </form>
        </div>
    );
}

export default Contact;
