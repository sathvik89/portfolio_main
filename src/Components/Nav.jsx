import styles from "../Styling/Nav.module.css";
import { Link } from "react-router-dom";
import Home from "./Home";
import Aboutme from "./Aboutme";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Skills from "./Skills";
import Projects from "./Projects";
import Contact from "./Contact";
export default function Nav() {
  const Elements = () => {
    return (
      <div className={styles.navbar}>
        <Link to="/home">Home</Link>
        <Link to="/aboutme">About</Link>
        <Link to="/skills">Skills</Link>
        <Link to="/projects">Projects</Link>
        <Link to="/contact">Contact</Link>
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
    </div>
  );
}
