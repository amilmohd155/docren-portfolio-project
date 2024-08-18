import About from "@/components/About";
import Education from "@/components/Education";
import Experience from "@/components/Experience";
import Projects from "@/components/Projects";
import Skills from "@/components/Skills";
import { IconType } from "react-icons";
import {
  FaArtstation,
  FaGithub,
  FaLinkedinIn,
  FaStackOverflow,
} from "react-icons/fa";

// Pages
const Pages: readonly {
  link: string;
  label: string;
  children?: () => JSX.Element;
}[] = [
  { link: "about", label: "About me", children: About },
  { link: "projects", label: "Projects", children: Projects },
  { link: "experience", label: "Work experience", children: Experience },
  { link: "skills", label: "Skills", children: Skills },
  { link: "education", label: "Education", children: Education },
];

// Social links
const SocialLinks: readonly {
  link: string;
  title: string;
  icon: IconType;
}[] = [
  {
    link: "https://github.com/amilmohd155",
    title: "Github",
    icon: FaGithub,
  },
  {
    link: "https://stackoverflow.com/users/23015660/amil-muhammed-hamza",
    title: "StackOverflow",
    icon: FaStackOverflow,
  },
  {
    link: "https://www.linkedin.com/in/amil-muhammed/",
    title: "LinkedIn",
    icon: FaLinkedinIn,
  },
  {
    link: "https://docren155.artstation.com/",
    title: "Artstation",
    icon: FaArtstation,
  },
];

// skills
const SkillList: readonly string[] = [
  "react",
  "react native",
  "nextjs",
  "nestjs",
  "tailwindcss",
];

export { Pages, SocialLinks, SkillList };
