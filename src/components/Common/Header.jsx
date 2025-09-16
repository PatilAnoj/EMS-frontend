import React from 'react'

const Header = () => {
  return (
    <div className='text-white flex items-end justify-between'>
        <h1 className='text-2xl font-medium'>Hello, <br/> <span className='text-3xl font-semibold'>Anuj 👋</span></h1>
        <button className='bg-red-600 text-white text-lg font-medium px-4 py-2 rounded-md cursor-pointer'>LogOut</button>
    </div>
  )
}

export default Header;