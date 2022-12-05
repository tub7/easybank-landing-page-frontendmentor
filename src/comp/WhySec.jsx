import React from 'react'
import first from '../assets/images/icon-online.svg'
import second from '../assets/images/icon-budgeting.svg'
import third from '../assets/images/icon-api.svg'

export default function WhySec() {
  return (
    <div className='mt-40 flex justify-center flex-col
    gap-y-6 mb-40 '>
      <h1 className='text-center text-4xl w-2/3 mx-auto'>Why choose Easybank?</h1>
      <p className='opacity-60 text-center w-11/12 mx-auto '>We leverage Open Banking to turn your bank account into your financial hub. Control your finances like never before.</p>
      <img src={first} alt="" className='w-16 mx-auto' />
      <h1 className='text-center text-4xl w-2/3 mx-auto'>Online Banking</h1>
      <p className='opacity-60 text-center w-11/12 mx-auto '>Our modern web and mobile applications allow you to keep track of your finances wherever you are in the world</p>
      <img src={second} alt="" className='w-16 mx-auto' />
      <h1 className='text-center text-4xl w-2/3 mx-auto'>Simple Budgeting</h1>
      <p className='opacity-60 text-center w-11/12 mx-auto '>See exactly where your money goes each month. Receive notifications when you're close to your hitting limits. </p>
      <img src={third} alt="" className='w-16 mx-auto' />
      <h1 className='text-center text-4xl w-2/3 mx-auto'>Open Api</h1>
      <p className='opacity-60 text-center w-11/12 mx-auto '>Manage your savings, investments, pension, and much more from one account. Tracking your money has never been easier.</p>

    </div>
  )
}
