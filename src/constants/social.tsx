import { ReactNode } from "react";

import FacebookIcon from '@/../public/icons/facebook.svg';
import GithubIcon from '@/../public/icons/github.svg';
import LinkedinIcon from '@/../public/icons/linkedin.svg';

export interface SocialMedia {
  icon: ReactNode;
  name: string;
  link: string;
}

export const socialMedia: SocialMedia[] = [
  {
    icon: <FacebookIcon />,
    name: 'facebook',
    link: 'https://www.facebook.com'
  },
  {
    icon: <GithubIcon />,
    name: 'gitHub',
    link: 'https://www.github.com'
  },
  {
    icon: <LinkedinIcon />,
    name: 'linkedIn',
    link: 'https://www.linkedin.com'
  }
];
