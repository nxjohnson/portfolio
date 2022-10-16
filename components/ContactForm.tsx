import React, { useState, useEffect, FunctionComponent } from 'react';
import { useForm } from 'react-hook-form';
import styles from '../styles/ContactForm.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTriangleExclamation } from '@fortawesome/free-solid-svg-icons';

type FormData = {
  name: string,
  email: string,
  message: string,
}

type SubmitButton = 'Send Email' | 'Sending Email...' | 'Email Sent!' | 'Something Went Wrong';

const ContactForm: FunctionComponent = () => {
  const { register, handleSubmit, formState: { errors }, reset } = useForm<FormData>();
  const [submitButton, setSubmitButton] = useState<SubmitButton>('Send Email')
  const [loader, setLoader] = useState<boolean>(false);

  const submitForm = (data: FormData) => {
    setSubmitButton('Sending Email...');

    fetch('/api/email', {
      method:'post',
      body: JSON.stringify(data)
    })
      .then(() => setSubmitButton('Email Sent!'))
      .catch(() => setSubmitButton('Something Went Wrong'))

    reset();

    setTimeout(() => {
      setSubmitButton('Send Email');
    }, 3000)
  }

  return (
    <div id="contact" className={styles.contactContainer}>
      <div className={styles.contactBox}>
        <h2>Contact</h2>
        <form className={styles.contactGrid} onSubmit={handleSubmit(submitForm)}>
          <div className={styles.contactTile}>
            <label htmlFor="name">Name</label>
            <input {...register('name', {required: 'Please insert your name.'})} id="name" name="name" />
            {errors.name && <span className={styles.error}><FontAwesomeIcon icon={faTriangleExclamation} /> {errors.name.message}</span>}
          </div>
          <div className={styles.contactTile}>
            <label htmlFor="email">Email</label>
            <input {...register('email', {required: 'Please insert your email.', pattern: {value: /^\S+@\S+$/i, message: 'Please insert your email'} })} id="email" name="email" />
            {errors.email && <span className={styles.error}><FontAwesomeIcon icon={faTriangleExclamation} /> {errors.email.message}</span>}
          </div>
          <div className={styles.contactTile}>
            <label htmlFor="message">Message</label>
            <textarea rows={4} {...register('message', {required: 'Please insert your message.' })} id="message" name="message" />
            {errors.message && <span className={styles.error}><FontAwesomeIcon icon={faTriangleExclamation} /> {errors.message.message}</span>}
          </div>
          <div className={styles.submitContainer}>
            <button type="submit">{submitButton}</button>
          </div>
        </form>
      </div>
    </div>
  )
}

export default ContactForm;