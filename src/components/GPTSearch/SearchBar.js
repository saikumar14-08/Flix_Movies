import React from 'react'

const SearchBar = () => {
  return (
    <div className='pt-[15%]'>
      <form className='bg-black rounded-md grid grid-cols-12 p-4 w-[50%] '>
        <input className='col-span-9 p-2' type='text' placeholder='Enter your prompt here' />
        <button className='col-span-3 bg-red-600 text-white mx-4 rounded-md' >Submit</button>
      </form>
    </div>
  )
}

export default SearchBar