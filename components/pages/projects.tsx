import { BiLogoMongodb, BiLogoPostgresql } from "react-icons/bi";
import { FaNodeJs, FaReact } from "react-icons/fa";
import { RiNextjsFill } from "react-icons/ri";
import { SiExpress, SiTailwindcss } from "react-icons/si";
import OneProject from "@/components/one-project";
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
      <div className="max-widt">
        <div className="">
          <OneProject
            images={[
              {url: "/images/eyad/store-1.png", alt: "Eyad-store-1"}, 
              {url: "/images/eyad/store-2.png", alt: "Eyad-store-2"}, 
              {url: "/images/eyad/store-3.png", alt: "Eyad-store-3"}, 
              {url: "/images/eyad/store-4.png", alt: "Eyad-store-4"}, 
              {url: "/images/eyad/store-5.png", alt: "Eyad-store-5"}, 
              {url: "/images/eyad/store-6.png", alt: "Eyad-store-6"}, 
              {url: "/images/eyad/store-7.png", alt: "Eyad-store-7"}, 
            ]}
            Github="https://github.com/aboAliAhmed/eyad-store"
            Demo="https://eyad-store.onrender.com/"
          />
        </div>
        <OneProject
          images={[
            {url: "/images/disdis/disdis-1.png", alt: "Chat-app-1"},
            {url: "/images/disdis/disdis-2.png", alt: "Chat-app-2"},
            {url: "/images/disdis/disdis-3.png", alt: "Chat-app-3"}
          ]}
          Github="https://github.com/aboAliAhmed/DisDis"
          Demo="https://dis-dis-git-main-aboaliahmeds-projects.vercel.app/"
        />
      </div>
    </div>
  )
}
