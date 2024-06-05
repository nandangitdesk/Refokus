import React, { useState } from 'react'
import Product from './Product'
import { motion } from "framer-motion"

const Products = () => {
    const products = [
        {
           title: "Arqitel",
           description : "With a continuous 3D animation, we showcase Arqitel approach and show how migration data translates into real estate." ,
           live:true,
           case:false
        },
        {
           title: "Cula",
           description : "We immersed ourselves in a 3D world we created to explain how Cula's platform collects data from carbon removal processes and converts them into carbon credit certificates." ,
           live:true,
           case:false
        },
        {
           title: "Layout Land",
           description : "An interactive learning game that can educate and entertain you on the basics of web layouts in Webflow." ,
           live:true,
           case:true
        },
        {
           title: "TTR",
           description : "We've created an interactive site using generative AI to allow users to engage with our thinking about Ai, industry trends and design." ,
           live:true,
           case:true
        },
]

    const [pos , setPos] = useState(0)

    const mover = (val)=>{
      setPos(val*23)
    }
    //matlab arr ka index 0 raha to pos ki val * index
   


  return (
    <div className='mt-36 relative'>
       {products.map((val,index)=>(
        <Product key={index} val={val} mover={mover} count={index} />
         
       ))}
       <div className='absolute w-full h-full top-0 pointer-events-none'>
         <motion.div initial={{y:pos , x: "-50%"}} animate={{y:pos+`rem`}} transition={{ease:[0.76, 0, 0.24, 1],duration: .6}} className='window absolute rounded-lg  w-[24rem] h-[23rem] left-[45%]  overflow-hidden'>
            <motion.div animate={{y: -pos+`rem`}}  transition={{ease:[0.76, 0, 0.24, 1],duration: .5}} className='h-full w-full  bg-violet-200 text-[15rem] text-center font-extrabold'> A
            </motion.div>
            <motion.div animate={{y: -pos+`rem`}}  transition={{ease:[0.76, 0, 0.24, 1],duration: .5}} className='h-full w-full   bg-violet-400 text-[15rem] text-center font-extrabold'>C</motion.div>
            <motion.div animate={{y: -pos+`rem`}}  transition={{ease:[0.76, 0, 0.24, 1],duration: .5}} className='h-full w-full   bg-violet-600 text-[15rem] text-center font-extrabold'>L</motion.div>
            <motion.div animate={{y: -pos+`rem`}}  transition={{ease:[0.76, 0, 0.24, 1],duration: .5}} className='h-full w-full   bg-violet-800 text-[15rem] text-center font-extrabold'>T</motion.div>
         </motion.div>
       </div>
    </div>
  )
}

export default Products