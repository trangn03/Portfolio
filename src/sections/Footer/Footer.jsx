import styles from './FooterStyles.module.css';

function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };
  const currentYear = new Date().getFullYear(); 

  return (
    <section id="Footer" className={styles.container}>
      <p>Made with 💙 by <strong>Trang Ngo</strong></p>
      <p>© {currentYear}</p>
      <button className={styles.backToTop} onClick={scrollToTop}>Back to Top ↑</button>
    </section>
  );
}

export default Footer;
