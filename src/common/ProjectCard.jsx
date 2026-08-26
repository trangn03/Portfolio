import React from 'react';
import styles from '../sections/Projects/ProjectsStyles.module.css';

function ProjectCard({ src, link, h3, p }) {
  const CardContainer = link ? 'a' : 'div';
  const cardProps = link ? { href: link, target: "_blank", rel: "noopener noreferrer" } : {};

  return (
    <CardContainer className={styles.projectCard} {...cardProps}>
      <div className={styles.imageContainer}>
        <img src={src} alt={`${h3} logo`} className={styles.projectImage} />
      </div>
      <div className={styles.projectInfo}>
        <h3 className={styles.projectTitle}>{h3}</h3>
        <p className={styles.projectDesc}>{p}</p>
      </div>
    </CardContainer>
  );
}

export default ProjectCard;