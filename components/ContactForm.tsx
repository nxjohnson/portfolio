import React, { useState, useEffect } from 'react';
import styles from '../styles/ContactForm.module.css';

interface Email {
  name?: string,
  email?: string,
  message?: string,
}

const ContactForm = () => {
  const [name, setName] = useState<string>('');
  const [email, setEmail] = useState<string>('');
  const [message, setMessage] = useState<string>('');
  const [submitButton, setSubmitButton] = useState<string>('Send Email')
  const [loader, setLoader] = useState<boolean>(false);

  const submitForm = (e: React.SyntheticEvent) => {
    e.preventDefault();
    setSubmitButton('Sending Email...');
    const body: Email = {
      name,
      email,
      message
    }

    fetch('/api/email', {
      method:'post',
      body: JSON.stringify(body)
    })
      .then(() => setSubmitButton('Email Sent!'))
      .catch(() => setSubmitButton('Something Went Wrong'))

    setName('');
    setEmail('');
    setMessage('');

    setTimeout(() => {
      setSubmitButton('Send Email');
    }, 3000)
  }

  return (
    <div id="contact" className={styles.contactContainer}>
      <div className={styles.contactBox}>
        <h2>Contact</h2>
        <form className={styles.contactGrid} onSubmit={(e) => submitForm(e)}>
          <div className={styles.contactTile}>
            <label htmlFor="name">Name</label>
            <input
              id="name"
              type="text"
              name="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
            />
          </div>
          <div className={styles.contactTile}>
            <label htmlFor="email">Email</label>
            <input
              id="email"
              type="email"
              name="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <div className={styles.contactTile}>
            <label htmlFor="message">Message</label>
              <textarea
                id="message"
                name="message"
                rows={4}
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                required
              />
          </div>
        </form>
          <button className={styles.submitButton} type="submit">{submitButton}</button>
      </div>
    </div>
  )
}

export default ContactForm;