import { createContext, useState } from "react";
import html from "../../public/images/html.jpg";
import css from "../../public/images/css.jpg";
import js from "../../public/images/js.jpg";
import php from "../../public/images/php.jpg";
import ts from "../../public/images/ts.jpg";
import react from "../../public/images/react.jpg";
import bootstrap from "../../public/images/bootstrap.jpg";
import git from "../../public/images/git.jpg";
import python from "../../public/images/python.jpg";
import sql from "../../public/images/mySql.jpg";
import tailwind from "../../public/images/tailwind.jpg";

// Create context
export const CourseContext = createContext(null)

export default function CourseContextProvider({children}){
    // State
  const [courses, setCourses] = useState([
    {
      id: 1,
      courseName: "HTML",
      courseDes: "Hyper Markup Language",
      image: html,
      price: "71000",
    },
    {
      id: 2,
      courseName: "CSS",
      courseDes: "Cascading style sheet",
      image: css,
      price: "24000",
    },
    {
      id: 3,
      courseName: "javaScript",
      courseDes: "children of JavaScript",
      image: js,
      price: "15000",
    },
    {
      id: 4,
      courseName: "typeScript",
      courseDes: "Parent of Javascript",
      image: ts,
      price: "14000",
    },
    {
      id: 5,
      courseName: "PHP",
      courseDes: "Server side language",
      image: php,
      price: "10000",
    },
    {
      id: 6,
      courseName: "React",
      courseDes: "Framework of Frontend",
      image: react,
      price: "12000",
    },
    {
      id: 7,
      courseName: "Bootstrap",
      courseDes: "user interface design framework",
      image: bootstrap,
      price: "2000",
    },
    {
      id: 8,
      courseName: "Git",
      courseDes: "user interface design framework",
      image: git,
      price: "9000",
    },
    {
      id: 9,
      courseName: "python",
      courseDes: "user interface design framework",
      image: python,
      price: "7000",
    },
    {
      id: 10,
      courseName: "MySql",
      courseDes: "Database language",
      image: sql,
      price: "5000",
    },
    {
      id: 11,
      courseName: "Tailwind",
      courseDes: "Style framework",
      image: tailwind,
      price: "4000",
    },
])

const [originalCourses,setOriginalCourses] = useState(courses)

    return<CourseContext.Provider value={{courses, setCourses,setOriginalCourses, originalCourses}}>
        {children}
    </CourseContext.Provider>
}

