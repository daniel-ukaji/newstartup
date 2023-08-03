import React from 'react'

function Hero() {
  return (
    <div className='max-w-5xl mx-auto border-b pb-10'>
        <div className='mt-20'>
            <h1 className='font-extrabold text-5xl leading-tight'>Kickstart your<br /> collaborative app</h1>
            <p className='text-xl mt-4 leading-snug'>Use the Liveblocks Starter Kit to build your<br /> document-based collaborative app in minutes.</p>
            <div className='flex space-x-3 mt-7'>
                <button className='py-2 px-5 border rounded-md font-semibold'>Sign in</button>
                <button className='py-2 px-5 border rounded-md bg-[#121215] text-white font-semibold'>Learn More</button>
            </div>
        </div>
    </div>
  )
}

export default Hero