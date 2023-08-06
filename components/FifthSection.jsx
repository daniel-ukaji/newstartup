import React from 'react'
import localFont from 'next/font/local';
import Webflow from '@/public/Webflow.png';
import Google from '@/public/Google.png';
import Adobe from '@/public/Adobe.png';
import Image from 'next/image';
import { Button } from './ui/button';

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

function FifthSection() {
  return (
    <div className='flex flex-col justify-center pb-10 mt-20 max-w-6xl mx-auto mb-10 bg-[#212121]'>
        <h1 className={` ${craftworkSemiBold.className} mb-5 text-center text-3xl mt-14 text-white`}>Let us grow your business,<br /> together.</h1>
        <div className='flex justify-center items-center mt-5'>
            <Button className={`${craftworkBold.className} bg-[#D1EE1E] text-black`}>Get Started</Button>
        </div>
    </div>
  )
}

export default FifthSection