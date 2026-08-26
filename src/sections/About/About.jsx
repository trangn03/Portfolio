import styles from './AboutStyles.module.css';
import profile from '../../assets/About/Profile.png';
import githubLight from '../../assets/About/github-light.svg';
import githubDark from '../../assets/About/github-dark.svg';
import linkedinLight from '../../assets/About/linkedin-light.svg';
import linkedinDark from '../../assets/About/linkedin-dark.svg';
import mailLight from '../../assets/About/mail-light.svg';
import mailDark from '../../assets/About/mail-dark.svg';
import CV from '../../assets/About/cv.pdf';
import { useTheme } from '../../common/ThemeContext';

function About() {
  const { theme } = useTheme();

  const githubIcon = theme === 'light' ? githubLight : githubDark;
  const linkedinIcon = theme === 'light' ? linkedinLight : linkedinDark;
  const mailIcon = theme === 'dark' ? mailLight : mailDark;

  return (
    <section id='About' className={styles.container}>
      <div className={styles.colorModeContainer}>
        <div className={styles.imageWrapper}>
          <img
            src={profile}
            className={styles.hero}
            alt='Profile picture'
          />
        </div>
      </div>
      <div className={styles.info}>
        <h1 className="gradient-text">Trang Ngo</h1>
        <h2>CSUF '25</h2>
        <span className={styles.socials}>
          <a href='https://github.com/trangn03' target='_blank' rel='noopener noreferrer' className={styles.socialLink}>
            <img src={githubIcon} alt='Github icon' />
          </a>
          <a href='https://www.linkedin.com/in/trangn03/' target="_blank" rel='noopener noreferrer' className={styles.socialLink}>
            <img src={linkedinIcon} alt="Linkedin icon" />
          </a>
          <a href='mailto:xtrang0201@gmail.com' className={styles.socialLink}>
            <img src={mailIcon} alt="Mail icon" />
          </a>
        </span>
        <a href={CV} target='_blank' rel='noopener noreferrer'>
          <button className={styles.resumeBtn}>Download Resume</button>
        </a>
      </div>
    </section>
  );
}

export default About;