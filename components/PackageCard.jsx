import Image from 'next/image'
import Link from 'next/link'
import React from 'react'


const PackageCard = ({data}) => {
  return (
    <div className='w-full border-0 rounded '>
      
     
       <Image
        src={data.image}
        alt={data.title}
        width={600}
        height={400}
        className="w-full h-[200px] object-cover rounded-2xl shadow-2xl z-0"
      />
       <div className='bg-white -mt-6 mx-2 p-4 shadow-xl rounded-xl flex flex-col gap-2 z-10 relative '>

        <h1 className=' line-clamp-1 text-xl  text-gray-600'>{data.title}</h1>
        <p className=' line-clamp-2 text-sm text-gray-600 '>{data.description}</p>
        
        <div className='flex justify-between my-2 '><p className=' '>₹{data.price}</p>
        <p className='  text-sm'>2 days, 1 night</p>
        </div>

      
        <div className='flex justify-end'>

             <Link href={`/tourpackages/${data.slug}`} passHref>
          
          <p className='bg-gray-950 rounded-2xl text-white px-6 text-sm py-1 w-fit cursor-pointer hover:bg-gray-800 transition-all ease-in-out duration-300'>View More</p>
          </Link>
          
          </div>
       

        
        </div>

    </div>
  )
}

export default PackageCard
