import { useRef, useEffect, useState } from "react";
import "./App.css";
import Nav from "./Components/Nav";
import Home from "./Components/Home";
import Aboutme from "./Components/Aboutme";
import Skills from "./Components/Skills";
import Projects from "./Components/Projects";
import Contact from "./Components/Contact";
import Rights from "./Components/Rights";

export default function App() {
  const homeSection = useRef(null);
  const aboutSection = useRef(null);
  const skillsSection = useRef(null);
  const projectsSection = useRef(null);
  const contactSection = useRef(null);
  const [activeSectionName, setActiveSectionName] = useState("home");

  function scrollToSection(sectionRef) {
    sectionRef.current.scrollIntoView({ behavior: "smooth", block: "start" });
  }

  useEffect(() => {
    const checkActiveSection = () => {
      const scrollPosition =
        document.documentElement.scrollTop || document.body.scrollTop;

      // const homeOffset = homeSection.current.offsetTop;
      const aboutOffset = aboutSection.current.offsetTop;
      const skillsOffset = skillsSection.current.offsetTop;
      const projectsOffset = projectsSection.current.offsetTop;
      const contactOffset = contactSection.current.offsetTop;

      // Define a buffer to make the active state change before fully reaching the section
      const buffer = 100;

      if (scrollPosition >= contactOffset - buffer) {
        setActiveSectionName("contact");
      } else if (scrollPosition >= projectsOffset - buffer) {
        setActiveSectionName("projects");
      } else if (scrollPosition >= skillsOffset - buffer) {
        setActiveSectionName("skills");
      } else if (scrollPosition >= aboutOffset - buffer) {
        setActiveSectionName("aboutme");
      } else {
        setActiveSectionName("home");
      }
    };
    document.addEventListener("scroll", checkActiveSection);
  }, []);

  return (
    <div className="app">
      <Nav
        activeSection={activeSectionName}
        scrollToHome={() => scrollToSection(homeSection)}
        scrollToAbout={() => scrollToSection(aboutSection)}
        scrollToSkills={() => scrollToSection(skillsSection)}
        scrollToProjects={() => scrollToSection(projectsSection)}
        scrollToContact={() => scrollToSection(contactSection)}
      />

      <section ref={homeSection}>
        <div style={{ height: "80px" }}></div>
        <Home />
      </section>

      <section ref={aboutSection}>
        <div style={{ height: "80px" }}></div>
        <Aboutme />
      </section>

      <section ref={skillsSection}>
        <div style={{ height: "80px" }}></div>
        <Skills />
      </section>

      <section ref={projectsSection}>
        <div style={{ height: "80px" }}></div>
        <Projects />
      </section>

      <section ref={contactSection}>
        <div style={{ height: "80px" }}></div>
        <Contact />
      </section>
      <Rights />
    </div>
  );
}
