import styles from "../Styling/Rights.module.css";
export default function Rights() {
  return (
    <div className={styles.Footer}>
      © 2025 - {new Date().getFullYear()} Sathvik koriginja. All rights
      reserved.
    </div>
  );
}
