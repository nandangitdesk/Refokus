import React from 'react'
import Card from './Card'

const Cards = () => {
  return (
    <div className='w-full'>
        <div className='max-w-screen-xl mx-auto py-20 flex gap-2 '>
            <Card width={"basis-1/3"} start={false} para={true} hover="hover:p-6 , transition-all hover:bg-zinc-700" />
            <Card width={"basis-2/3"} start={true} para={false} hoverClassName="hover:bg-violet-600" />
        </div>
    </div>
  )
}

export default Cards