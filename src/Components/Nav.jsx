import styles from "../Styling/Nav.module.css";
import { Link } from "react-router-dom";
import Home from "./Home";
import Aboutme from "./Aboutme";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Skills from "./Skills";
import Projects from "./Projects";
import Contact from "./Contact";
import Rights from "./Rights";
export default function Nav() {
  const Elements = () => {
    return (
      <div className={styles.navbar}>
        <Link
          to="/home"
          className={location.pathname === "/home" ? `${styles.active}` : ""}
        >
          Home
        </Link>
        <Link
          to="/aboutme"
          className={location.pathname === "/aboutme" ? `${styles.active}` : ""}
        >
          About
        </Link>
        <Link
          to="/skills"
          className={location.pathname === "/skills" ? `${styles.active}` : ""}
        >
          Skills
        </Link>
        <Link
          to="/projects"
          className={
            location.pathname === "/projects" ? `${styles.active}` : ""
          }
        >
          Projects
        </Link>
        <Link
          to="/contact"
          className={location.pathname === "/contact" ? `${styles.active}` : ""}
        >
          Contact
        </Link>
      </div>
    );
  };
  return (
    <div>
      <BrowserRouter>
        <Elements />
        <Routes>
          <Route path="/home" element={<Home />} />
          <Route path="/aboutme" element={<Aboutme />} />
          <Route path="/skills" element={<Skills />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </BrowserRouter>
      <Rights />
    </div>
  );
}
