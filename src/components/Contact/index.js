import React, { useState } from "react";
import { validateEmail } from "../../utils/helpers";

function ContactForm() {
  //JSX

  const [formState, setFormState] = useState({
    name: "",
    email: "",
    message: "",
  });

  //destructuring formState into named properties
  const { name, email, message } = formState;

  //handles user input inside the form, for all form elements.
  function handleChange(e) {
    setFormState({ ...formState, [e.target.name]: e.target.value });
  }

  //console.log(formState); //console logs as user enters text on contact form

  //Submit the Form data function
  function handleSubmit(e) {
    e.preventDefault();
    console.log(formState);
  }

  return (
    <section>
      <h1>Contact Me</h1>

      <form id="contact-form" onSubmit={handleSubmit}>
        {/* name input */}
        <div>
          <label htmlFor="name">Name:</label>
          <input
            type="text"
            defaultValue={name}
            name="name"
            onChange={handleChange}
          />
        </div>

        {/* email input */}
        <div>
          <label htmlFor="email">Email address:</label>
          <input
            type="email"
            defaultValue={email}
            name="email"
            onChange={handleChange}
          />
        </div>

        {/* message text area */}
        <div>
          <label htmlFor="message">Message:</label>
          <textarea
            name="message"
            defaultValue={message}
            rows="5"
            onChange={handleChange}
          />
        </div>

        <button type="submit">Submit</button>
      </form>
    </section>
  );
}

export default ContactForm;
