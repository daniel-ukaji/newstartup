import React from 'react'
import localFont from 'next/font/local';
import Webflow from '@/public/Webflow.png';
import Google from '@/public/Google.png';
import Adobe from '@/public/Adobe.png';
import Image from 'next/image';

const craftworkSemiBold = localFont({
    src: [
      
      {
        path: '../public/fonts/CraftworkGrotesk-SemiBold.ttf',
        variable: '--font-craftwork-bold'
      },
      
    ],
  })

function Banner() {
  return (
    <div className='flex flex-col justify-center pb-10'>
        <h1 className={` ${craftworkSemiBold.className} mb-5 text-center text-3xl`}>Used by creative<br /> companies worldwide</h1>
        <div className='flex justify-center items-center space-x-20 mt-10'>
            <Image alt='' src={Google} />
            <Image alt='' src={Webflow} />
            <Image alt='' src={Google} />
            <Image alt='' src={Adobe} />
        </div>
    </div>
  )
}

export default Banner