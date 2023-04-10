import styles from '../styles/Footer.module.css';

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <div className={styles.links}>
          <a href="/">Home</a>
          <a href="/courses">Courses</a>
          <a href="/About">About Us</a>
          <a href="/contact">Contact Us</a>
        </div>
        <div className={styles.social}>
        <a href="https://linkedin.com"><i className="fab fa-linkedin-in fa-2x" style={{"color": "#0082ca"}}></i></a>
          <a href="https://twitter.com"><i className="fab fa-twitter fa-2x" style={{"color": "#55acee"}}></i></a>
          <a href="https://www.facebook.com"><i className="fab fa-facebook-f fa-2x" style={{"color": '#3b5998'}}></i></a>
          <a href="https://www.instagram.com"><i className="fab fa-instagram fa-2x" style={{"color": "#ac2bac"}}></i></a>
          <a href="https://www.github.com"><i class="fab fa-github fa-2x" style={{"color": "#ffff"}}></i></a>
        </div>
      </div>
      <p className={styles.copy}>&copy; 2023 E-Learning Website. All Rights Reserved.</p>
    </footer>
  );
};

export default Footer;
