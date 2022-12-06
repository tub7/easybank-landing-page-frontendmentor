import React from 'react'

export default function Para() {
  return (
    <div className='mt-60 lg:mt-40 flex flex-col
    gap-y-6 h-56 justify-center shrink lg:ml-40'>
      <h1 className='text-4xl lg:text-5xl xl:text-6xl text-center w-3/4 mx-auto lg:mx-0 lg:text-left '>Next generation digital banking</h1>
      <p className='opacity-60 lg:w-2/3 lg:text-left text-center w-11/12 mx-auto lg:mx-0 '>Take your financial life online. Your Easybank account will be a one-stop-shop for spending,
        saving,
        budgeting,investing,and much more.
      </p>
      <button className='text-white text-lg bg-gradient-to-r from-green-500 to-blue-500 w-1/2 mx-auto lg:mx-0 px-6 py-3 rounded-3xl xl:w-1/3 '>Request Invite</button>
    </div>
  )
}
