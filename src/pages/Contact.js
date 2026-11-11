import { useState } from 'react';
import '../styles/Contact.css';
import '../styles/Forms.css';

function Contact() {
  const [values, setValues] = useState({ name: '', email: '', message: '' });
  const [feedback, setFeedback] = useState('');

  function handleChange(e) {
    setValues({ ...values, [e.target.name]: e.target.value });
    setFeedback('');
  }

  function handleSubmit(e) {
    e.preventDefault();
    if (!values.name.trim() || !values.email.trim() || !values.message.trim()) {
      setFeedback('Please fill in your name, email, and message.');
      return;
    }

    setFeedback('Message checked. Sending is not connected yet.');
  }

  return (
    <main className="contact-page">
      <header>
        <h1>Contact us</h1>
        <p>Have a question? Leave a message.</p>
      </header>
          <form className="lifeline-form" onSubmit={handleSubmit}>
            <label htmlFor="contact-name">Name</label>
            <input id="contact-name" name="name" autoComplete="name" value={values.name} onChange={handleChange} required />

            <label htmlFor="contact-email">Email</label>
            <input id="contact-email" name="email" type="email" autoComplete="email" value={values.email} onChange={handleChange} required />

            <label htmlFor="contact-message">Message</label>
            <textarea id="contact-message" name="message" value={values.message} onChange={handleChange} required />

            <button type="submit">Submit</button>
            <p className="form-message" role="status">{feedback}</p>
          </form>
    </main>
  );
}

export default Contact;
