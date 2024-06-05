import React from 'react';
import { motion } from 'framer-motion';

const Marquee = ({ imgUrl }) => {
  return (
    <div className='relative overflow-hidden py-5'>
      <motion.div
        className='flex items-center gap-20 whitespace-nowrap'
        animate={{ x: '-100%' }}
        transition={{
          repeat: Infinity,
          ease: 'linear',
          duration: 20, // Adjust the duration to control the speed of the animation
        }}
      >
        {imgUrl.map((img, index) => (
          <img key={index} src={img} className='w-[6vw] flex-shrink-0' />
        ))}
        {imgUrl.map((img, index) => (
          <img key={index} src={img} className='w-[6vw] flex-shrink-0' />
        ))}
      </motion.div>
      <div className="absolute top-0 left-0 h-full w-[89%] pointer-events-none shadow-left "></div>
      <div className="absolute top-0 right-0 h-full w-[89%] pointer-events-none shadow-right"></div>
    </div>
  );
};

export default Marquee;
