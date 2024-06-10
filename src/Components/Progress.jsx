import React from 'react'
import Bargraph from "../assets/Bargraph.png";
import Piechart from "../assets/Piechart.png";
import Report from "../assets/Report.png";
import Calender from "../assets/Calender.png";
const Progress = () => {
  return (
   <>
   <section className='h-[982px] w-[1007px] flex flex-col justify-center items-center gap-6 '>
   <section className='h-[263px] w-[1002px] ml-40 relative'>
    <img src={Bargraph} alt='Bargraph' className='absolute'/>

    </section>
    <section className='flex flex-col  ml-40 mt-7 w-[1002px] h-[581px]'>
<section className='flex flex-row '>
<section className='text-white'>

    <img src={Piechart}/>
</section>
<section className='flex flex-col gap-3 '>
    <section  className="relative h-[283px] w-[256px] ml-12">
        <img src={Calender} alt="Calender" className='absolute'/>
    </section>
    <section className='relative h-[283px] w-[256px] ml-12'>
        <img src={Report} alt='Report' className='absolute' />
    </section>
</section>

</section>
    </section>
    </section>
   </>
  )
}

export default Progress