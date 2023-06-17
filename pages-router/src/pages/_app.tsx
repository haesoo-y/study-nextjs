import NavBar from "@src/components/NavBar";
import type { AppProps } from "next/app";

import "@styles/global.css";
import styles from "@styles/layout.module.css";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <div className={styles.wrapper}>
      <NavBar />
      <Component {...pageProps} />
    </div>
  );
}
