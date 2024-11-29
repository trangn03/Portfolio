import React from 'react';
import styles from './NavBarStyles.module.css';

function NavBar() {
    return (
        <section id='navbar' className={styles.container}>
            <ul className={styles.navbarLinks}>
                <li>
                    <a href='#Hero' className={styles.navItem}>About</a>
                </li>
                <li>
                    <a href='#Experiences' className={styles.navItem}>Experiences</a>
                </li>
                <li>
                    <a href='#Projects' className={styles.navItem}>Projects</a>
                </li>
            </ul>
        </section>
    );
}

export default NavBar;
