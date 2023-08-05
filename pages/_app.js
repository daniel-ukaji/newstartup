// import { AuthProvider } from "@/services/AuthContext";
import "@/styles/globals.css";
import { useEffect } from 'react';
import { useRouter } from 'next/router';
import { getUserToken } from '@/services/auth';
import { Toaster } from "@/components/ui/toaster";
import localFont from 'next/font/local';
// import CraftworkBold from '../public/fonts/'

const craftwork = localFont({
  src: [
    {
      path: '../public/fonts/CraftworkGrotesk-Bold.ttf',
    },
    {
      path: '../public/fonts/CraftworkGrotesk-Heavy.ttf',
    },
    {
      path: '../public/fonts/CraftworkGrotesk-Medium.ttf',
    },
    {
      path: '../public/fonts/CraftworkGrotesk-Regular.ttf',
    },
    {
      path: '../public/fonts/CraftworkGrotesk-SemiBold.ttf',
    },
  ],
  variable: '--font-craftwork',
})

function MyApp({ Component, pageProps }) {
  const router = useRouter();

  

  useEffect(() => {
    const userToken = getUserToken();
    // if (!userToken && !router.pathname.startsWith('/login')) {
    //   router.push('/login');
    // }
    console.log(userToken)
  }, []);
  return (
      <div className="">
        <Component {...pageProps} />
        <Toaster />

      </div>
  );
}

export default MyApp;
