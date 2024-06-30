import { IconType } from "react-icons";

interface OneSkillProps {
    Icon: IconType;
    name: string;
    className: string;
}
export default function OneSkill({Icon, name, className} : OneSkillProps) {
  return (
  <div className="bg-gradient-to-r from-zinc-400 via-white to-zinc-400 w-28 h-28 sm:w-36 sm:h-36 flex flex-col justify-around items-center rounded-full py-2">
    <Icon className={`${className}`}/>
    <span>{name}</span>
  </div>
  )
}
