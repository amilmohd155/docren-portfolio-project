import {
  FaArtstation,
  FaGithub,
  FaLinkedinIn,
  FaStackOverflow,
} from "react-icons/fa";
import data from "./data.json";
import { IconType } from "react-icons";

const iconMap: Record<string, IconType> = {
  Github: FaGithub,
  StackOverflow: FaStackOverflow,
  LinkedIn: FaLinkedinIn,
  Artstation: FaArtstation,
};

const SocialLinks = data.socialLinks.map(({ link, label }) => ({
  link,
  label,
  icon: iconMap[label],
}));

const TopSkills = data.skills.top;
const SoftwareKnowledge = data.skills.softwareKnowledge;
const CreativeSkills = data.skills.creative;
const TechnicalSkills = data.skills.technical;
const OtherSkills = data.skills.other;
const Bio = data.bio;
const Education = data.education;
const Experience = data.experience;
const Projects = data.projects;
const footer = data.footer;

export {
  SocialLinks,
  TopSkills,
  CreativeSkills,
  TechnicalSkills,
  SoftwareKnowledge,
  OtherSkills,
  Bio,
  Education,
  Experience,
  Projects,
  footer,
};
