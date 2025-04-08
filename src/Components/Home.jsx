import styles from "../Styling/Home.module.css";
export default function Home() {
  return (
    <div className={styles.homeContainer}>
      <div className={styles.nameContainer}>Sathvik Koriginja</div>
      <div className={styles.breifContainer}>
        Student at NST | Coder | WebDeveloper | BadmintonPlayer
      </div>
    </div>
  );
}
