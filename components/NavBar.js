import styles from "@/styles/Home.module.css";
import Image from "next/image";
import { useState } from "react";
import Link from "next/link";


export default function NavBar() {
  var [theme, setTheme] = useState("light");

  const setMode = () => {
    if (theme == "light") {
      console.log(theme);
      setTheme("dark");
      console.log(theme);
    } else {
      setTheme("light");
    }
  };
  return (
    <nav
      className={`${
        theme == "light" ? `${styles.navbardark}` : `${styles.navbarlight}`
      }`}
    >
      <div className={styles.nav}>
        <Image
          src="/logo.png"
          width={80}
          height={80}
          className={styles.rotate}
          alt=""
        />
        <div className={styles.navItems}>
          <ul className={styles.linkContainer}>
            <li>
              <Link
                href="/About"
                className={`${
                  theme == "light"
                    ? `${styles.linklight}`
                    : `${styles.linkdark}`
                }`}
              >
                GoodToGrow
              </Link>
            </li>
            <li>
              <Link
                href="/"
                className={`${
                  theme == "light"
                    ? `${styles.linklight}`
                    : `${styles.linkdark}`
                }`}
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                href="/Course"
                className={`${
                  theme == "light"
                    ? `${styles.linklight}`
                    : `${styles.linkdark}`
                }`}
              >
                Courses
              </Link>
            </li>
            <li>
              <Link
                href='/VideoList'
                className={`${
                  theme == "light"
                    ? `${styles.linklight}`
                    : `${styles.linkdark}`
                }`}
              >
                New
              </Link>
            </li>
            <li style={{ marginRight: '60px' }}>
              <a
                href="#"
                className={`${
                  theme == "light"
                    ? `${styles.linklight}`
                    : `${styles.linkdark}`
                }`}
              >
                Algorithms
              </a>
            </li>
          </ul>
          <div className={styles.search}>
            <input
              type="text"
              className={`${
                theme == "light"
                  ? `${styles.searchBoxdark}`
                  : `${styles.searchBoxlight}`
              }`}
              placeholder="Search Anything..."
            />
            <button className={styles.searchBtn}>Search</button>
            <Link href="/login">
              <Image
                src="/user.png"
                width={50}
                height={40}
                className={styles.user}
                alt=""
              />
            </Link>
            <a href="#">
              <Image
                src="/cart.png"
                width={60}
                height={45}
                className={styles.cart}
                alt=""
              />
            </a>
            <button onClick={setMode} className={styles.btn}>
              <Image
                src={`${theme == "light" ? "/dark.png" : "/light.png"}`}
                width={35}
                height={35}
                className={styles.theme}
                alt=""
              />
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
}
