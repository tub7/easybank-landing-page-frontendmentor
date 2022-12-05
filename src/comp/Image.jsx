import React from 'react'
import bg from '../assets/images/bg-intro-mobile.svg'
import fg from '../assets/images/image-mockups.png'

export default function Image() {
  return (
    <div className="relative h-32">
      <img src={bg} alt="" className="absolute -top-7 right-0 w-full" />
      <img src={fg} alt="" className='absolute -top-full right-0 z-10'/>
    </div>
  )
}
