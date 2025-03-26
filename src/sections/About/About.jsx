import styles from './AboutStyles.module.css';
import profile from '../../assets/About/Profile.png';
import sun from '../../assets/About/sun.svg';
import moon from '../../assets/About/moon.svg';
import githubLight from '../../assets/About/github-light.svg';
import githubDark from '../../assets/About/github-dark.svg';
import linkedinLight from '../../assets/About/linkedin-light.svg';
import linkedinDark from '../../assets/About/linkedin-dark.svg';
import mailLight from '../../assets/About/mail-light.svg';
import mailDark from '../../assets/About/mail-dark.svg';
import CV from '../../assets/About/cv.pdf';
import { useTheme } from '../../common/ThemeContext';

function About() {
  const { theme, toggleTheme } = useTheme();

  const themeIcon = theme === 'light' ? sun : moon;
  const githubIcon = theme === 'light' ? githubLight : githubDark;
  const linkedinIcon = theme === 'light' ? linkedinLight : linkedinDark;
  const mailIcon = theme === 'dark' ? mailLight : mailDark;

  return (
    <section id='About' className={styles.container}>
      <div className={styles.colorModeContainer}>
        <img
          src={profile}
          className={styles.hero}
          alt='Profile picture'
        />
        <img
          className={styles.colorMode}
          src={themeIcon}
          alt='Color mode icon'
          onClick={toggleTheme}
        />
      </div>
      <div className={styles.info}>
        <h1>Trang Ngo</h1>
        <h2>CSUF '25</h2>
        <h2>Cloud Security & Data Science Enthusiast</h2>
        <span>
          <a href='https://github.com/trangn03' target='_blank'>
            <img src={githubIcon} alt='Github icon' />
          </a>
          <a href='https://www.linkedin.com/in/trangn03/' target="_blank">
            <img src={linkedinIcon} alt="Linkedin icon" />
          </a>
          <a href='mailto:xtrang0201@gmail.com' target="_blank">
            <img src={mailIcon} alt="Mail icon" />
          </a>
        </span>
        {/* <p className={styles.description}>
          Description here
        </p> */}
        <a href={CV} target='_blank'>
          <button className='hover'>Resume</button>
        </a>
      </div>
    </section>
  );
}

export default About;