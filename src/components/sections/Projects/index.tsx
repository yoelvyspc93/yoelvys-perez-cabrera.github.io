import { projects } from "@/constants/projects";
import styles from "./Projects.module.scss";
import { ProjectsCard } from "@/components/common/ProjectsCard";
import { GradientButton } from "@/components/common/GradientButton";

export const Projects = () => {
  return (
    <section id="projects" className={styles.projects}>
      <h2>4 Latest <span>Projects</span></h2>
      <div className={styles.list}>
        {projects.map((project) => (
          <ProjectsCard
            key={project.id}
            number={project.id}
            title={project.name}
            content={project.description} />
        ))}
      </div>
      <GradientButton>See More</GradientButton>
    </section>
  )
}
