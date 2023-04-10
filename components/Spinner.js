import styles from "@/styles/Home.module.css";
import Image from "next/image";
function Spinner() {
  const containerStyle = {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  };
  return (
    <div style={containerStyle}>
      <Image
        src="/logo.png"
        width={80}
        height={80}
        className={styles.rotate}
        alt=""
      />
    </div>
  );
}

export default Spinner;
