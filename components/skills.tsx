import React from 'react'
import { BiLogoPostgresql } from 'react-icons/bi'
import { FaCss3Alt, FaGitAlt, FaHtml5, FaNodeJs, FaReact } from 'react-icons/fa'
import { RiNextjsFill, RiTailwindCssFill } from 'react-icons/ri'
import { SiExpress, SiMongodb, SiRedux, SiTypescript } from 'react-icons/si'
import OneSkill from './one-skill'

export default function Skills() {
  return (
    <div 
    className="flex flex-col items-center gap-10 w-full min-h-[100vh] max-h-fit pt-20" 
    id="skills"
  >
    <h2 className="bg-zinc-500 dark:bg-zinc-800/20 text-white font-semibold sm:text-3xl capitalize rounded-[30px] py-3 px-5">
      skills
    </h2>
    <p 
      className="text-2xl bg-zinc-200 text-zinc-900 text-center w-[90vw] sm:w-[500px] h-fit *:m-10 p-3 border-2 border-zinc-400"
      style={{
        borderStartStartRadius: '50px 20px', 
        borderEndEndRadius: '50px 20px'
      }}
    >
      {`I'm a MERN-Stack Developer, with good basis in javascript, c and python. I'm aquainted with OOP and SOLID principles.`}
    </p>
    <div className="flex flex-wrap justify-evenly items-center dark:text-zinc-900 sm:w-[90vw] md:w-[80vw] gap-x-3 gap-y-10 w-full sm:p-4">
      <OneSkill 
        Icon={FaReact} 
        name='React' 
        className="text-sky-500 w-12 h-12 sm:w-20 sm:h-20"
      />
      <OneSkill 
        Icon={FaNodeJs} 
        name='Node.js' 
        className="text-green-900/90 w-12 h-12 sm:w-20 sm:h-20"
      />
      <OneSkill 
        Icon={SiExpress} 
        name='Express' 
        className="w-12 h-12 sm:w-20 sm:h-20" 
      />
      <OneSkill 
        Icon={SiMongodb} 
        name='MongoDB' 
        className="text-[#6bb23f] w-12 h-12 sm:w-20 sm:h-20"
      />
      <OneSkill 
        Icon={FaCss3Alt} 
        name='CSS3' 
        className="text-[#264de4] w-12 h-12 sm:w-20 sm:h-20" 
      />
      <OneSkill 
        Icon={FaHtml5} 
        name='HTML5' 
        className="text-orange-500 w-12 h-12 sm:w-20 sm:h-20"
      />
      <OneSkill 
        Icon={SiRedux} 
        name='Redux' 
        className="text-[#7248b6] w-16 h-16 sm:w-20 sm:h-20"
      />
      <OneSkill 
        Icon={RiTailwindCssFill} 
        name='Tailwind-css' 
        className="text-sky-600 w-16 h-16 sm:w-20 sm:h-20"
      />
      <OneSkill 
        Icon={FaGitAlt} 
        name='Git' 
        className="text-[#f05030] w-16 h-16 sm:w-20 sm:h-20"
      />
      <OneSkill 
        Icon={RiNextjsFill} 
        name='Nextjs' 
        className="text-black w-12 h-12 sm:w-20 sm:h-20"
      />
      <OneSkill 
        Icon={SiTypescript} 
        name='Typescript' 
        className="text-sky-700 w-10 h-10 sm:w-16 sm:h-16"
      />
      <OneSkill 
        Icon={BiLogoPostgresql} 
        name='postgresql' 
        className="text-cyan-700 w-12 h-12 sm:w-20 sm:h-20"
      />
    </div>
  </div>
)
}
