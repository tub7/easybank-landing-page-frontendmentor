import React from 'react'

export default function Para() {
  return (
    <div className='mt-60 flex flex-col
    gap-y-6 h-56 justify-center '>
      <h1 className='text-4xl text-center w-3/4 mx-auto'>Next generation digital banking</h1>
      <p className='opacity-60 text-center w-11/12 mx-auto '>Take your financial life online. Your Easybank account will be a one-stop-shop for spending,
        saving,
        budgeting,investing,and much more.
      </p>
      <button className='text-white text-lg bg-gradient-to-r from-green-500 to-blue-500 w-1/2 mx-auto px-6 py-3 rounded-3xl'>Request Invite</button>
    </div>
  )
}
