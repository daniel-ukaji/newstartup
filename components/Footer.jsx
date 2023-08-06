import React from 'react'
import localFont from 'next/font/local';


const craftworkSemiBold = localFont({
    src: [
      
      {
        path: '../public/fonts/CraftworkGrotesk-SemiBold.ttf',
        variable: '--font-craftwork-bold'
      },
      
    ],
  })

  const craftworkRegular = localFont({
    src: [
      
      {
        path: '../public/fonts/CraftworkGrotesk-Regular.ttf',
        variable: '--font-craftwork-regular'
      },
      
    ],
  })
  
  const craftworkBold = localFont({
    src: [
      
      {
        path: '../public/fonts/CraftworkGrotesk-Bold.ttf',
        variable: '--font-craftwork-bold'
      },
      
    ],
  })
  
  const craftworkMedium = localFont({
    src: [
      
      {
        path: '../public/fonts/CraftworkGrotesk-Medium.ttf',
        variable: '--font-craftwork-medium'
      },
      
    ],
  })

  function Footer() {
    return (
      <div>
        <div className='grid grid-cols-1 md:grid-cols-4 gap-y-10 py-14 text-gray-600 max-w-6xl mx-auto'>
          <div className={` ${craftworkSemiBold.className} space-y-4 text-lg text-gray-800`}>
            <h1 className='font-bold'>Useful rewards, easy<br /> banking, designed for<br /> you. Control Bank.</h1>
          </div>
          <div className='md:col-span-2 space-y-4 text-xs text-gray-800'>
            <h5 className='font-bold'>Company</h5>
            <p>Checking</p>
            <p>Payments</p>
          </div>
          <div className='space-y-4 text-xs text-gray-800'>
            <h5 className='font-bold'>Contact</h5>
            <p>hello@control.com</p>
            <p>(310) 455-1122</p>
          </div>
        </div>
      </div>
    )
  }
  
  export default Footer;
  