import React, { useState } from 'react';
import styles from './ExperiencesStyles.module.css';

function Experiences() {
  const experiences = [
    {
      role: 'Data Quality Specialist',
      company: 'Bel-Air Machining Co',
      duration: 'May 2025 - Present',
      details: [
        'Perform and review First Article Inspection Reports (FAIR) per AS9102 standards, ballooning engineering drawings and processing dimensional CMM data into ERP systems while interpreting GD&T callouts to ensure full AS9100 compliance.',
        'Support source inspection by preparing organized data packages and developing detailed inspection reports that reflect correct drawing and purchase order revision levels to prevent nonconformance.',
        'Facilitate clear communication between quality and production teams to ensure all documentation is delivered on schedule, supporting seamless operational workflows.',
        'Analyze inspection results using Microsoft Excel, identifying discrepancies and maintaining traceability throughout the product lifecycle.', 
      ],
    },
    {
      role: 'Clerk',
      company: 'OSS - Women in Cybersecurity at CSUF',
      duration: 'Jan 2025 - May 2025',
      details: [
        'Maintain chapter records, communications, and meeting minutes, ensuring accuracy and transparency.',
        'Organize and oversee organizational records for efficiency and compliance, including developing and delivering engaging workshops on cybersecurity topics for chapter members.',
      ],
    },
    {
      role: 'Data Annotator',
      company: 'Highbrow Techonology Inc',
      duration: 'Nov 2024 -  May 2025',
      details: [
        'Performed multimodal data annotation for Llama model training and evaluation, accurately labeling images and text based on specific guidelines to enhance machine learning model accuracy.',
        'Conducted quality assurance by reviewing annotations for consistency and correctness, ensuring high-quality training data for AI models.',
      ],
    },
    {
      role: 'FullyHacks Operation Officer',
      company: 'Association for Computer Machinery at CSUF',
      duration: 'Oct 2024 -  March 2025',
      details: [
        'Managed logistics for FullyHacks, a hackathon with 300+ participants, ensuring smooth event operations, including coordinating with sponsors, judges, and volunteers.',
        'Developed and implemented a comprehensive communication plan for participants and stakeholders, streamlining event workflows and increasing operational efficiency.',
      ],
    },
    {
      role: 'Data Science/AI Research Assistant',
      company: 'California State University, Fullerton',
      duration: 'May 2023 - May 2024',
      details: [
        'Conducted in-depth research in foundational concepts of Data Science and Machine Learning, exploring key topics such as data preprocessing, algorithm selection, model evaluation, and interpretability.',
        'Designed and developed the Food Keeper Project, aimed at reducing food waste by building and implementing machine learning models to classify food-related content in social media and email messages.',
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
