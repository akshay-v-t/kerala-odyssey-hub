"use client"

import React, { useEffect, useState } from 'react'
import PackageCard from './PackageCard'

const PackagesGrid = () => {

  const [tourPackages, setTourPackages] = useState([]);

  useEffect(()=>{
    fetch('/api/tourPackages')
    .then((res)=> res.json())
    .then((data)=>{ setTourPackages(data); console.log('Fetched Packages:', data)})
   
    .catch((err)=> console.error('Failed to fetch packages' , err))
    


  },[])

  
  return (
    <div className='max-w-[1360px] mx-auto mt-8'>
        <h1 className='text-3xl  flex justify-center mb-10'>Explore our Packages</h1>

        <div className='grid grid-cols-1  md:grid-cols-2 lg:grid-cols-4 gap-8'>
          
          {
            tourPackages.map((pkg)=>{
              return <PackageCard key={pkg.id} data={pkg} />
            })
          }

          





        </div>

    </div>
  )
}

export default PackagesGrid