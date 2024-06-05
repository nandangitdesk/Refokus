import React from 'react';

const Stripe = ({ val }) => {
  return (
    <div
      className='w-[16.66%] px-10 py-5 flex items-center justify-between 
                 border border-zinc-700 border-l-0 gap-4'
    >
      <img src={val.url} alt="" />
      <span className='font-semibold'>{val.number}</span>
    </div>
  );
};

export default Stripe;
