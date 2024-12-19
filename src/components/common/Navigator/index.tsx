import Link from "next/link";
import styles from "./Navigator.module.scss";
import { navigator } from "@/constants/navigator";
import { socialMedia } from "@/constants/social";


export const Navigator = () => {
  return (
    <nav className={styles.nav}>
      <div className={styles.navigator}>
        <ul>
          {navigator.map((link) => (
            <li key={link.label}><Link href={link.href}>{link.label}</Link></li>
          ))}
        </ul>
      </div>
      <div className={styles.navigator}>
        <ul>
          {socialMedia.map((sm) => (
            <li key={sm.name}><Link href={sm.link}>{sm.icon}</Link></li>
          ))}
        </ul>
      </div>
    </nav>
  );
}
