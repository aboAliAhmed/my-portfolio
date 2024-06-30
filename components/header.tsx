import React from 'react';
import { ModeToggle } from '@/components/mode-toggle';
import { cn } from '@/lib/utils';

export default function Header() {
  return ( 
    <header className='bg-zinc-200 dark:bg-zinc-800/80 shadow-sm shadow-zinc-500 dark:shadow-zinc-800 flex justify-between items-center w-full h-fit p-3 pl-16 fixed z-10'>
      <div className='flex flex-col'>
        <a 
          href='#home'
          className='text-zinc-600 dark:text-zinc-400 w-fit font-bold' 
        >
          Ahmed 
          <span className='text-zinc-500 dark:text-zinc-300 ml-1'>
            Beasar
          </span>
        </a>
        <p className='tracking-[.38em] text-[7px] text-zinc-900 dark:text-zinc-300'>
          Frontend Developer
        </p>
      </div>
      <div className='flex gap-2'>
        <div className='text-zinc-800 dark:text-zinc-100 hidden sm:flex justify-between items-center gap-2 underline'>
          <a 
            href='#skills' 
            className='hover:bg-zinc-300/70 dark:hover:bg-zinc-800/20 p-1 rounded-md'
          >
            Skills
          </a>
          <a 
            href='#project' 
            className='hover:bg-zinc-300/70 dark:hover:bg-zinc-800/20 p-1 rounded-md'
          >
            Projects
          </a>
          <a 
            href='#contactUs' 
            className='hover:bg-zinc-300/70 dark:hover:bg-zinc-800/20 p-1 rounded-md'
          >
            Contact Us
          </a>
        </div>
        <ModeToggle />
      </div>
    </header>
  )
}
