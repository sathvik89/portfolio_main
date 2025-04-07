import styles from "../Styling/Project.module.css";
export default function Project({
  imageURL,
  Title,
  tech,
  desci,
  features,
  projectLink,
}) {
  return (
    <div className={styles.projectcontainer}>
      <div className={styles.imagecontainer}>
        <img className={styles.image} src={imageURL} alt="" />
      </div>
      <div className={styles.descicontainer}>
        <h1 className={styles.title}>{Title}</h1>
        <p>
          {tech}
          <br />
          {desci}
          <br /> {features}
        </p>
      </div>
      <div className={styles.projectlink}>
        <a className={styles.link} href={projectLink}>
          Project Link
        </a>
      </div>
    </div>
  );
}
