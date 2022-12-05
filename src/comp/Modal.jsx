import React from 'react'

export default function Modal() {
  return (
    
      <div className="relative">
        <div className="absolute h-screen top-0 w-screen z-50 overflow-hidden bg-gradient-to-b from-black  flex justify-center">
          <div className="w-11/12 h-1/2 bg-white rounded-xl mt-8 flex flex-col gap-y-7">
            <p className="w-12 mx-auto mt-6 text-center text-[#2D314D] opacity-75 text-xl">Home</p>
            <p className="w-12 mx-auto  text-xl text-center text-[#2D314D] opacity-75">About</p>
            <p className="w-12 mx-auto  text-xl text-center text-[#2D314D] opacity-75">Contact</p>
            <p className="w-12 mx-auto  text-xl text-center text-[#2D314D] opacity-75">Blog</p>
            <p className="w-12 mx-auto  text-xl text-center text-[#2D314D] opacity-75">Careers</p>
          </div>
        </div>
      </div>
    
  )
}
