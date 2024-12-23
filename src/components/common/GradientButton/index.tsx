'use client';

import { ReactNode } from 'react';
import styles from './GradientButton.module.scss';

interface Props {
  children: ReactNode;
  onClick: () => void
}

export const GradientButton = ({ children, onClick }: Props) => {
  return (
    <button aria-label='gradient button' type='button' className={styles.gradient_button} onClick={onClick}>{children}</button>
  )
}
