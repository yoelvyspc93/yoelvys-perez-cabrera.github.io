import { ReactNode } from 'react';
import styles from './GradientButton.module.scss';

interface Props {
  children: ReactNode;
}

export const GradientButton = ({ children }: Props) => {
  return (
    <button className={styles.gradient_button}>{children}</button>
  )
}
