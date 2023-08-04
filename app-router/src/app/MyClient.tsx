"use client";

import { useState } from "react";
import styles from "./myclient.module.css";
import MyServer from "./MyServer";

const MyClient = ({ children }: { children: React.ReactNode }) => {
  const [color, setColor] = useState("red");
  const handleButton = () => {
    setColor((prev) => (prev === "red" ? "blue" : "red"));
  };
  return (
    <div className={`${styles.wrapper} ${styles[color]}`}>
      <p>클라이언트 컴포넌트 입니다.</p>
      <div className={styles["server-wrapper"]}>{children}</div>
      {/* <div className={styles["server-wrapper"]}>
        <MyServer />
      </div> */}
      <button
        className={`${styles["my-button"]} ${styles[color]}`}
        onClick={handleButton}
      >
        <span className={styles["span-mother"]}>
          <span>B</span>
          <span>u</span>
          <span>t</span>
          <span>t</span>
          <span>o</span>
          <span>n</span>
        </span>
        <span className={styles["span-mother2"]}>
          <span>B</span>
          <span>u</span>
          <span>t</span>
          <span>t</span>
          <span>o</span>
          <span>n</span>
        </span>
      </button>
    </div>
  );
};

export default MyClient;
