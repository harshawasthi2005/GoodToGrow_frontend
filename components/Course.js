import Progress from "@/components/Progress";
import styles from "@/styles/Home.module.css";
import { useState } from "react";

export default function Course() {
  var [show, setShow] = useState(false);

  const handleClick = () => {
    setShow(!show);
  };
  return (
    <>
      <div className={styles.courseCon}>
        <p className={styles.coursetext}>Featured</p>
        <button className={styles.viewbtn} onClick={handleClick}>
          {`view ` + `${show ? "less" : "more"}`}
        </button>
      </div>
      <div className={styles.container}>
        <div className={`${"card"} ${styles.cardbox}`}>
          <div
            className="card-body"
            style={{
              background: "linear-gradient(to right, #56ccf2, #2f80ed)",
            }}
          >
            <h5 className="card-title">Card title</h5>
            <h6 className="card-subtitle mb-2 text-muted">Card subtitle</h6>
            <div className={styles.course}>
              <p style={{ padding: 5 }}>10 Chapters</p>
              <p style={{ padding: 5 }}>3 hrs 30 mins</p>
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
            </div>
            <Progress />
          </div>
        </div>
        <div className={`${"card"} ${styles.cardbox}`}>
          <div
            className="card-body"
            style={{
              background: "linear-gradient(to right, #6d6027, #d3cbb8)",
            }}
          >
            <h5 className="card-title">Card title</h5>
            <h6 className="card-subtitle mb-2 text-muted">Card subtitle</h6>
            <div className={styles.course}>
              <p style={{ padding: 5 }}>12 Chapters</p>
              <p style={{ padding: 5 }}>3 hrs 40 mins</p>
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
            </div>
            <Progress />
          </div>
        </div>
        <div className={`${"card"} ${styles.cardbox}`}>
          <div
            className="card-body"
            style={{
              background: "linear-gradient(to right, #1f4037, #99f2c8)",
            }}
          >
            <h5 className="card-title">Card title</h5>
            <h6 className="card-subtitle mb-2 text-muted">Card subtitle</h6>
            <div className={styles.course}>
              <p style={{ padding: 5 }}>11 Chapters</p>
              <p style={{ padding: 5 }}>3 hrs 30 mins</p>
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
            </div>
            <Progress />
          </div>
        </div>
        <div className={`${"card"} ${styles.cardbox}`}>
          <div
            className="card-body"
            style={{
              background: "linear-gradient(to right, #800080, #ffc0cb)",
            }}
          >
            <h5 className="card-title">Card title</h5>
            <h6 className="card-subtitle mb-2 text-muted">Card subtitle</h6>
            <div className={styles.course}>
              <p style={{ padding: 5 }}>15 Chapters</p>
              <p style={{ padding: 5 }}>8 hrs 15 mins</p>
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
            </div>
            <Progress />
          </div>
        </div>
      </div>

      {show && (
        <div className={styles.container2}>
          <div className={`${"card"} ${styles.cardbox}`}>
            <div
              className="card-body"
              style={{
                background: "linear-gradient(to right, #56ccf2, #2f80ed)",
              }}
            >
              <h5 className="card-title">Card title</h5>
              <h6 className="card-subtitle mb-2 text-muted">Card subtitle</h6>
              <div className={styles.course}>
                <p style={{ padding: 5 }}>10 Chapters</p>
                <p style={{ padding: 5 }}>3 hrs 30 mins</p>
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
              </div>
              <Progress />
            </div>
          </div>
          <div className={`${"card"} ${styles.cardbox}`}>
            <div
              className="card-body"
              style={{
                background: "linear-gradient(to right, #6d6027, #d3cbb8)",
              }}
            >
              <h5 className="card-title">Card title</h5>
              <h6 className="card-subtitle mb-2 text-muted">Card subtitle</h6>
              <div className={styles.course}>
                <p style={{ padding: 5 }}>12 Chapters</p>
                <p style={{ padding: 5 }}>3 hrs 40 mins</p>
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
              </div>
              <Progress />
            </div>
          </div>
          <div className={`${"card"} ${styles.cardbox}`}>
            <div
              className="card-body"
              style={{
                background: "linear-gradient(to right, #1f4037, #99f2c8)",
              }}
            >
              <h5 className="card-title">Card title</h5>
              <h6 className="card-subtitle mb-2 text-muted">Card subtitle</h6>
              <div className={styles.course}>
                <p style={{ padding: 5 }}>11 Chapters</p>
                <p style={{ padding: 5 }}>3 hrs 30 mins</p>
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
              </div>
              <Progress />
            </div>
          </div>
          <div className={`${"card"} ${styles.cardbox}`}>
            <div
              className="card-body"
              style={{
                background: "linear-gradient(to right, #800080, #ffc0cb)",
              }}
            >
              <h5 className="card-title">Card title</h5>
              <h6 className="card-subtitle mb-2 text-muted">Card subtitle</h6>
              <div className={styles.course}>
                <p style={{ padding: 5 }}>15 Chapters</p>
                <p style={{ padding: 5 }}>8 hrs 15 mins</p>
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
              </div>
              <Progress />
            </div>
          </div>
        </div>
      )}
    </>
  );
}
