import styles from "../Styling/Nav.module.css";

export default function Nav({
  activeSection,
  scrollToHome,
  scrollToAbout,
  scrollToSkills,
  scrollToProjects,
  scrollToContact,
}) {
  return (
    <div className={styles.navbar}>
      <button
        onClick={scrollToHome}
        className={activeSection === "home" && styles.active}
      >
        Home
      </button>

      <button
        onClick={scrollToAbout}
        className={activeSection === "aboutme" && styles.active}
      >
        About
      </button>

      <button
        onClick={scrollToSkills}
        className={activeSection === "skills" && styles.active}
      >
        Skills
      </button>

      <button
        onClick={scrollToProjects}
        className={activeSection === "projects" && styles.active}
      >
        Projects
      </button>

      <button
        onClick={scrollToContact}
        className={activeSection === "contact" && styles.active}
      >
        Contact
      </button>
    </div>
  );
}
