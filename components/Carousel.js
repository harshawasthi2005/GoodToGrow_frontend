import styles from "@/styles/Home.module.css";
import { useState } from "react";

export default function Carousel() {
  const images = [
    "/p1.jpg",
    "/p2.jpg",
    "/p3.jpg",
  ];
  const [currentImgIndex, setCurrentImgIndex] = useState(0);

  const handleNextImg = () => {
    setCurrentImgIndex((currentImgIndex + 1) % images.length);
  };

  const handlePrevImg = () => {
    const nextIndex = currentImgIndex - 1;
    if (nextIndex < 0) {
      setCurrentImgIndex(images.length - 1);
    } else {
      setCurrentImgIndex(nextIndex);
    }
  };

  const currentImg = images[currentImgIndex];

  return (
    <div className={styles.imagecontainer}>
      <button className={styles.prevbutton} onClick={handleNextImg}>
        &#10094;
      </button>
      <img
        src={currentImg}
        className={styles.imgk}
        alt="your-image-description"
      />
      <div className={styles.overlay}>
        <h1>Grow with Us!</h1>
        <p>We assure you for your growth</p>
      </div>
      <div className={styles.indContainer}>
        <div
          className={`${
            currentImgIndex == 0 ? `${styles.indc}` : `${styles.ind}`
          }`}
        ></div>
        <div
          className={`${
            currentImgIndex == 1 ? `${styles.indc}` : `${styles.ind}`
          }`}
        ></div>
        <div
          className={`${
            currentImgIndex == 2 ? `${styles.indc}` : `${styles.ind}`
          }`}
        ></div>
      </div>
      <button className={styles.nextbutton} onClick={handlePrevImg}>
        &#10095;
      </button>
    </div>
  );
}
