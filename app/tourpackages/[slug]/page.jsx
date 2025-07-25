import Footer from '@/components/Footer'
import Header from '@/components/Header'
import tourPackages from '@/data/tourPackages'
import Image from 'next/image'

export  async function generateStaticParams(){
  return tourPackages.map((pkg)=> ({
    slug: pkg.slug,
  }))
}

export default async function  PackageDetailPage({params}){

  const slug= params.slug;

  const packageData = tourPackages.find((pkg)=> pkg.slug === slug)

  if(!packageData){
    return <div>Package not found</div>
  }

  return(

    <>
    <Header/>

    <div className='flex gap-5 md:flex-row flex-col' >

      <div className=' bg-white mt-10 shadow-2xl  rounded-2xl md:w-5xl' >

        <Image src={packageData.image} alt={packageData.title}   width={600} height={200} className=' w-full object-cover h-80 rounded-2xl border-0' />

        <div className='p-5 flex flex-col gap-4'>

           <h1 className='text-3xl my-3 '>{packageData.title}</h1>

             <h2 className='text-2xl'>Iternary</h2>
             <ul className='my-4'>
              {
                Object.entries(packageData.itinerary).map(([day, description])=>{

                   const dayNumber = day.replace(/day/i , 'Day ')

                  return(
                     <li key={day}>

                    <strong>{dayNumber}: </strong> {description}

                  </li>

                  )

                 
                 
               })
              }
             </ul>

    

           
        
            <h2 className='text-2xl'>Travel Arrangements</h2>

           <p> {
              packageData.travelArrangements
            }</p>


            <h2 className='text-2xl'>Food</h2>
            <p>{
              packageData.food
            }</p>
            <h2 className='text-2xl'>Accommodation</h2>
            <p>{packageData.accommodation}</p>

            <h2 className='text-2xl'>Activities</h2>
            <p>{packageData.activities}</p>

            <h2 className='text-2xl'>Inclusions</h2>
            <p>{packageData.inclusions}</p>
            <h2 className='text-2xl'>Exclusions</h2>
            <p>{packageData.exclusions}</p>





          
        </div>
      
       


      </div>

      <div className=' bg-white mt-10 shadow-2xl p-5 rounded-2xl md:w-xl h-fit sticky top-30  '>

        <div className='border-1 border-gray-600 p-4 mb-4 rounded-xl'>

          <p className='mb-3'>Duration: {packageData.duration}</p>

          <p className='text-xs text-gray-500'>Starting From </p>
          <div className='flex gap-2 items-baseline'>

            <p className='text-2xl'>₹ {packageData.price}/-</p> <p className='line-through text-sm text-gray-500'>₹1299/-</p>

          </div>

          
          <p className='text-xs text-gray-500'>Per Person on twin sharing</p>

        </div>

        <div className='  w-full '>

           <p className='bg-black text-white py-2 text-center w-full rounded-full text-xl mb-4 '>Get Custom Quotes</p>



        </div>

       

      </div>


    </div>
    

    <Footer/>
    </>

  )
}