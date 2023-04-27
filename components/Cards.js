import Progress from "@/components/Progress";
import styles from "@/styles/Home.module.css";
import Link from "next/link";

function Cards(props) {
  let {title,desc,link,chapter,time,Bstyle,LoggedIn}=props;
  let route=`/View?Link=${link}`;
    return (
        <>
        <div className={styles.container}>
        <div className={`${"card"} ${styles.cardbox}`}>
          <div
            className="card-body"
            style={{
              background: `${Bstyle}`,
            }}
          >
            <h5 className="card-title">{title}</h5>
            <h6 className="card-subtitle mb-2 text-muted" style={{color: "white"}}>{desc}</h6>
            <div className={styles.course}>
              <p style={{ padding: 5 }}>{chapter}</p>
              <p style={{ padding: 5 }}>{time}</p>
              <Link href={`${LoggedIn?`${route}`:`/login`}`}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="50"
                height="50"
                fill="white"
                className="bi bi-play"
                viewBox="0 0 16 16"
                style={{ cursor: "pointer" }}
              >
                <path d="M10.804 8 5 4.633v6.734L10.804 8zm.792-.696a.802.802 0 0 1 0 1.392l-6.363 3.692C4.713 12.69 4 12.345 4 11.692V4.308c0-.653.713-.998 1.233-.696l6.363 3.692z" />
              </svg>
              </Link>
            </div>
            <Progress />
          </div>
        </div>
      </div>
        </>
    );
}

export default Cards;