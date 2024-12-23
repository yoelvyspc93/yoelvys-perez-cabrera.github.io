import { ReactNode } from "react";
import styles from "./Modal.module.scss";

import CloseIcon from '@/../public/icons/close-outline.svg';

interface Props {
  isOpen: boolean
  onClose: () => void
  title: string
  children: ReactNode
}

export const Modal = ({ isOpen, onClose, title, children }: Props) => {
  if (!isOpen) return null;

  return (
    <div className={`${styles.modal} modal`}>
      <div className={styles.modal__content}>
        <span className={styles.close_button} onClick={onClose}>
          <CloseIcon />
        </span>
        <h2 className={styles.modal__title}>{title}</h2>
        <div className={styles.modal__body}>{children}</div>
      </div>
    </div>
  );
};
