import About from "@/components/About";
import Education from "@/components/Education";
import Experience from "@/components/Experience";
import Projects from "@/components/Projects";
import Skills from "@/components/Skills";
import React from "react";

// Pages
const Pages: readonly {
  link: string;
  label: string;
  children?: () => React.JSX.Element;
}[] = [
  { link: "about", label: "About me", children: About },
  { link: "experience", label: "Work experience", children: Experience },
  { link: "projects", label: "Projects", children: Projects },
  { link: "skills", label: "Skills", children: Skills },
  { link: "education", label: "Education", children: Education },
];

export { Pages };
