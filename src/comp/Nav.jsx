import React from 'react'
import logo from '../assets/images/logo.svg'
import ham from "../assets/images/icon-hamburger.svg"
import close from "../assets/images/icon-close.svg"


export default function Nav({active, setActive}) {
  
  return (
    <div className="relative z-20 bg-white flex flex-row justify-between ">
      <img src={logo} className="p-7" />
      <img src={active ? close : ham} className="p-7" onClick={() => {setActive(p => !p)}} />
    </div>
  )
}
