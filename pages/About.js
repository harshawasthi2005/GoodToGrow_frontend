import Footer from "@/components/Footer";
import Head from "next/head";
import styles from "../styles/About.module.css";

const About = () => {
  return (
    <>
      <div className={styles.outerbox}>
        <div className={styles.container}>
          <Head>
            <title>About Us | My E-Learning Website</title>
            <meta
              name="description"
              content="Learn more about our e-learning website and our team."
            />
          </Head>
          <h1 className={styles.h1}>About Us</h1>
          <p className={styles.p}>
            Welcome to My E-Learning Website, where we are dedicated to
            providing high-quality online education to learners all over the
            world. Our team is made up of experienced educators and developers
            who are passionate about making education accessible to everyone.
          </p>
          <h2 className={styles.h2}>Our Mission</h2>
          <p className={styles.p}>
            Our mission is to provide learners with affordable, engaging, and
            effective online courses that help them achieve their learning
            goals. We believe that education should be accessible to everyone,
            regardless of their location or financial situation.
          </p>
          <h2 className={styles.h2}>Our Team</h2>
          <ul className={styles.ul}>
            <li className={styles.li}>John Doe - CEO</li>
            <li className={styles.li}>Jane Smith - Head of Education</li>
            <li className={styles.li}>Bob Johnson - Lead Developer</li>
          </ul>
        </div>
        <Footer />
      </div>
    </>
  );
};

export default About;
