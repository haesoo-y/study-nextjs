import Link from "next/link";

import styles from "@styles/navbar.module.css";

const NavBar = () => {
  return (
    <nav className={styles.wrapper}>
      <Link className={styles.link} href="/todos">
        todos
      </Link>
      <Link className={styles.link} href="/">
        home
      </Link>
    </nav>
  );
};

export default NavBar;
