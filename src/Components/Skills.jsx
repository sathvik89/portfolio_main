import React from "react";
import HTMLImage from "../Images/HTML.png";
import CSSImage from "../Images/CSS.png";
import DSAImage from "../Images/DSA.png";
import GitImage from "../Images/GIT.png";
import JavaScriptImage from "../Images/JAVASCRIPT.png";
import PythonImage from "../Images/Python.png";
import ReactImage from "../Images/REACT.png";
import TailwindImage from "../Images/TAILWIND.png";
import styles from "../Styling/Skills.module.css";
export default function Skills() {
  return (
    <div className={styles.skillcontainer}>
      <div className={styles.skillsinner}>
        <img className={styles.skillimage} src={HTMLImage} alt="HTML" />
        <div className={styles.skillname}>HTML</div>
      </div>
      <div className={styles.skillsinner}>
        <img className={styles.skillimage} src={CSSImage} alt="" />
        <div className={styles.skillname}>CSS</div>
      </div>
      <div className={styles.skillsinner}>
        <img className={styles.skillimage} src={DSAImage} alt="" />
        <div className={styles.skillname}>Data structures and algorithms</div>
      </div>
      <div className={styles.skillsinner}>
        <img className={styles.skillimage} src={GitImage} alt="" />
        <div className={styles.skillname}>Git</div>
      </div>

      <div className={styles.skillsinner}>
        <img className={styles.skillimage} src={JavaScriptImage} alt="" />
        <div className={styles.skillname}>JavaScript</div>
      </div>

      <div className={styles.skillsinner}>
        <img className={styles.skillimage} src={PythonImage} alt="" />
        <div className={styles.skillname}>Python</div>
      </div>

      <div className={styles.skillsinner}>
        <img className={styles.skillimage} src={ReactImage} alt="" />
        <div className={styles.skillname}>React</div>
      </div>

      <div className={styles.skillsinner}>
        <img className={styles.skillimage} src={TailwindImage} alt="" />
        <div className={styles.skillname}>Tailwind CSS</div>
      </div>
    </div>
  );
}
