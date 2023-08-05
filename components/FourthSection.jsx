import React from 'react'
import localFont from 'next/font/local';
import Webflow from '@/public/Webflow.png';
import Google from '@/public/Google.png';
import Adobe from '@/public/Adobe.png';
import Image from 'next/image';
import YellowCard from '@/public/YellowCard.png';
import CustomerPhoto from '@/public/CustomerPhoto.png';

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

function FourthSection() {
  return (
    <div className=' max-w-6xl mx-auto pb-10 mt-20'>
        <div className='flex justify-between items-center mt-10'>
            <div className=''>
                <h1 className={` ${craftworkMedium.className} font-bold text-4xl `}>Built for creative<br /> businesses</h1>
                <p className={` ${craftworkRegular.className} text-lg mt-4 leading-snug`}>Control gives our team the flexibility<br /> we need to send over invoices, keep<br /> track of payees, and manage our<br /> money all in one place.</p>
            </div>
            <div className='m-0 p-0 w-1/2'>
                <Image alt='' src={CustomerPhoto}  objectFit='cover' className=''   />
            </div>
        </div>
    </div>
  )
}

export default FourthSection