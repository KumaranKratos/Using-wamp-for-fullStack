import styles from "../styles/navbar.module.css";
import { Link } from "react-router-dom";

export function Navbar() {
  return (
    <div className={styles.container}>
      <div>Logo</div>
      <div className={styles.linkcontainer}>
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
        <Link to="/contactus">Contact</Link>
      </div>
    </div>
  );
}
