import React from 'react';
import { ModeToggle } from '@/components/mode-toggle';
import { cn } from '@/lib/utils';
import { Arizonia, Dancing_Script, Great_Vibes, Italianno, Norican, Whisper } from "next/font/google";


const font = Arizonia({ subsets: ["latin"], weight: ["400"] });

export default function Header() {
  return ( 
    <header className='bg-zinc-200/85 dark:bg-zinc-800/85 shadow-sm shadow-zinc-500 dark:shadow-zinc-800 flex justify-between items-center w-full h-fit p-3 pl-16 fixed z-10'>
      <div className='flex flex-col'>
        <a 
          href='#home'
          className={cn(font.className, "text-zinc-900 dark:text-zinc-100 w-fit text-3xl")}
        >
          Ahmed 
          <span className='text-gray-700 dark:text-zinc-300 ml-1'>
            Beasar
          </span>
        </a>
        <p className='tracking-[.50em] text-[9px] text-zinc-900 dark:text-zinc-300'>
          Frontend Developer
        </p>
      </div>
      <div className='flex gap-2'>
        <div className='text-zinc-800 dark:text-zinc-100 hidden sm:flex justify-between items-center gap-2 underline'>
          <a 
            href='#skills' 
            className='hover:bg-zinc-300 dark:hover:bg-zinc-600/50 p-1 rounded-lg hover:scale-105'
          >
            Skills
          </a>
          <a 
            href='#project' 
            className='hover:bg-zinc-300 dark:hover:bg-zinc-600/50 p-1 rounded-lg hover:scale-105'
          >
            Projects
          </a>
          <a 
            href='#contactUs' 
            className='hover:bg-zinc-300 dark:hover:bg-zinc-600/50 p-1 rounded-lg hover:scale-105'
          >
            Contact Us
          </a>
        </div>
        <ModeToggle />
      </div>
    </header>
  )
}
