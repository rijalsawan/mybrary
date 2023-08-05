import "@/styles/globals.css";
import Navbar from "@/components/Navbar";
import {useEffect, useState } from "react";
import { useRouter } from "next/router";
import LoadingBar from 'react-top-loading-bar';
import { ToastContainer, toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';

export default function App({ Component, pageProps}) {
  const [progress, setProgress] = useState(0)
  const [user, setUser] = useState({value:null})
  const [key, setKey] = useState(0)
  const router = useRouter();
  useEffect(() => {
    router.events.on('routeChangeComplete', () => setProgress(100))
    router.events.on('routeChangeStart', () => setProgress(40))
    const myuser = JSON.parse(localStorage.getItem("myuser"));
    console.log();
    if (myuser) {
      setUser({value:myuser.token, email:myuser.email})
    }
    else {
      setUser({value:null})
    }
    setKey(Math.random())
    }, [router.query, router.pathname]);
    const logout = () => {
      localStorage.removeItem('myuser')
      setUser({value:null})
      setKey(Math.random())
      router.push("/")
      toast.success("Logged out successfully")
    }
  return (
    <>
    <ToastContainer
    position="top-right"
    autoClose={1000}
    />
    <LoadingBar color = "#f11946" progress = {progress} waitingTime = {500} onLoadFinished = {()=>setProgress(0)}/>
    <Navbar logout = {logout} user = {user} key = {key}/>
    <Component logout = {logout} user = {user} {...pageProps} />
    </>
  );
}
