'use client'

import { InputField } from '@/components/common/Form/InputField';
import styles from './Contact.module.scss';
import { useState } from 'react';
import { TextAreaField } from '@/components/common/Form/TextAreaField';
import { GradientButton } from '@/components/common/GradientButton';
import { contact } from '@/constants/contact';

export const Contact = () => {
  const [email, setEmail] = useState('')
  const [message, setMessage] = useState('')

  const { title, description, link } = contact

  return (
    <section id='contact' className={styles.contact}>
      <div className={styles.contact__container}>
        <div className={styles.contact__info}>
          <h2>{title}</h2>
          {description.map((description, index) => <p key={index}>{description}</p>)}
          <ul>
            {link.map((link) => <li key={link.label}>{link.icon} {link.label}</li>)}
          </ul>
        </div>
        <div className={styles.contact_form}>
          <form>
            <InputField id='email' label='Email' type='email' value={email} onChange={(v) => setEmail(v)} />
            <TextAreaField id='message' label='Message' value={message} onChange={(v) => setMessage(v)} />
            <GradientButton onClick={() => { }}>Send message</GradientButton>
          </form>
        </div>
      </div>
    </section>
  );
};
