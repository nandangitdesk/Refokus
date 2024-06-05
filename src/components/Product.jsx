import React from 'react'
import Button from './Button'

const Product = ({val,mover,count}) => {
  return (
    <div onMouseEnter={()=>{mover(count)}} className='w-full h-[23rem]   text-white'>
       <div className='max-w-screen-xl  mx-auto flex items-center justify-between'>
        
            <h1 className='text-6xl font-medium'>{val.title}</h1>
            <div className='w-1/3'>
                <p className='mb-10'>{val.description}</p>
             <div className='flex items-center gap-6'>
               {val.live ? <Button title='Live Website'/> : ""}    
               {val.case ? <Button title='Case Study'/> : ""}    
            </div>   
            </div>
        
       </div>
    </div>
  )
}

export default Product