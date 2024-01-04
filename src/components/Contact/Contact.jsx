import React, { useRef, useState } from "react";
import "./Contact.css";
// import { MdOutlineEmail } from "react-icons/md";
import { GrLinkedin } from "react-icons/gr";
import { BsWhatsapp } from "react-icons/bs";
import emailjs from "@emailjs/browser";

function Contact() {
  const form = useRef();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const areInputFieldsNotEmpty = () => {
    if (name !== "" && email !== "" && message !== "") {
      return true;
    }
    return false;
  };

  const sendEmail = (e) => {
    e.preventDefault();
    if (areInputFieldsNotEmpty()) {
      emailjs
        .sendForm(
          "service_584ulyt",
          "template_rkfd2x8",
          form.current,
          "gtEtLD_crcvQI9cFQ"
        )
        .then((result) => {
          console.log(result.text);
          alert("Message sent successfully!");
          setName("");
          setEmail("");
          setMessage("");
        })
        .catch((error) => {
          console.log(error.text);
        });
    } else {
      alert("Please fill all the fields!");
    }
  };
  return (
    <section id="contact">
      <h5>Get In Touch</h5>
      <h2>Contact Me</h2>
      <div className="container contact__container">
        <div className="contact__options">
          {/* <article className="contact__option">
            <MdOutlineEmail className="contact__option-icon" />
            <h4>Email</h4>
            <h5>admin@gmail.com</h5>
            <a href="mailto:admin@gmail.com">Send a messsage</a>
          </article> */}
          <article className="contact__option">
            <GrLinkedin className="contact__option-icon" />
            <h4>Linkedin</h4>
            <h5>Abdullah</h5>
            <a
              href="https://www.linkedin.com/in/abdullah-soomro-6b6798246/"
              target="_blank"
            >
              Send a messsage
            </a>
          </article>
          <article className="contact__option">
            <BsWhatsapp className="contact__option-icon" />
            <h4>WhatsApp</h4>
            <h5>+923133143047</h5>
            <a
              href="https://wa.me/923133143047?text=Hello%20there,%20I%20found%20you%20on%20the%20website.%20"
              target="_blank"
            >
              Send a messsage
            </a>
          </article>
        </div>
        <form ref={form} onSubmit={sendEmail}>
          <input
            type="text"
            name="name"
            value={name}
            onChange={(e) => {
              setName(e.target.value);
            }}
            placeholder="Your Fulll Name"
          />
          <input
            type="email"
            name="email"
            value={email}
            onChange={(e) => {
              setEmail(e.target.value);
            }}
            placeholder="Your Email"
          />
          <textarea
            name="message"
            value={message}
            onChange={(e) => {
              setMessage(e.target.value);
            }}
            rows="7"
            placeholder="Your Message"
          ></textarea>
          <button type="submit" className="btn btn-primary">
            Send Message
          </button>
        </form>
      </div>
    </section>
  );
}

export default Contact;
