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



  const submitForm = (e: React.SyntheticEvent) => {
    e.preventDefault();
    const body: Email = {
      name,
      email,
      message
    }

    fetch('/api/email', {
      method:'post',
      body: JSON.stringify(body)
    })

    setName('');
    setEmail('');
    setMessage('');
  }

  return (
    <div id="contact" className={styles.contactContainer}>
      <div className={styles.contactBox}>
        <h2>Contact</h2>
        <form className={styles.contactGrid}>
          <div className={styles.contactTile}>
            <label htmlFor="name">Name</label>
            <input
              id="name"
              type="text"
              name="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
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
              />
          </div>
        </form>
          <button className={styles.submitButton} onClick={(e) => submitForm(e)}>Send Email</button>
      </div>
    </div>
  )
}

export default ContactForm;