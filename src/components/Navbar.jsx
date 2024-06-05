import React from 'react'
import Button from './Button'

const Navbar = () => {
  return (
    <div className='max-w-screen-xl mx-auto py-5 flex items-center border-b-[1px] border-zinc-700 justify-between'>
     <div className='navLeft flex items-center justify-center'>
     <img src="https://assets-global.website-files.com/6334198f239547d0f9cd84b3/63349803431f1562dccf1802_refokus%20logo.svg" alt="Refokus logo" />
      <div className="links flex ml-20 gap-14">
        {["Home", "Work", "Culture", "", "News"].map((elem, index) => (
          <a key={index} className='text-sm  flex items-center gap-1' href='#'>
            {elem.length === 0 ? (
              <span className='w-[2px] h-6 bg-zinc-800'></span>
            ) : (
              <>
                {index === 1 && (
                  <span style={{ boxShadow: "0 0 0.45em #00FF19" }} className='inline-block w-1 h-1 rounded-full bg-green-400'></span>
                )}
                {elem}
              </>
            )}
          </a>
        ))}
      </div>
     </div>

     <Button/>
    </div>
  )
}

export default Navbar
