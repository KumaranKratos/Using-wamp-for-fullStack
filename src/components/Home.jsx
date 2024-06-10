import styles from "../styles/Home.module.css";
import { Link } from "react-router-dom";
export function Home() {
  return (
    <div>
      <div className={styles.container}>
        <div>Logo</div>
        <div className={styles.linkcontainer}>
          <Link to="/">Home</Link>
          <Link to="/about">About</Link>
          <Link to="/contactus">Contact</Link>
        </div>
      </div>

      <h1 className={styles.welcome}>Welcome to Home</h1>
    </div>
  );
}
