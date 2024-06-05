import React from 'react'

const Footer = () => {
  return (
    <div className='w-full'>
        <div className='max-w-screen-xl mx-auto py-10 flex gap-20 '>
            <div className='basis-1/2 '>
                <h1 className='text-[11rem] font-semibold leading-none tracking-tight  '>Refokus.</h1>
                {["Privacy Policy","Cookie Policy","Impressum","Terms","Webflow Agency"].map((elem,index)=>(
                    <a key={index} className='mr-10  text-sm text-zinc-600 gap-10'>{elem}</a>
                ))}
            </div>
            <div className='basis-1/2 flex justify-end items-end'>
                <img className='w-40 mb-5' src="https://assets-global.website-files.com/6334198f239547d0f9cd84b3/6637ba0d8481b4339b1cda4f_Frame%2048097733.svg" alt="" />
            </div>
        </div>
    </div>
  )
}

export default Footer