import Link from 'next/link';
import React from 'react';
import { AiOutlineMail } from 'react-icons/ai';
import { BsFillPersonLinesFill } from 'react-icons/bs';
import { FaGithub, FaLinkedinIn } from 'react-icons/fa';

const Main = () => {
  return (
    <div id='home' className='w-full h-screen text-center '>
      <div className='max-w-[1240px] w-full h-full mx-auto p-2 flex justify-center items-center'>
        <div>
          <p className='bg-gradient-to-tl from-cyan-600 to-rose-500 bg-clip-text text-transparent uppercase text-sm tracking-widest text-gray-600'>
            LET&#39;S BUILD SOMETHING TOGETHER
          </p>
          <h1 className='py-4 bg-gradient-to-t from-cyan-600 to-rose-500 bg-clip-text text-transparent'>
            Hi, I&#39;m <span className='bg-gradient-to-b from-teal-300 to-orange-300 bg-clip-text text-transparent'> Shreyansh</span>
          </h1>
          <h1 className='py-2 bg-gradient-to-t from-cyan-600 to-rose-500 bg-clip-text text-transparent'>A Front-End Web Developer</h1>
          <p className='py-4 bg-gradient-to-t from-cyan-600 to-rose-500 bg-clip-text text-transparent sm:max-w-[70%] m-auto'>
            I’m focused on building responsive front-end web applications
            integrating back-end technologies.
          </p>
          <div className='flex items-center justify-between max-w-[330px] m-auto py-4 '>
            <a
              href='https://www.linkedin.com/in/shreyansh-pandey-019706213/'
              target='_blank'
              rel='noreferrer'
            >
              <div className='rounded-full shadow-lg shadow-black-100 p-6 cursor-pointer hover:scale-110 ease-in duration-300 bg-gradient-to-b from-teal-300 to-orange-300'>
                <FaLinkedinIn />
              </div>
            </a>
            <a
              href='https://github.com/shreyansh232'
              target='_blank'
              rel='noreferrer'
            >
              <div className='rounded-full shadow-lg shadow-black-100 p-6 cursor-pointer hover:scale-110 ease-in duration-300 bg-gradient-to-b from-teal-300 to-orange-300'>
                <FaGithub />
              </div>
            </a>
            <Link href='/#contact'>
              <div className='rounded-full shadow-lg shadow-black-100 p-6 cursor-pointer hover:scale-110 ease-in duration-300 bg-gradient-to-b from-teal-300 to-orange-300'>
                <AiOutlineMail />
              </div>
            </Link>
            <Link href='/resume'>
              <div className='rounded-full shadow-lg shadow-black-100 p-6 cursor-pointer hover:scale-110 ease-in duration-300 bg-gradient-to-b from-teal-300 to-orange-300'>
                <BsFillPersonLinesFill />
              </div>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Main;
