'use client'
import Footer from '@/components/Footer'
import Header from '@/components/Header'
import PackagesGrid from '@/components/PackagesGrid'
import React, { useEffect, useState } from 'react'

const page = () => {

 
  return (
    <div>

        <Header/>

        <div className='flex justify-between mt-10 items-center'>

            <div className=' text-3xl'><h1>Our Packages</h1> <p className='text-sm text-gray-500 mt-2'>Home / Our Packages</p></div>

            <div className='border-1  h-auto rounded-full'>
                <input type="text" className='outline-0 px-4 mx-2' placeholder='Search for packages' />
                <button className='bg-black text-white py-2 px-6 rounded-full hover:bg-gray-700 cursor-pointer transition-all  ease-in-out duration-300 '>Search</button>
            </div>




        </div>

        <PackagesGrid/>

        <Footer/>


    </div>
  )
}

export default page