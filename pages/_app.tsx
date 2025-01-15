import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import { useEffect } from 'react';
import { ParallaxProvider } from 'react-scroll-parallax'
import { ToastContainer } from 'react-toastify';
import AOS from 'aos';
import 'aos/dist/aos.css';

export default function App({ Component, pageProps }: AppProps) {
  useEffect(() => {
    AOS.init({});
  }, []);
  return (
    <ParallaxProvider>
      <ToastContainer />
      <Component {...pageProps} />
    </ParallaxProvider>
  )
}
