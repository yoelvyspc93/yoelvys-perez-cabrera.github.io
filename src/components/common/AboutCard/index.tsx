import styles from "./AboutCard.module.scss";

interface Props {
  number: string
  label: string
}

export const AboutCard = ({ number, label }: Props) => {
  return (
    <div className={styles.card}>
      <h2 className={styles.number}>{number}</h2>
      <p className={styles.label}>{label}</p>
    </div>
  )
}
