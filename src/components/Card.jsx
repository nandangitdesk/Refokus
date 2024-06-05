import React from 'react'
import { IoIosArrowRoundForward } from "react-icons/io";

           
const Card = ({width,start,para,hoverClassName , hover}) => {
  return (
    <div className={`rounded-xl p-5  bg-zinc-800 ${width} ${hover} ${hoverClassName}  min-h-[30rem] flex flex-col justify-between`}  >
      <div className='w-full'>
      <div className='w-full flex items-center justify-between'>
        <h3>Some heading</h3>
        <IoIosArrowRoundForward />
      </div>
       <h1 className='text-3xl font-medium mt-6'>Some new Heading.</h1>
      </div>
      <div className='w-full '>
        {start && (
          <>
                  <h1 className='text-8xl font-bold tracking-normal leading-none'>Start a Project</h1>
                  <button className='rounded-full mt-3 py-2 px-5 border-[1px] border-zinc-500'>Contact us</button>
        </>
        )}
        {para && (
          <p className='text-sm text-zinc-500 mt-3'>Lorem ipsum dolor sit amet consectetur.</p>
        )}
      </div>
    </div>
  )
}

export default Card