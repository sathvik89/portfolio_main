import React from "react";
import HTMLImage from "../Images/HTML.png";
import CSSImage from "../Images/CSS.png";
import DSAImage from "../Images/DSA.png";
import GitImage from "../Images/GIT.png";
import JavaScriptImage from "../Images/JAVASCRIPT.png";
import PythonImage from "../Images/Python.png";
import ReactImage from "../Images/REACT.png";
import TailwindImage from "../Images/TAILWIND.png";

export default function Skills() {
  return (
    <div>
      <div>
        <img src={HTMLImage} alt="HTML" />
        <div>HTML</div>
      </div>
      <div>
        <img src={CSSImage} alt="" />
        <div>CSS</div>
      </div>
      <div>
        <img src={DSAImage} alt="" />
        <div>Data structures and algorithms</div>
      </div>
      <div>
        <img src={GitImage} alt="" />
        <div>Git</div>
      </div>

      <div>
        <img src={JavaScriptImage} alt="" />
        <div>JavaScript</div>
      </div>

      <div>
        <img src={PythonImage} alt="" />
        <div>Python</div>
      </div>

      <div>
        <img src={ReactImage} alt="" />
        <div>React</div>
      </div>

      <div>
        <img src={TailwindImage} alt="" />
        <div>Tailwind CSS</div>
      </div>
    </div>
  );
}
