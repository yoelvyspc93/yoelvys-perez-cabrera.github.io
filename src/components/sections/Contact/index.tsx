'use client'

import { InputField } from '@/components/common/Form/InputField';
import styles from './Contact.module.scss';
import { useState } from 'react';
import { TextAreaField } from '@/components/common/Form/TextAreaField';
import { GradientButton } from '@/components/common/GradientButton';

import EmailIcon from '@/../public/icons/email-gradient.svg';
import LocationIcon from '@/../public/icons/location-gradient.svg';
import TelegramIcon from '@/../public/icons/telegram-gradient.svg';

export const Contact = () => {
  const [email, setEmail] = useState('')
  const [message, setMessage] = useState('')

  return (
    <section className={styles.contact}>
      <div className={styles.contact__container}>
        <div className={styles.contact__info}>
          <h2>Contact Me</h2>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum pulvinar sapien ac ex ullamcorper, non elementum velit eleifend.</p>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum pulvinar sapien ac ex ullamcorper, non elementum velit eleifend.</p>
          <ul>
            <li><EmailIcon />yoelvyspc93@gmail.com</li>
            <li><LocationIcon />+53 54773819</li>
            <li><TelegramIcon />Cuba</li>
          </ul>
        </div>
        <div className={styles.contact_form}>
          <form>
            <InputField id='email' label='Email' type='email' value={email} onChange={(v) => setEmail(v)} />
            <TextAreaField id='message' label='Message' value={message} onChange={(v) => setMessage(v)} />
            <GradientButton>Send message</GradientButton>
          </form>
        </div>
      </div>
    </section>
  );
};
