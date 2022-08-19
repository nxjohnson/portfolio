import styles from '../styles/ContactForm.module.css';

const ContactForm = () => {
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
            />
          </div>
          <div className={styles.contactTile}>
            <label htmlFor="email">Email</label>
            <input
              id="email"
              type="email"
              name="email"
            />
          </div>
          <div className={styles.contactTile}>
            <label htmlFor="message">Message</label>
              <textarea
                id="message"
                name="message"
                rows={4}
              />
          </div>
        </form>
          <button className={styles.submitButton}>Send Email</button>
      </div>
    </div>
  )
}

export default ContactForm;