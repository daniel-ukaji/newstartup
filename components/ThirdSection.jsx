import React from 'react'
import localFont from 'next/font/local';
import Webflow from '@/public/Webflow.png';
import Google from '@/public/Google.png';
import Adobe from '@/public/Adobe.png';
import Image from 'next/image';
import CardDouble from '@/public/CardDouble.png';
import CardDoub from '@/public/CardDoub.png';
import Location from '@/public/Location.png';

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

function ThirdSection() {
  return (
    <div className='flex flex-col justify-center max-w-6xl mx-auto pb-10 mt-24 '>
        <h1 className={` ${craftworkSemiBold.className} mb-5 text-center text-3xl`}>Checking, zero monthly fees</h1>
        <div className='flex justify-between items-center mt-10'>
            <div>
                <Image alt='' src={CardDouble}  className='mb-3'/>
                <h1 className={`${craftworkBold.className} text-lg font-medium`}>Easy Payments</h1>
                <p className={` ${craftworkRegular.className}`}>Pay vendors and bills by ACH,<br /> wire, or check</p>
            </div>

            <div>
                <Image alt='' src={CardDoub} className='mb-3'/>
                <h1 className={`${craftworkBold.className} text-lg font-medium`}>Easy Payments</h1>
                <p className={` ${craftworkRegular.className}`}>Pay vendors and bills by ACH,<br /> wire, or check</p>
            </div>

            <div>
                <Image alt='' src={Location} className='mb-3' />
                <h1 className={`${craftworkBold.className} text-lg font-medium`}>Easy Payments</h1>
                <p className={` ${craftworkRegular.className}`}>Pay vendors and bills by ACH,<br /> wire, or check</p>
            </div>
        </div>
    </div>
  )
}

export default ThirdSection