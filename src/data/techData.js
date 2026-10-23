import {
  SiTypescript, SiPython, SiPhp, SiCplusplus,
  SiSpringboot, SiNestjs, SiNodedotjs, SiFastify, SiLaravel, SiPostgresql, SiPrisma, SiMysql,
  SiReact, SiNextdotjs, SiTailwindcss, SiVite, SiCapacitor,
  SiAnthropic, SiWhatsapp, SiDocker, SiRailway, SiVercel, SiGithub,
} from "react-icons/si";
import { FaJava } from "react-icons/fa";

export const techCategories = [
  {
    title: "Lenguajes",
    items: [
      { name: "TypeScript", icon: SiTypescript, color: "text-blue-400" },
      { name: "Java", icon: FaJava, color: "text-orange-500" },
      { name: "Python", icon: SiPython, color: "text-yellow-400" },
      { name: "PHP", icon: SiPhp, color: "text-indigo-400" },
      { name: "C++", icon: SiCplusplus, color: "text-blue-500" },
    ],
  },
  {
    title: "Backend & datos",
    items: [
      { name: "Spring Boot", icon: SiSpringboot, color: "text-green-500" },
      { name: "NestJS", icon: SiNestjs, color: "text-red-500" },
      { name: "Node.js", icon: SiNodedotjs, color: "text-green-500" },
      { name: "Fastify", icon: SiFastify, color: "text-ink-hi" },
      { name: "Laravel", icon: SiLaravel, color: "text-red-400" },
      { name: "PostgreSQL", icon: SiPostgresql, color: "text-blue-400" },
      { name: "Prisma", icon: SiPrisma, color: "text-teal-300" },
      { name: "MySQL", icon: SiMysql, color: "text-blue-300" },
    ],
  },
  {
    title: "Frontend & móvil",
    items: [
      { name: "React", icon: SiReact, color: "text-cyan-400" },
      { name: "Next.js", icon: SiNextdotjs, color: "text-ink-hi" },
      { name: "Tailwind CSS", icon: SiTailwindcss, color: "text-sky-400" },
      { name: "Vite", icon: SiVite, color: "text-violet-400" },
      { name: "Capacitor (Android)", icon: SiCapacitor, color: "text-blue-400" },
    ],
  },
  {
    title: "IA, integraciones & nube",
    items: [
      { name: "Claude (Anthropic)", icon: SiAnthropic, color: "text-amber" },
      { name: "WhatsApp Cloud API", icon: SiWhatsapp, color: "text-green-400" },
      { name: "Docker", icon: SiDocker, color: "text-blue-500" },
      { name: "Railway", icon: SiRailway, color: "text-ink-hi" },
      { name: "Vercel", icon: SiVercel, color: "text-ink-hi" },
      { name: "GitHub", icon: SiGithub, color: "text-ink-hi" },
    ],
  },
]
