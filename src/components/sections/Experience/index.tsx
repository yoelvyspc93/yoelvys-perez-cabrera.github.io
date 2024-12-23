import { ExperienceCard } from '@/components/common/ExperienceCard';
import styles from './Experience.module.scss';
import { experience } from '@/constants/experience';

export const Experience = () => {
  return (
    <section id='experience' className={styles.experience}>
      <h2 className={styles.experience__title}>My <span>Experience</span></h2>
      <div className={styles.experience__grid}>
        {experience.map((exp) => (
          <div key={exp.number} className={styles.experience__grid__item}>
            <ExperienceCard number={exp.number} title={exp.title} description={exp.main_description} />
          </div>
        ))}
      </div>
    </section>
  )
}
