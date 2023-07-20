import React from 'react'
import { Link } from 'react-router-dom'

function PageTop({heading}) {
  return (
    <div className='flex pt-8 justify-between w-full items-center  pb-9 h-10 border-b-2 '>
        <div className="capitalize text-2xl pl-10 text-[#343C6A] font-bold"> {heading} </div>
        <Link to='/create-transaction' className='mr-10 text-sm rounded-xl text-white px-2 py-2 bg-[#2D60FF]'>+ Add Transaction</Link>
    </div>
  )
}

export default PageTop;