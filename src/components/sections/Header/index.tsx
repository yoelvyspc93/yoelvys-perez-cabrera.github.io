import Image from 'next/image';
import styles from './Header.module.scss';
import { GradientButton } from '@/components/common/GradientButton';

export const Header = () => {
  return (
    <section id='header' className={styles.header}>
      <div className={styles.content}>
        <span className={styles.subtitle}>Hello</span>
        <h1 className={styles.title}>I’m <span>Yoelvys Pérez Cabrera</span></h1>
        <p className={styles.role}>Frontend Developer</p>
        <div className={styles.button}>
          <GradientButton>Download CV</GradientButton>
        </div>
      </div>
      <div className={styles.image}>
        <Image width={800} height={745} src="/images/avatar.png" alt="Yoelvys Pérez Cabrera" />
      </div>
    </section>
  );
};