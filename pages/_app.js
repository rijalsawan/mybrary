import "@/styles/globals.css";
import Navbar from "@/components/Navbar";
import {useEffect, useState } from "react";
import { useRouter } from "next/router";
import LoadingBar from 'react-top-loading-bar';

export default function App({ Component, pageProps }) {
  const [progress, setProgress] = useState(0)
  const router = useRouter();
  return (
    useEffect(() => {
    router.events.on('routeChangeComplete', () => setProgress(100))
    router.events.on('routeChangeStart', () => setProgress(40))
    }, []),
    <>
     <LoadingBar color = "#f11946" progress = {progress} waitingTime = {500} onLoadFinished = {()=>setProgress(0)}/>
    <Navbar/>
      <Component {...pageProps} />
    </>
  );
}
