import React from 'react';
import styles from './NavBarStyles.module.css';
import sun from '../../assets/About/sun.svg';
import moon from '../../assets/About/moon.svg';
import { useTheme } from '../../common/ThemeContext';

function NavBar() {
    const { theme, toggleTheme } = useTheme();
    const themeIcon = theme === 'light' ? sun : moon;

    return (
        <nav id='navbar' className={styles.container}>
            <ul className={styles.navbarLinks}>
                <li>
                    <a href='#About' className={styles.navItem}>About</a>
                </li>
                <li>
                    <a href='#Experiences' className={styles.navItem}>Experiences</a>
                </li>
                <li>
                    <a href='#Skills' className={styles.navItem}>Skills</a>
                </li>
                <li>
                    <a href='#Projects' className={styles.navItem}>Projects</a>
                </li>
            </ul>
            <button className={styles.themeToggle} onClick={toggleTheme} aria-label="Toggle theme">
                <img src={themeIcon} alt="Color mode icon" className={styles.themeIcon} />
            </button>
        </nav>
    );
}

export default NavBar;
