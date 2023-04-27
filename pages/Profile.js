import React from 'react';
import styles from "@/styles/Profile.module.css";
const Profile = () => {
  

  return (
    <div className={styles.profileContainer}>
      <div className={styles.profilIimage}>
        <img src='https://via.placeholder.com/200/0000FF/808080?text=Profile' alt="Profile" />
      </div>
      <div className={styles.profileInfo}>
        <h2>Arjun Tiwari</h2>
        <p>21</p>
        <p>Software Engineer</p>
        <p className={styles.profileBio}>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
      </div>
    </div>
  );
};

export default Profile;
