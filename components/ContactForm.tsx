import styles from '../styles/ContactForm.module.css';

const ContactForm = () => {
  return (
    <div className={styles.contactContainer}>
      <div className={styles.contactBox}>
        <h2 className={styles.title}>Contact</h2>
        <form>
          <div className={styles.contactInfo}>
            <div className={styles.formLabels}>
              <label htmlFor="name">Name</label>
              <input
                id="name"
                type="text"
                name="name"
              />
            </div>
            <div className={styles.formLabels}>
              <label htmlFor="email">Email</label>
              <input
                id="email"
                type="email"
                name="email"
              />
            </div>
          </div>
          <div className={styles.contactInfo}>
            <div className={styles.formLabels}>
              <label htmlFor="message">Message</label>
                <textarea
                  id="message"
                  name="message"
                  rows="4"
                />
            </div>

          </div>
          <button className={styles.submitButton}>Send Email</button>
        </form>
      </div>
    </div>
  )
}

export default ContactForm;