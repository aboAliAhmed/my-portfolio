import { IconType } from "react-icons";

interface OneSkillProps {
    Icon: IconType;
    name: string;
    className: string;
}
export default function OneSkill({Icon, name, className} : OneSkillProps) {
  return (
  <div className=" bg-gradient-skillBg animate-gradient w-28 h-28 sm:w-36 sm:h-36 flex flex-col justify-around items-center rounded-full py-2 hover:scale-110 ">
    <Icon className={`${className} hover:scale-110`}/>
    <span>{name}</span>
  </div>
  )
}
