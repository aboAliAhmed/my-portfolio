import { motion } from 'framer-motion';
import { FaGithub } from 'react-icons/fa';
import { CiGlobe } from 'react-icons/ci';
import { IconType } from 'react-icons';


interface OneProjectProps {
  Image: string;
  Name: string;
  Github: string;
  Demo: string;
  className: string;
  Icons: IconType[];
}

const OneProject: React.FC<OneProjectProps> = ({
  Image,
  Name,
  Github,
  Demo,
  className,
  Icons,
}) => {

  return (
    <div
      className='relative block text-center w-[300px] h-[300px] sm:w-[500px] sm:h-[370px] mx-auto my-10'
    >
      <img 
        src={Image} 
        alt="" 
        className="bg-white absolute w-full h-full rounded-3xl mx-auto p-2 left-1/2 transform translate-x-[-50%]"
      />
      <div
        className={`${className}`}
      >
        <h2 className="bg-zinc-50 text-zinc-800 text-2xl w-fit rounded-[30px] p-3 z-[2]" >
          {Name}
        </h2>
        <div className="flex justify-around w-full mt-[-70px] sm:mt-[-130px]">
          <a 
            href={Github} 
            target="_blank"
            className="bg-zinc-50 text-zinc-800 flex items-center gap-2 font-semibold rounded-[30px] w-fit p-4 z-[2]"
          >
            Code
            <FaGithub className="bg-black text-white rounded-full w-6 h-6"/>
          </a>
          <a 
            href={Demo} 
            target="_blank" 
            className="bg-zinc-50 text-zinc-800 flex items-center gap-2 font-semibold rounded-[30px] w-fit p-4 z-[2]"
          >
            Demo
            <CiGlobe className="bg-zinc-950 text-white rounded-full w-6 h-6"/>
          </a>
        </div>
        <div className="bg-zinc-50 text-3xl flex justify-around w-[90%] rounded-3xl mx-5 py-2 z-[2]">
          {Icons.map((Icon, index) => (
            <Icon key={index} className="text-[#149eca]" />
          ))}
        </div>
      </div>
    </div>
  );
};

export default OneProject;
