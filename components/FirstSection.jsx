import React from 'react'
import localFont from 'next/font/local';
import Webflow from '@/public/Webflow.png';
import Google from '@/public/Google.png';
import Adobe from '@/public/Adobe.png';
import Image from 'next/image';
import YellowCard from '@/public/YellowCard.png'

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

function FirstSection() {
  return (
    <div className=' max-w-6xl mx-auto pb-10 mt-20'>
        <h1 className={` ${craftworkSemiBold.className} mb-8 text-center text-3xl`}>Get peace of mind when<br /> you partner with us</h1>
        <div className='flex justify-between items-center mt-10'>
            <div className=''>
                <h1 className={` ${craftworkMedium.className} font-bold text-4xl `}>Flexible physical card,<br /> ready when you are.</h1>
                <p className={` ${craftworkRegular.className} text-lg mt-4 leading-snug`}>Our digital account numbers keep you from<br /> digging in your wallet, but it is readily available<br /> to order when you need it.</p>
                <div className='flex space-x-3 mt-7'>
                    <button className={` ${craftworkMedium.className} py-2 px-5 border rounded-md bg-[#212121] text-white font-semibold`}>Get Started</button>
                </div>
            </div>
            <div className='m-0 p-0 w-1/2'>
                <Image alt='' src={YellowCard}  objectFit='cover' className=''   />
            </div>
        </div>
    </div>
  )
}

export default FirstSection