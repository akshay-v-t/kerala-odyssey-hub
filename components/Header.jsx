import Link from 'next/link'
import React from 'react'

const Header = () => {
  return (
    <div className='flex justify-between bg-white shadow-xl p-4 rounded-3xl px-8 sticky top-2 z-50  max-w-[1360px] mx-auto '>

       <Link href='/'><p className='text-3xl font-semibold'>Kerala Odyssey Hub </p></Link> 

        <button className='bg-black text-white py-2 px-6 rounded-full hover:bg-gray-700 cursor-pointer transition-all  ease-in-out duration-300'>Get Started</button>


    </div>
  )
}

export default Header