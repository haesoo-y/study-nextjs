import styles from "./page.module.css";
import MyClient from "./MyClient";
import MyServer from "./MyServer";

export default function Home() {
  return (
    <>
      <div className={styles.wrapper}>
        <p className={styles.text}>TODO-NEXT-APP-ROUTE</p>
      </div>
      <MyClient>
        {/* @ts-expect-error Server Component */}
        <MyServer />
      </MyClient>
      {/* <MyClient /> */}
    </>
  );
}
