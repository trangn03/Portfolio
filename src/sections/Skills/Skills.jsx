import styles from './SkillsStyles.module.css';
import aws from '../../assets/Skills/aws.png';
import cpp from '../../assets/Skills/cpp.png';
import css from '../../assets/Skills/css.png';
import html from '../../assets/Skills/html.png';
import javascript from '../../assets/Skills/javascript.png';
import linux from '../../assets/Skills/linux.png';
import r from '../../assets/Skills/r.png';
import reactjs from '../../assets/Skills/reactjs.png';
import sql from '../../assets/Skills/sql.png';
import unity from '../../assets/Skills/unity.png';

const skills = [
  { name: 'AWS', icon: aws },
  { name: 'C++', icon: cpp },
  { name: 'CSS', icon: css },
  { name: 'HTML', icon: html },
  { name: 'JavaScript', icon: javascript },
  { name: 'Linux', icon: linux },
  { name: 'R', icon: r },
  { name: 'React', icon: reactjs },
  { name: 'SQL', icon: sql },
  { name: 'Unity', icon: unity },
];

function Skills() {
  return (
    <section id='Skills' className={styles.container}>
      <h1 className='sectionTitle'>Skills</h1>
      <div className={styles.skillsContainer}>
        {skills.map((skill) => (
          <div className={styles.skillCard} key={skill.name}>
            <img src={skill.icon} alt={`${skill.name} icon`} />
            <p>{skill.name}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Skills;
