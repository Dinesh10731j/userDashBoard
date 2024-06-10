import React from 'react'
import Bargraph from "../assets/Bargraph.png"
const Progress = () => {
  return (
   <>
    <section className='h-[263px] w-[1000px] ml-40'>
    <img src={Bargraph} className='absolute'/>

    </section>

<section className='flex flex-col flex-wrap  justify-center items-center'>
    <section className='text-white'>This is section 1 </section>
    <section className='text-white'>Thi is sectopn 2</section>
</section>

   </>
  )
}

export default Progress