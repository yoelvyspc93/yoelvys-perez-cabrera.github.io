import { Experience } from "@/constants/experience"
import styles from './ExperienceModal.module.scss';

export const ExperienceModal = (experience: Experience) => {
  const { date, description_large, technologies } = experience

  return (
    <div className={styles.experience}>
      <span className={styles.experience__date}>{date}</span>
      {description_large.map((desc, index) => (
        <p key={index} className={styles.experience__description}>{desc}</p>
      ))}
      <div className={styles.experience__technologies__title}>Technologies Learned</div>
      <div className={styles.experience__technologies}>
        {technologies.map((tech, index) => (
          <div key={index} className={styles.experience__technologies__item}>{tech}</div>
        ))}
      </div>
    </div>
  )
}
