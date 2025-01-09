import React, { useState } from 'react';
import styles from './ExperiencesStyles.module.css';

function Experiences() {
  const experiences = [
    {
      role: 'Mathematics Data Annotator',
      company: 'Highbrow Techonology Inc',
      duration: 'Nov 2024 - Present',
      details: [
        'Performed multimodal data annotation for AI training and evaluation, accurately labeling images and text following specific guidelines to enahnce machine learning model accuracy.',
        'Executed quality assurance by reviewing annotations to ensure consistency and correctness, contributing to the reliability of AI model data.',
      ],
    },
    {
      role: 'FullyHacks Operation Officer',
      company: 'Association for Computer Machinery at CSUF',
      duration: 'Oct 2024 - Present',
      details: [
        'Engaged in pre-event preparations for Fully Hacks, a 24-hour hackathon, by working closely with the team to refine workflows.',
        'Developed operational strategies and anticipated logistical challenges to ensure the event runs smoothly and efficiently.',
      ],
    },
    {
      role: 'Data Science/AI Research Assistant',
      company: 'CSUF',
      duration: 'May 2023 - May 2024',
      details: [
        'Analyzed large datasets using Python and Excel to generate insights into food waste trends.',
        'Developed data pipelines and visualizations to effectively communicate research findings.',
      ],
    },
  ];

  const [activeIndex, setActiveIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);

  const changeRole = (index) => {
    if (index !== activeIndex && !isAnimating) {
      setIsAnimating(true);
      setTimeout(() => {
        setActiveIndex(index);
        setIsAnimating(false);
      }, 500); // Animation duration
    }
  };

  return (
    <section id="Experiences" className={styles.container}>
      <h1 className={styles.sectionTitle}>Experiences</h1>
      <div className={styles.experiences}>
        <ul className={styles.rolesList}>
          {experiences.map((experience, index) => (
            <li
              key={index}
              className={`${styles.roleItem} ${
                index === activeIndex ? styles.activeRole : ''
              }`}
              onClick={() => changeRole(index)}
            >
              {experience.role}
            </li>
          ))}
        </ul>
        <div className={`${styles.details} ${isAnimating ? styles.slideIn : ''}`}>
          <h2 className={styles.roleTitle}>{experiences[activeIndex].role}</h2>
          <p className={styles.companyName}>{experiences[activeIndex].company}</p>
          <p className={styles.duration}>{experiences[activeIndex].duration}</p>
          <ul className={styles.detailsList}>
            {experiences[activeIndex].details.map((detail, i) => (
              <li key={i} className={styles.detailItem}>
                {detail}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}

export default Experiences;
