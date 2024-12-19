'use client'

import { skills } from "@/constants/skills";
import styles from "./Skills.module.scss";
import { clsx } from 'clsx';

export const Skills = () => (
  <section id="skills" className={styles.skills}>
    <h2>My main <span>Skills</span></h2>
    <div className={styles.grid}>
      {skills.map((skill, index) => (
        skill ? (
          <div key={index} className={clsx(styles.item, skill.favorite && styles.large)}>
            {skill.icon}
          </div>
        ) : (
          <div key={index} className={styles.empty}></div>
        )
      ))}
    </div>
  </section>
);