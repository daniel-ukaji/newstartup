import Image from 'next/image'
import { Inter } from 'next/font/google'
import Link from 'next/link'
import Header from '@/components/Header'
import Hero from '@/components/Hero'
import { useEffect } from 'react'
import { getUserToken, logout } from '@/services/auth'
import Banner from '@/components/Banner'
import FirstSection from '@/components/FirstSection'
import SecondSection from '@/components/SecondSection'
import ThirdSection from '@/components/ThirdSection'
import FourthSection from '@/components/FourthSection'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {

  useEffect(() => {
    const userToken = getUserToken();
    console.log(userToken)
  }, [])
  

  return (
    <div className='bg-[#FCF9F1]'>
      <Header />
      <Hero />
      <Banner />
      <FirstSection />
      <SecondSection />
      <ThirdSection />
      <FourthSection />
    </div>
  )
}
