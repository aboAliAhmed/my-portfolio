"use client";

import { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import { IoIosSend } from 'react-icons/io';
import { toast, ToastContainer } from 'react-toastify';
import { Oval } from 'react-loader-spinner';
import 'react-toastify/dist/ReactToastify.css';

export default function ContactUs() {
  const form = useRef<HTMLFormElement | null>(null);
  const [sending, setSending] = useState(false);

  const sendEmail = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!form.current) return;

    setSending(true);

    emailjs
      .sendForm(
        process.env.NEXT_PUBLIC_SERVICE_ID || '', 
        process.env.NEXT_PUBLIC_TEMPLATE_ID || '', 
        form.current, 
        process.env.NEXT_PUBLIC_USER_ID || ''
      )
      .then(
        () => {
          toast.success('Message sent successfully!', { toastId: 'success-toast'});
          setSending(false);
        },
        () => {
          toast.error('Failed to send the message, please try again later.', { toastId: 'error-toast'});
          setSending(false);
        }
      );
  };

  return (
    <div className="min-h-[95vh] max-h-fit pt-20" id="contactUs">
      <ToastContainer />
      <p className="bg-zinc-500 dark:bg-zinc-800/80 text-white text-2xl w-fit rounded-[40px] mx-auto p-3 hover:scale-110">
        You can contact me on
      </p>
      <form ref={form} onSubmit={sendEmail} className="p-5 flex flex-col gap-4 w-fit mt-24 mx-auto">
        <div className="flex justify-between items-center gap-4">
          <input 
            type="text" 
            name="name"
            placeholder="Name"
            className="relative border-2 border-zinc-600 outline-none sm:w-[500px] rounded-xl py-3 pl-2 leading-10 placeholder:text-stone-500
            dark:placeholder:text-stone-100"
          />
          <label className="bg-zinc-600 text-center text-white w-20 p-2 rounded-xl">  
            Name
          </label>
        </div>
        <div className="flex justify-between items-center gap-4">
          <input 
            type="email" 
            name="email"
            placeholder="Email"
            className="relative border-2 border-zinc-600 outline-none sm:w-[500px] w-full rounded-xl py-3 pl-2 leading-10 placeholder:text-stone-500 dark:placeholder:text-stone-100"
          />
          <label className="bg-zinc-600 text-center text-white w-20 p-2 rounded-xl">  
            Email
          </label>
        </div>
        <div className="flex justify-between items-center relative w-full min-w-[200px]">
          <textarea
            name='message'
            className="peer relative border-2 border-zinc-600 outline-none sm:w-[500px] w-full h-52 rounded-xl py-3 pl-2 leading-10 !resize-none placeholder:text-stone-500 dark:placeholder:text-stone-100"
            placeholder="Content"
          />
          <label className="bg-zinc-600 text-white w-20 p-2 rounded-xl ml-4">
            Message
          </label>
        </div>
        <button
          className={`flex justify-center gap-2 text-md w-full select-none rounded-lg ${sending ? 'bg-stone-600' : 'bg-stone-900'}  py-3 px-6 text-center align-middle font-sans font-bold uppercase text-white shadow-md shadow-gray-900/10 transition-all hover:shadow-lg hover:shadow-gray-900/20 active:opacity-[0.85] disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none dark:bg-zinc-200 dark:text-stone-800 hover:bg-stone-900/90`}
          type="submit"
        >
          {sending ?
            <Oval
              height="30"
              width="30"
              color="#000"
              ariaLabel="loading"
            /> : (
              <div className="flex">
                Send
                <IoIosSend className='text-2xl ml-1' />
              </div>
            )}
        </button>
      </form>
    </div>
  );
}
