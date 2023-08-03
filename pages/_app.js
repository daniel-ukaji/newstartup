// import { AuthProvider } from "@/services/AuthContext";
import "@/styles/globals.css";
import { useEffect } from 'react';
import { useRouter } from 'next/router';
import { getUserToken } from '@/services/auth';
import { Toaster } from "@/components/ui/toaster";

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
      <div>
        <Component {...pageProps} />
        <Toaster />

      </div>
  );
}

export default MyApp;
