import { ReactNode } from "react";

import EmailIcon from '@/../public/icons/email-gradient.svg';
import TelegramIcon from '@/../public/icons/telegram-gradient.svg';

export interface Contact {
  title: string;
  description: string[];
  link: {
    icon: ReactNode;
    label: string;
  }[];
}

export const contact: Contact = {
  title: 'Contact Me',
  description: [
    'I am always open to new opportunities, collaborations, and exciting projects. If you have any questions or just want to say hello, feel free to send me a message.',
    'I will be happy to respond as soon as possible!'
  ],
  link: [
    {
      icon: <EmailIcon />,
      label: 'yoelvyspc93@gmail.com',
    },
    {
      icon: <TelegramIcon />,
      label: '+53 54773819',
    }
  ]
};
