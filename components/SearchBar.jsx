import React from 'react'

const SearchBar = () => {
  return (
    <div className='w-full md:w-xl mt-5 '>

        <input type="text" 
        className='mx-auto flex w-full  border-gray-500  border-1 p-2 pl-5 rounded-full backdrop-blur-sm'
        placeholder= {`What's in your mind?` }/>
    </div>
  )
}

export default SearchBar