import React from 'react';
import { 
  SiPhp, SiLaravel, SiSpringboot, SiReact, SiGithub, SiGitlab, 
  SiDocker, SiGrafana, SiCplusplus, SiPython, SiMysql, SiPostgresql 
} from "react-icons/si";
import { FaJava } from "react-icons/fa";
import { BsBoxes } from "react-icons/bs";
import { VscTerminalCmd } from "react-icons/vsc";

const techStack = [
  { name: 'PHP', icon: SiPhp, color: 'text-indigo-400' },
  { name: 'Laravel', icon: SiLaravel, color: 'text-red-500' },
  { name: 'Java', icon: FaJava, color: 'text-orange-500' },
  { name: 'Spring Boot', icon: SiSpringboot, color: 'text-green-500' },
  { name: 'React', icon: SiReact, color: 'text-cyan-400' },
  { name: 'GitHub', icon: SiGithub, color: 'text-white' },
  { name: 'GitLab', icon: SiGitlab, color: 'text-orange-400' },
  { name: 'Docker', icon: SiDocker, color: 'text-blue-500' },
  { name: 'Docker Compose', icon: BsBoxes, color: 'text-blue-400' },
  { name: 'Grafana', icon: SiGrafana, color: 'text-orange-500' },
  { name: 'Loki', icon: VscTerminalCmd, color: 'text-gray-300' },
  { name: 'C++', icon: SiCplusplus, color: 'text-blue-600' },
  { name: 'Python', icon: SiPython, color: 'text-yellow-400' },
  { name: 'MySQL', icon: SiMysql, color: 'text-blue-300' },
  { name: 'PostgreSQL', icon: SiPostgresql, color: 'text-blue-400' }
];

const Technologies = () => {
  return (
    <section className="py-20 bg-gray-900 overflow-hidden relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-16">
        <div className="text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Tecnologías y <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-300">Herramientas</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-cyan-400 mx-auto rounded-full mb-6"></div>
          <p className="text-gray-400 max-w-2xl mx-auto text-lg">
            El ecosistema de tecnologías que utilizo para construir soluciones robustas, escalables y eficientes.
          </p>
        </div>
      </div>

      {/* Marquee Container */}
      <div className="relative w-full overflow-hidden flex items-center before:absolute before:left-0 before:top-0 before:z-10 before:h-full before:w-32 before:bg-gradient-to-r before:from-gray-900 before:to-transparent after:absolute after:right-0 after:top-0 after:z-10 after:h-full after:w-32 after:bg-gradient-to-l after:from-gray-900 after:to-transparent py-4">
        <div className="animate-marquee flex items-center">
          {/* Render two sets of icons for seamless looping */}
          {[...techStack, ...techStack].map((tech, index) => (
            <div 
              key={index} 
              className="flex flex-col items-center justify-center group cursor-pointer transition-transform duration-300 hover:-translate-y-2 mx-6 sm:mx-10"
            >
              <div className={`p-5 rounded-2xl bg-gray-800/80 backdrop-blur-sm border border-gray-700 shadow-lg group-hover:border-gray-500 group-hover:shadow-[0_0_20px_rgba(34,211,238,0.2)] transition-all duration-300 flex items-center justify-center w-20 h-20 md:w-24 md:h-24`}>
                <tech.icon className={`w-10 h-10 md:w-12 md:h-12 ${tech.color} group-hover:brightness-125 transition-all duration-300 drop-shadow-md`} />
              </div>
              <span className="mt-4 text-sm md:text-base font-semibold text-gray-400 group-hover:text-white transition-colors duration-300 tracking-wide">
                {tech.name}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Technologies;
