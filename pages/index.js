import Image from 'next/image'
import { Inter } from 'next/font/google'
import Link from 'next/link'
import Header from '@/components/Header'
import Hero from '@/components/Hero'
import { useEffect } from 'react'
import { getUserToken, logout } from '@/services/auth'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {

  useEffect(() => {
    const userToken = getUserToken();
    console.log(userToken)
  }, [])
  

  return (
    <div className=''>
      <Header />
      <Hero />
    </div>
  )
}
