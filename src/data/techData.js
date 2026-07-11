import {
  SiPhp, SiLaravel, SiSpringboot, SiReact, SiGithub, SiGitlab,
  SiDocker, SiGrafana, SiCplusplus, SiPython, SiMysql, SiPostgresql
} from "react-icons/si";
import { FaJava } from "react-icons/fa";
import { BsBoxes } from "react-icons/bs";
import { VscTerminalCmd } from "react-icons/vsc";

export const techCategories = [
  {
    title: "Lenguajes",
    items: [
      { name: "Java", icon: FaJava, color: "text-orange-500" },
      { name: "Python", icon: SiPython, color: "text-yellow-400" },
      { name: "PHP", icon: SiPhp, color: "text-indigo-400" },
      { name: "C++", icon: SiCplusplus, color: "text-blue-500" },
    ],
  },
  {
    title: "Frameworks",
    items: [
      { name: "Spring Boot", icon: SiSpringboot, color: "text-green-500" },
      { name: "Laravel", icon: SiLaravel, color: "text-red-500" },
      { name: "React", icon: SiReact, color: "text-cyan-400" },
    ],
  },
  {
    title: "Bases de datos",
    items: [
      { name: "PostgreSQL", icon: SiPostgresql, color: "text-blue-400" },
      { name: "MySQL", icon: SiMysql, color: "text-blue-300" },
    ],
  },
  {
    title: "DevOps & Observabilidad",
    items: [
      { name: "Docker", icon: SiDocker, color: "text-blue-500" },
      { name: "Docker Compose", icon: BsBoxes, color: "text-blue-400" },
      { name: "GitHub", icon: SiGithub, color: "text-white" },
      { name: "GitLab", icon: SiGitlab, color: "text-orange-400" },
      { name: "Grafana", icon: SiGrafana, color: "text-orange-500" },
      { name: "Loki", icon: VscTerminalCmd, color: "text-gray-300" },
    ],
  },
]
