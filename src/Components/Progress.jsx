
import React, { useState } from 'react';
import Progress from './Progress';

const Hero = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <section className='min-h-screen w-full bg-[#1A1A1A] flex flex-col items-center gap-10 relative'>
      <div className='fixed top-4 right-4 z-50'>
        <button
          className='text-white focus:outline-none'
          onClick={toggleMenu}
        >
          <svg
            className='w-8 h-8'
            fill='none'
            stroke='currentColor'
            viewBox='0 0 24 24'
            xmlns='http://www.w3.org/2000/svg'
          >
            {isOpen ? (
              <path
                strokeLinecap='round'
                strokeLinejoin='round'
                strokeWidth='2'
                d='M6 18L18 6M6 6l12 12'
              ></path>
            ) : (
              <path
                strokeLinecap='round'
                strokeLinejoin='round'
                strokeWidth='2'
                d='M4 6h16M4 12h16m-7 6h7'
              ></path>
            )}
          </svg>
        </button>
        {isOpen && (
          <div className='absolute right-0 mt-2 w-48 bg-white rounded-md shadow-lg z-50'>
            <ul className='py-1'>
              <li className='block px-4 py-2 text-gray-800 hover:bg-gray-200'>Menu Item 1</li>
              <li className='block px-4 py-2 text-gray-800 hover:bg-gray-200'>Menu Item 2</li>
              <li className='block px-4 py-2 text-gray-800 hover:bg-gray-200'>Menu Item 3</li>
            </ul>
          </div>
        )}
      </div>
      <section className='h-[120px] w-[120px] rounded-full bg-orange-400 blur-3xl -z-6 fixed bottom-12 lg:ml-40'></section>
      <section className='h-[120px] w-[120px] rounded-full bg-green-400 blur-3xl -z-6 fixed top-60 right-10 lg:right-60'></section>
      <section className='h-[120px] w-[120px] rounded-full bg-cyan-500 blur-3xl -z-6 fixed top-20 left-10 lg:left-auto'></section>
      <Progress />
    </section>
  );
};

export default Hero;
