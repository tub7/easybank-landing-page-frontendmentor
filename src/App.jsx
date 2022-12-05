import Nav from './comp/Nav'
import './App.css'
import Image from './comp/Image'
import Para from './comp/Para'
import WhySec from './comp/WhySec'
import Latest from './comp/Latest'
import Footer from './comp/Footer'
import { useState } from 'react'
import Modal from './comp/Modal'

function App() {
  const [active, setActive] = useState(true)
  active ? document.querySelector("body").style.overflow = "hidden" : document.querySelector("body").style.overflow = "unset"
  return (
    
    <div className='relative bg-slate-50'>
      <Nav setActive={setActive} active={active} />
      {active && <Modal />}
      <Image />
      <Para />
      <WhySec />
      <Latest />
      <Footer />
    </div>
    
  )
}

export default App
