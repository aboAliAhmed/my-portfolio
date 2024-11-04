"use client"

import { FaGithub } from 'react-icons/fa';
import { CiGlobe } from 'react-icons/ci';
import { ArrowBigLeft, ArrowBigRight, Circle, CircleDot} from 'lucide-react';
import { useState } from 'react';

interface OneProjectProps {
  images: {
    url: string,
    alt: string
  }[];
  Github: string;
  Demo: string;
}

const OneProject: React.FC<OneProjectProps> = ({
  images,
  Github,
  Demo,
}: OneProjectProps) => {
  const [imageIndex, setImageIndex] = useState(0);

  function goLeft () {
    setImageIndex(index => { 
      if (index === 0) return images.length - 1;
      return index - 1;
    }) 
  }
    
  function goRight () {
    setImageIndex(index => { 
      if (index === images.length - 1) return 0;
      return index + 1;
    }) 
  }


  return (
    <div
      className='relative block bg-rose-600/20 text-center w-[75vw] h-[230px] sm:w-[500px] sm:h-[320px] mx-auto my-10 p-2 rounded'
    >
      <div className='w-full h-full flex overflow-hidden'>
        {images.map((image, i) => (
          <img 
            key={image.url}
            src={image.url}
            alt={image.alt}
            aria-hidden={imageIndex !== i}
            style={{translate: `${-100 * imageIndex}%`, transition: "translate 300ms ease-in"}}
            className="object-cover w-[75vw] h-[200px] sm:w-[500px] sm:h-[240px] rounded block grow shrink phScroll" 
          />
        ))}
      </div>
      <button 
        onClick={goLeft}
        aria-label='Left Button'
        className='image-slider-btn absolute block p-4 cursor-pointer w-8 h-full z-10 top-0 left-0 bg-black/20 hover:bg-black/70 transition-colors duration-200  focus-visible:bg-black/20'
        >
        <ArrowBigLeft className='stroke-white relative right-[10px] hover:animate-arow focus-visible:animate-arow' />
      </button>
      <button 
        onClick={goRight}
        aria-label='Right Button'
        className='image-slider-btn absolute block p-4 cursor-pointer w-8 h-full z-10 top-0 right-0 bg-black/20 hover:bg-black/70 transition-colors duration-200 focus-visible:bg-black/20'
      >
        <ArrowBigRight className='stroke-white relative right-[10px] hover:animate-arow focus-visible:animate-arow' />
      </button>
      <div className="absolute flex justify-between gap-1 bottom-0 left-0 px-6 w-full text-zinc-800">
        <a 
          href={Github} 
          target="_blank"
          className="bg-zinc-100/10 flex items-center font-semibold rounded-full w-fit p-4 z-[2]"
        >
          <span className='p-0'>&lt;</span>
          <span>...</span>
          <span>&gt;</span>
        </a>
        <a 
          href={Demo} 
          target="_blank" 
          className="bg-zinc-100/10 flex items-center font-semibold rounded-[30px] w-fit p-4 z-[2]"
        >
          <CiGlobe className="bg-transparent text-black rounded-full w-6 h-6"/>
        </a>
      </div>
      <div className='absolute flex left-1/2 translate-x-[-50%] translate-y-[-25px]'>
        {images.map((_, index) => (
          <button
            key={index}
            style={{transition: 'scale 100ms ease-in-out'}}
            onClick={() => setImageIndex(index)}
            aria-label={`View Image ${index + 1}`}
            className='block cursor-pointer w-4 h-4'
          >
            {index === imageIndex 
              ? <CircleDot aria-hidden className='fill-zinc-300 dark:fill-zinc-600 w-full h-full focus-visible:scale-110' /> 
              : <Circle aria-hidden className='fill-zinc-200 dark:fill-zinc-700 w-full h-full'/>
            }
          </button>
        ))}
      </div>
    </div>
  );
};

export default OneProject;
