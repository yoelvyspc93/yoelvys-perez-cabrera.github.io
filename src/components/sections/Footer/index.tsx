import styles from './Footer.module.scss';

import { navigator } from "@/constants/navigator";
import { socialMedia } from "@/constants/social";
import Link from 'next/link';

export const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.divider}></div>
      <nav className={styles.navMenu}>
        <ul>
          {navigator.map((link) => (
            <li key={link.label}><Link href={link.href}>{link.label}</Link></li>
          ))}
        </ul>
      </nav>
      <div className={styles.socialLinks}>
        {socialMedia.map((sm) => (
          <a key={sm.name} href={sm.link} target="_blank" rel="noopener noreferrer">
            {sm.icon}
          </a>
        ))}
      </div>
    </footer>
  );
}
