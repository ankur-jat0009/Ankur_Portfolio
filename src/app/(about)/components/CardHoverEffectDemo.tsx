"use client"
import { useEffect } from "react";
import { HoverEffect } from "../../../components/ui/card-hover-effect";

export function CardHoverEffectDemo() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div className="max-w-5xl mx-auto px-8">
      <HoverEffect items={projects} />
    </div>
  );
}
export const projects = [
  {
    title: "Languages :",
    description: "C, C++, Python, SQL, HTML, CSS, JavaScript",
  },
  {
    title: "Data Manipulation :",
    description: "NumPy, Pandas, Scikit-learn, Exploratory Data Analysis (EDA)",
  },
  {
    title: "Visualization :",
    description: "Matplotlib, Seaborn, Power BI",
  },
  {
    title: "Developer Tools :",
    description: "Microsoft Excel, GitHub, MySQL, VS Code, Jupyter Notebook, Google Colab",
  },
  {
    title: "Courses :",
    description: "DSA, AI, Probability & Statistics, Linear Algebra & Matrix, Computer Networks, DBMS",
  },
];
