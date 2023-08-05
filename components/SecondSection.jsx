import React from 'react'
import localFont from 'next/font/local';
import Webflow from '@/public/Webflow.png';
import Google from '@/public/Google.png';
import Adobe from '@/public/Adobe.png';
import Image from 'next/image';
import YellowCard from '@/public/YellowCard.png';
import Customer from '@/public/Customer.png';

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

function SecondSection() {
  return (
    <div className=' max-w-6xl mx-auto pb-10 mt-20'>
        <div className='flex flex-row-reverse justify-between items-center mt-10'>
            <div className=''>
                <h1 className={` ${craftworkMedium.className} font-bold text-4xl `}>Award winning<br /> customer support.</h1>
                <p className={` ${craftworkRegular.className} text-lg mt-4 leading-snug`}>Our team is available to walk you through the<br /> process and help you obtain the funds you<br /> need. It does not stop there, our support team<br /> chat is always available.</p>
                
            </div>
            <div className=' w-1/2'>
                <Image alt='' src={Customer}  objectFit='cover' className='object-cover'   />
            </div>
        </div>
    </div>
  )
}

export default SecondSection