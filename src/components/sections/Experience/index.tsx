import { ExperienceCard } from '@/components/common/ExperienceCard';
import styles from './Experience.module.scss';
import { experience } from '@/constants/experience';

export const Experience = () => {
  const [exp1, exp2, exp3] = experience

  return (
    <section id='experience' className={styles.experience}>
      <h2 className={styles.experience__title}>My <span>Experience</span></h2>
      <div className={styles.experience__grid}>
        <div className={styles.experience__grid__item}>
          <ExperienceCard {...exp1} />
        </div>
        <div className={styles.experience__grid__item}>
          <ExperienceCard {...exp2} />
        </div>
        <div className={styles.experience__grid__item}>
          <ExperienceCard {...exp3} />
        </div>
      </div>
    </section>
  )
}
