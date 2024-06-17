import React from 'react';
import Bargraph from "../assets/Bargraph.png";
import Piechart from "../assets/Piechart.png";
import Report from "../assets/Report.png";
import Calender from "../assets/Calender.png";

const Progress = () => {
  return (
    <>
      <section className='flex flex-col justify-center items-center gap-6 p-4 lg:h-[982px] lg:w-[1007px]'>
        <section className='relative h-64 w-full lg:w-[1002px]'>
          <img src={Bargraph} alt='Bargraph' className='absolute inset-0 w-full h-full object-contain'/>
        </section>
        <section className='flex flex-col items-center lg:flex-row lg:justify-center lg:w-[1002px] lg:h-[581px] mt-7'>
          <section className='flex-shrink-0'>
            <img src={Piechart} alt='Pie Chart' className='w-full max-w-sm lg:max-w-none'/>
          </section>
          <section className='flex flex-col gap-3 mt-6 lg:mt-0 lg:ml-12'>
            <section className='relative h-64 w-full max-w-xs'>
              <img src={Calender} alt="Calendar" className='absolute inset-0 w-full h-full object-contain'/>
            </section>
            <section className='relative h-64 w-full max-w-xs'>
              <img src={Report} alt='Report' className='absolute inset-0 w-full h-full object-contain'/>
            </section>
          </section>
        </section>
      </section>
    </>
  );
}

export default Progress;
