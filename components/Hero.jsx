import React from 'react'
import localFont from 'next/font/local';
import Image from 'next/image';
import CardPic from '@/public/Card.png';

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

function Hero() {
  return (
    <div className='flex items-center justify-between mt-10 max-w-6xl mx-auto mb-14 pb-10'>
        <div className='mt-20'>
            <h1 className={` ${craftworkBold.className} font-extrabold text-5xl leading-tight`}>Useful rewards,<br /> easy banking,<br /> designed for you.</h1>
            <p className={` ${craftworkRegular.className} text-xl mt-4 leading-snug`}>Safe secure banking for creative<br /> professionals has arrived. We are<br /> here to help.</p>
            <div className='flex space-x-3 mt-7'>
                <button className={` ${craftworkMedium.className} py-2 px-5 border rounded-md bg-[#212121] text-white font-semibold`}>Get Started</button>
            </div>
        </div>
        <div>
          <Image alt='' src={CardPic}  objectFit='cover'   />
        </div>
    </div>
  )
}

export default Hero