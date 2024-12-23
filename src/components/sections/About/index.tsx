'use client';

import { AboutCard } from "@/components/common/AboutCard";
import styles from "./About.module.scss";
import { GradientButton } from "@/components/common/GradientButton";
import { about } from "@/constants/about";
import { useRouter } from "next/navigation";


export const About = () => {
  const router = useRouter();

  const [card1, card2, card3, card4] = about.data

  return (
    <section id="about" className={styles.about}>
      <div className={styles.about__card}>
        <div className={styles.about__card__row}>
          <AboutCard number={card1.value} label={card1.label} />
          <AboutCard number={card2.value} label={card2.label} />
        </div>
        <div className={styles.about__card__row}>
          <AboutCard number={card3.value} label={card3.label} />
          <AboutCard number={card4.value} label={card4.label} />
        </div>
      </div>
      <div className={styles.about__info}>
        <span>{about.subtitle}</span>
        <h2>{about.title}</h2>
        <p>{about.description}</p>
        <GradientButton onClick={() => router.push('/about')}>See More</GradientButton>
      </div>
    </section>
  )
}
