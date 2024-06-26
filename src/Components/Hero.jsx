import React from 'react';
import Progress from './Progress';

const Hero = () => {
  return (
    <section className='min-h-screen w-full bg-[#1A1A1A] flex flex-col items-center gap-10 relative'>
      <section className='h-[120px] w-[120px] rounded-full bg-orange-400 blur-3xl -z-6 fixed bottom-12 lg:ml-40'></section>
      <section className='h-[120px] w-[120px] rounded-full bg-green-400 blur-3xl -z-6 fixed top-60 right-10 lg:right-60'></section>
      <section className='h-[120px] w-[120px] rounded-full bg-cyan-500 blur-3xl -z-6 fixed top-20 left-10 lg:left-auto'></section>
      <Progress/>
    </section>
  )
}

export default Hero;
