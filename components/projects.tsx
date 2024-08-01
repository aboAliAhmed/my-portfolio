import { BiLogoMongodb, BiLogoPostgresql } from "react-icons/bi";
import { CiGlobe } from "react-icons/ci";
import { FaGithub, FaNodeJs, FaReact } from "react-icons/fa";
import { RiNextjsFill } from "react-icons/ri";
import { SiExpress, SiTailwindcss } from "react-icons/si";
import OneProject from "./one-project";
import { FcNext } from "react-icons/fc";

export default function Projects() {
  return (
    <div 
      className="flex flex-col gap-10 w-[80vw] mx-auto min-h-[100vh] max-h-fit py-20 my-5"
      id="project"
    >
      <h1 
        className="bg-zinc-500 text-white dark:bg-zinc-800/80 w-fit font-semibold sm:text-2xl text-center rounded-[30px] mx-auto py-3 px-6 hover:scale-110"
      >
        Sample of My Projects
      </h1>
      <div>
        <OneProject
          Image="/images/Screenshot at 2024-04-03 00-02-32.png"
          Name="Eyad-Store"
          Github="https://github.com/aboAliAhmed/eyad-store"
          Demo="https://eyad-store.onrender.com/"
          className="bg-gradient-to-r from-[#74963c70] via-[#ffffff70] to-[#639a0970] absolute flex flex-col justify-between items-center w-full h-full rounded-3xl opacity-0 hover:opacity-100 left-1/2 transform translate-x-[-50%] py-5 mb-5"
          Icons={[FaReact, SiExpress, FaNodeJs, BiLogoMongodb, SiTailwindcss]}
        />
        <OneProject
          Image="/images/disdis.png"
          Name="DisDis"
          Github="https://github.com/aboAliAhmed/DisDis"
          Demo="https://dis21.up.railway.app"
          className="bg-gradient-to-r from-[#cf9fffa6] via-[#ffffff70] to-[#8d31d770] absolute flex flex-col justify-between items-center w-full h-full rounded-3xl opacity-0 hover:opacity-100 left-1/2 transform translate-x-[-50%] py-5 mb-5"
          Icons={[RiNextjsFill, BiLogoPostgresql, SiTailwindcss]}
        />
      </div>
    </div>
  )
}
