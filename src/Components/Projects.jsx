import React from "react";
import FoodRecipesImage from "../ProjectImages/Foodapp.png";
import BMIImage from "../ProjectImages/BMI.png";
import CalculatorImage from "../ProjectImages/Calculator.png";
import ColorsSwitcherImage from "../ProjectImages/Colorswitcher.png";
import TemperatureConverterImage from "../ProjectImages/Temperatureconverter.png";
import TodoImage from "../ProjectImages/Todo.png";
import UniverseImage from "../ProjectImages/Universe.png";
import LibraryImage from "../ProjectImages/Library.png";
import compitetorAssistant from "../ProjectImages/CompetitorAssistant.png";
import Project from "./Project";
export default function Projects() {
  return (
    <div>
      <Project
        imageURL={LibraryImage}
        Title="Library Management System"
        tech="Tech Stacks: React.js, JavaScript, HTML, CSS"
        desci="Description: The Library Management System is a digital solution designed to streamline the library experience. It addresses common issues such as cluttered bookshelves, difficulty in locating books, and managing library occupancy. This platform provides an intuitive online interface where students can easily access all essential information about the library. Features include a well-organized display of books sorted by sections, user authentication (login/signup), feedback submission, and real-time updates on library capacity."
        features="Features: 
    - Utilizes React Routing for seamless navigation.
    - Fully responsive and interactive design ensures accessibility across devices.
    - Strict adherence to the university's UI style guide for a consistent and professional look.
    - Future plans include integrating a robust backend system to further enhance functionality."
        projectLink="https://library-space-rishihood.vercel.app"
      />
      <Project
        imageURL={compitetorAssistant}
        Title="Library Management System"
        tech="Tech Stacks: React.js, JavaScript, HTML, CSS"
        desci="Description: The Library Management System is a digital solution designed to streamline the library experience. It addresses common issues such as cluttered bookshelves, difficulty in locating books, and managing library occupancy. This platform provides an intuitive online interface where students can easily access all essential information about the library. Features include a well-organized display of books sorted by sections, user authentication (login/signup), feedback submission, and real-time updates on library capacity."
        features="Features: 
    - Utilizes React Routing for seamless navigation.
    - Fully responsive and interactive design ensures accessibility across devices.
    - Strict adherence to the university's UI style guide for a consistent and professional look.
    - Future plans include integrating a robust backend system to further enhance functionality."
        projectLink="https://library-space-rishihood.vercel.app"
      />
      <Project
        imageURL={FoodRecipesImage}
        Title="FoodRecipe"
        tech="Tech Stacks: React, JavaScript, HTML, CSS ."
        desci="Description: Food Recipe Generator designed to provide users with
            detailed recipe information, including ingredients, step-by-step
            instructions, and cost per serving."
        features="Features: API Fetching , fetched recipe data via API and
            presented it in a clean, well-organized format.ensures a responsive,
            user-friendly experience with smooth functionality across devices."
        projectLink="https://food-recipe-six-lac.vercel.app"
      />
      <Project
        imageURL={TodoImage}
        Title="Todo App"
        tech="Tech Stacks : React , Tailwind CSS , JavaScript , HTML "
        desci="Description : A modern To-Do List App, designed to simplify task
            management .This project reflects my passion for blending
            functionality with sleek design to create intuitive user experiences
            , highlighting my web-development skills. "
        features="
            Features : Todo list is a fully functional , Clean, interactive, and
            responsive interface. You can add ,search ,delete your tasks as you
            want"
        projectLink="https://todolist-1zgr.vercel.app"
      />
      <Project
        imageURL={UniverseImage}
        Title="Cosmic Portfolio Website"
        tech="Tech Stacks: React, JavaScript, HTML, CSS ."
        desci="Description : A dynamic portfolio webpage.This project showcases my
            work and skills.This project represents my journey into web
            development while creating a unique and engaging user experience."
        features="Features: An immersive space-themed portfolio website, interactive
            design."
        projectLink="https://sathvik89.github.io/project_1/project1.html"
      />
      <Project
        imageURL={BMIImage}
        Title="BMI Calculator"
        tech="Tech Stacks: HTML, CSS, JavaScript."
        desci=" Description: A practical BMI (Body Mass Index) calculator that helps
            users determine their body mass index based on their weight and
            height. This project demonstrates my ability to handle user inputs
            and perform real-time calculations using JavaScript."
        features=" Features: Real-time BMI calculation based on user inputs.Responsive
            design for optimal use on all devices."
        projectLink="https://sathvik89.github.io/bmi-calculator/"
      />
      <Project
        imageURL={ColorsSwitcherImage}
        Title="Color Switcher"
        tech="Tech Stacks: JavaScript, DOM Manipulation. "
        desci="Description: A simple web application that allows users to switch
            between different color themes dynamically. This project showcases
            my understanding of JavaScript and DOM manipulation, enabling
            real-time changes to the webpage's appearance. The Color Switcher is
            a great example of how small, interactive elements can enhance user
            engagement."
        features="Features: Dynamic color switching using JavaScript."
        projectLink="https://sathvik89.github.io/color-switcher/"
      />
      <Project
        imageURL={TemperatureConverterImage}
        Title="Temperature Converter"
        tech=" Tech Stacks: HTML, CSS, JavaScript "
        desci=" Description : A dynamic portfolio webpage.This project demonstrates
            my ability to create interactive web applications while implementing
            programming concepts. "
        features="  Features: A fully functional Temperature converter, interactive
            design."
        projectLink="https://sathvik89.github.io/sathvik89/"
      />
      <Project
        imageURL={CalculatorImage}
        Title="Calculator"
        tech="Tech Stacks: HTML, CSS, JavaScript (eval)."
        desci=" Description: A classic calculator application built using HTML, CSS,
            and JavaScript. This project emphasizes my ability to implement
            basic arithmetic operations using JavaScript's `eval` function. The
            calculator is designed to be both functional and aesthetically
            pleasing, offering a seamless experience for performing
            calculations."
        features="Features: - Basic arithmetic operations (addition, subtraction,
            multiplication, division). - Clear and concise user interface. -
            Support for multiple operations in a single expression."
        projectLink="https://sathvik89.github.io/calc/"
      />
    </div>
  );
}
